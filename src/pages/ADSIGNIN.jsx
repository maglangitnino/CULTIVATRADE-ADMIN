import InputFields from "../components/InputFields";
import "./ADSIGNIN.css";

const ADSIGNIN = () => {
  return (
    <div className="ad-sign-in">
      <div className="ctlogo-parent">
        <div className="ctlogo">
          <img className="ct-logo-icon7" alt="" src="/ct-logo4@2x.png" />
        </div>
        <div className="hello-welcome-wrapper">
          <div className="hello-welcome">
            <span className="hello-welcome-txt">
              <p className="hello">
                <span>
                  <b>Hello</b>
                  <span className="span">
                    <span className="span1">,</span>
                  </span>
                </span>
              </p>
              <p className="welcome">
                <span>
                  <span className="welcome1">WELCOME</span>
                  <span className="span2">!</span>
                </span>
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="login-form">
        <InputFields />
      </div>
    </div>
  );
};

export default ADSIGNIN;
