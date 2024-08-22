import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div className={`loading-bar-2-inner ${className}`}>
      <div className="frame-parent18">
        <div className="frame">
          <div className="vector-group">
            <img
              className="frame-child18"
              loading="lazy"
              alt=""
              src="/rectangle-3.svg"
            />
            <div className="frame-child19" />
          </div>
        </div>
        <div className="farmers-wrapper">
          <div className="farmers">FARMERS</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
