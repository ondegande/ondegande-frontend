import { useCallback } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import "../styles/tourPlans.css";

import MakeCourseMap from "./MakeCourseMap";

export default function TourPlans({ onDragEnd, days, dayContainerRef, deleteDay, isMapVisible, deleteCourse }) {
  const combineRefs = useCallback(
    (...refs) =>
      (el) => {
        refs.forEach((ref) => {
          if (typeof ref === "function") ref(el);
          else if (ref) ref.current = el;
        });
      },
    []
  );

  return (
    <div className="plans__course column gap-20 bg-ffffff br-12">
      <h1 className="f-24 w-600">여행 일정</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid-3 gap-20">
          {days.map((day, dayIndex) => (
            <Droppable key={dayIndex} droppableId={`${dayIndex}`}>
              {(provided) => (
                <div
                  className="course__day bg-f8f8f8 br-12"
                  ref={combineRefs(provided.innerRef, (el) => (dayContainerRef.current[dayIndex] = el))}
                  {...provided.droppableProps}
                >
                  <div className="row j-space-between">
                    <h3>{day.title}</h3>
                    <FontAwesomeIcon
                      className="c-ff2b2b cursor"
                      onClick={() => deleteDay(dayIndex)}
                      icon={faTrashCan}
                    />
                  </div>

                  {isMapVisible && (
                    <div ref={(el) => (dayContainerRef.current[dayIndex] = el)}>
                      <MakeCourseMap courses={day.courses} mapId={`map-${dayIndex}`} />
                    </div>
                  )}

                  {day.courses.map((course, courseIndex) => (
                    <Draggable
                      key={course.order}
                      draggableId={`${dayIndex}-${course.order}-${course.name}`}
                      index={courseIndex}
                    >
                      {(provided) => (
                        <div
                          className="course__info row j-space-between a-center bg-ffffff br-12"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="column gap-4">
                            <span className="f-18 w-600">
                              {course.order}. {course.name}
                            </span>
                            <span className="f-14 w-400 c-777777">{course.road_address_name || "주소 없음"}</span>
                          </div>
                          <button
                            className="place__delete bg-ff2b2b br-100 c-ffffff cursor"
                            onClick={() => deleteCourse(dayIndex, courseIndex)}
                          >
                            x
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
