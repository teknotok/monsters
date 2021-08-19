import "./searchBox.css";
export const Searchbox = ({ placeholder, handleChange }) => {
  return (
    <div>
    <input
      className="search"
      placeholder={placeholder}
      onChange={handleChange}
    ></input></div>
  );
};
