import "../styles/courseButton.css";

export default function CourseButton({ handleSubmit, handleRandomCourse }) {
  return (
    <div className="course__buttons plan__buttons column gap-16 bg-ffffff br-12">
      <button className="course__button__course bg-155dfc br-12 f-14 c-ffffff cursor" onClick={handleSubmit}>
        코스 보기
      </button>
      <button className="course__button__random bg-fdf2f8 br-12 f-14 c-9810fa cursor" onClick={handleRandomCourse}>
        랜덤 코스
      </button>
    </div>
  );
}
