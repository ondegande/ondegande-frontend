import "../styles/themeSelect.css";

export default function ThemeSelect({ themes, selectedThemes, handleThemeToggle }) {
  return (
    <div className="theme__select column gap-20 bg-ffffff br-12">
      <div className="row a-center gap-10">
        <p className="p__number bg-9810fa br-100 f-14 w-600 c-ffffff">2</p>
        <h3 className="f-18">테마 선택</h3>
      </div>
      <div className="grid-3 gap-10">
        {themes.map((theme) => (
          <button
            key={theme}
            className={`theme__select__button bg-f6f3f4 br-12 w-400 cursor ${
              selectedThemes.includes(theme) ? "selected" : ""
            }`}
            onClick={() => handleThemeToggle(theme)}
          >
            {theme}
          </button>
        ))}
      </div>
    </div>
  );
}
