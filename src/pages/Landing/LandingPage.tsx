import styles from "./LandingPage.module.less";
import LandingHeader from "../../components/Landing/LandingHeader";
import First from "../../components/Landing/steps/First";
import Second from "../../components/Landing/steps/Second";
import Third from "../../components/Landing/steps/Third";
import Fourth from "../../components/Landing/steps/Fourth";
import LandingFooter from "../../components/Landing/LandingFooter";

const LandingPage = () => {
  return (
    <div>
      <LandingHeader />
      <First />
      <Second />
      <Third />
      <Fourth />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
