import "./LOADINGBAR.css";

const LOADINGBAR2 = () => {
  return (
    <div className="loading-bar-1">
      <img className="ct-logo-icon" alt="" src="/ct-logo2@2x.png" />
      <div className="loading-bar-wrapper">
        <div className="loading-bar">
          <img
            className="loading-bar-child"
            loading="lazy"
            alt=""
            src="/rectangle-3.svg"
          />
          <div className="connecting-wrapper">
            <div className="connecting">CONNECTING</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LOADINGBAR2;
