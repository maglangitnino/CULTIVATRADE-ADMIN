import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LOADINGBAR2 from "./pages/LOADINGBAR";
import LOADINGBAR1 from "./pages/LOADINGBAR1";
import LOADINGBAR11 from "./pages/LOADINGBAR11";
import ADSIINVENTORY from "./pages/ADSIINVENTORY";
import ADGRREPORT from "./pages/ADGRREPORT";
import ADSELLERAPPLICATION from "./pages/ADSELLERAPPLICATION";
import ADPROFILE from "./pages/ADPROFILE";
import ADSELLERAPPLICATION1 from "./pages/ADSELLERAPPLICATION1";
import ADMPSELLER from "./pages/ADMPSELLER";
import ADSIGNIN from "./pages/ADSIGNIN";
import ADMANAGEPRODUCTS from "./pages/ADMANAGEPRODUCTS";
import LOGOUTPAGE1 from "./pages/LOGOUTPAGE1";
import LOADINGBAR from "./pages/LOADINGBAR2";
import LOGOUTPAGE from "./pages/LOGOUTPAGE";
import ADMPPRODUCT from "./pages/ADMANAGEPRODUCTS1";
import ADUSERSINVENTORY from "./pages/ADUSERSINVENTORY";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/loading-bar-3":
        title = "";
        metaDescription = "";
        break;
      case "/loading-bar-2":
        title = "";
        metaDescription = "";
        break;
      case "/adsiinventory":
        title = "";
        metaDescription = "";
        break;
      case "/adgrreport":
        title = "";
        metaDescription = "";
        break;
      case "/adseller-application":
        title = "";
        metaDescription = "";
        break;
      case "/adprofile":
        title = "";
        metaDescription = "";
        break;
      case "/admpbuyer":
        title = "";
        metaDescription = "";
        break;
      case "/admpseller":
        title = "";
        metaDescription = "";
        break;
      case "/ad-sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/admanage-products":
        title = "";
        metaDescription = "";
        break;
      case "/log-out-page":
        title = "";
        metaDescription = "";
        break;
      case "/loading-bar-31":
        title = "";
        metaDescription = "";
        break;
      case "/log-out-page1":
        title = "";
        metaDescription = "";
        break;
      case "/admpproduct":
        title = "";
        metaDescription = "";
        break;
      case "/ad-users-inventory":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LOADINGBAR2 />} />
      <Route path="/loading-bar-3" element={<LOADINGBAR1 />} />
      <Route path="/loading-bar-2" element={<LOADINGBAR11 />} />
      <Route path="/adsiinventory" element={<ADSIINVENTORY />} />
      <Route path="/adgrreport" element={<ADGRREPORT />} />
      <Route path="/adseller-application" element={<ADSELLERAPPLICATION />} />
      <Route path="/adprofile" element={<ADPROFILE />} />
      <Route path="/admpbuyer" element={<ADSELLERAPPLICATION1 />} />
      <Route path="/admpseller" element={<ADMPSELLER />} />
      <Route path="/ad-sign-in" element={<ADSIGNIN />} />
      <Route path="/admanage-products" element={<ADMANAGEPRODUCTS />} />
      <Route path="/log-out-page" element={<LOGOUTPAGE1 />} />
      <Route path="/loading-bar-31" element={<LOADINGBAR />} />
      <Route path="/log-out-page1" element={<LOGOUTPAGE />} />
      <Route path="/admpproduct" element={<ADMPPRODUCT />} />
      <Route path="/ad-users-inventory" element={<ADUSERSINVENTORY />} />
    </Routes>
  );
}
export default App;
