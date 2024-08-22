import PropTypes from "prop-types";
import "./Button.css";

const Button1 = ({ className = "" }) => {
  return (
    <div className={`button ${className}`}>
      <div className="login-now">LOG IN</div>
    </div>
  );
};

Button1.propTypes = {
  className: PropTypes.string,
};

export default Button1;
