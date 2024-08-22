import PropTypes from "prop-types";
import "./FrameComponent21.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`input-containers ${className}`}>
      <div className="email">Email</div>
      <input className="email1" type="text" />
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
