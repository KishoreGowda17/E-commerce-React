import "./Button.css"


const Button = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className="btn-rec">
      {title}
    </button>
  );
};

export default Button;
