import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
