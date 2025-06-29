import styles from "./LandingPage.module.less";
import { useState } from "react";

import LandingHeader from "../../components/Landing/LandingHeader";
import First from "../../components/Landing/steps/First";
import Second from "../../components/Landing/steps/Second";
import Third from "../../components/Landing/steps/Third";
import Fourth from "../../components/Landing/steps/Fourth";
import LandingFooter from "../../components/Landing/LandingFooter";

import {
  FullpageContainer,
  FullpageSection,
} from "@shinyongjun/react-fullpage";
import "@shinyongjun/react-fullpage/css";

const LandingPage = () => {
  const [step, setStep] = useState<number>(0);

  return (
    <div>
      <LandingHeader />
      <FullpageContainer activeIndex={step} setActiveIndex={setStep}>
      <FullpageSection>
          <First />
        </FullpageSection>
        <FullpageSection>
          <Second />
        </FullpageSection>
        <FullpageSection>
          <Third />
        </FullpageSection>
        <FullpageSection>
          <Fourth />
        </FullpageSection>
      </FullpageContainer>
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
