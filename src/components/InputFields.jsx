import { useCallback } from "react";
import FrameComponent2 from "./FrameComponent2";
import { useNavigate } from "react-router-dom";
import Button1 from "./Button";
import PropTypes from "prop-types";
import "./InputFields.css";

const InputFields = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLogInBtnClick = useCallback(() => {
    navigate("/adseller-application");
  }, [navigate]);

  return (
    <div className={`input-fields ${className}`}>
      <FrameComponent2 />
      <div className="input-containers1">
        <div className="password1">Password</div>
        <div className="password2" />
      </div>
      <div className="log-in-btn-wrapper">
        <button className="log-in-btn" onClick={onLogInBtnClick}>
          <Button1 />
        </button>
      </div>
    </div>
  );
};

InputFields.propTypes = {
  className: PropTypes.string,
};

export default InputFields;
