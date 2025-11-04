import { useState, useRef, useCallback } from "react";

export default function useDaysManager() {
  const [days, setDays] = useState([]);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const dayContainerRef = useRef([]);

  const reorderCourses = useCallback((courses) => courses.map((c, i) => ({ ...c, order: i + 1 })), []);
  const updateDayTitles = useCallback((daysArr) => daysArr.map((d, i) => ({ ...d, title: `Day ${i + 1}` })), []);

  const addDay = useCallback(() => {
    if (days.length >= 9) return alert("Day는 최대 9일까지 추가할 수 있습니다.");
    const newDays = [...days, { title: `Day ${days.length + 1}`, courses: [] }];
    setDays(newDays);
    setSelectedDayIndex(newDays.length - 1);
    setTimeout(() => {
      dayContainerRef.current[newDays.length - 1]?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }, [days]);

  const deleteDay = useCallback(
    (index) => {
      const newDays = days.filter((_, i) => i !== index);
      setDays(updateDayTitles(newDays));
      setSelectedDayIndex((prev) => Math.min(prev, newDays.length - 1));
    },
    [days, updateDayTitles]
  );

  const addCourse = useCallback(
    (place) => {
      if (days.length === 0) return alert("Day를 추가해주세요.");
      const updatedDays = [...days];
      const selectedDay = updatedDays[selectedDayIndex];
      const newCourse = {
        name: place.place_name,
        lat: place.y,
        lng: place.x,
        road_address_name: place.road_address_name || "주소 없음",
        order: selectedDay.courses.length + 1,
      };
      selectedDay.courses = reorderCourses([...selectedDay.courses, newCourse]);
      setDays(updatedDays);
    },
    [days, reorderCourses, selectedDayIndex]
  );

  const deleteCourse = useCallback(
    (dayIdx, courseIdx) => {
      const updatedDays = [...days];
      updatedDays[dayIdx].courses = reorderCourses(updatedDays[dayIdx].courses.filter((_, i) => i !== courseIdx));
      setDays(updatedDays);
    },
    [days, reorderCourses]
  );

  const onDragEnd = useCallback(
    ({ source, destination }) => {
      if (!destination) return;
      const newDays = [...days];
      const [moved] = newDays[source.droppableId].courses.splice(source.index, 1);
      newDays[destination.droppableId].courses.splice(destination.index, 0, moved);
      newDays.forEach((d) => (d.courses = reorderCourses(d.courses)));
      setDays(updateDayTitles(newDays));
    },
    [days, reorderCourses, updateDayTitles]
  );

  return { days, dayContainerRef, addDay, deleteDay, addCourse, deleteCourse, onDragEnd };
}
