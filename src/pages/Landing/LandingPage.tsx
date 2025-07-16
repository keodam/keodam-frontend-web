import { useState } from "react";
import LandingHeader from "../../components/Landing/LandingHeader";
import First from "../../components/Landing/steps/First";
import Second from "../../components/Landing/steps/Second";
import Third from "../../components/Landing/steps/Third";
import Fourth from "../../components/Landing/steps/Fourth";

import {FullpageContainer,FullpageSection,} from "@shinyongjun/react-fullpage";
import "@shinyongjun/react-fullpage/css";

const LandingPage = () => {
  const [step, setStep] = useState<number>(0);
  const [scrollToSection3, setScrollToSection3] = useState<boolean>(false);

  const handleSetStep = (index: number, scrollToSection3?: boolean) => {
    setStep(index);
    if (index === 3) {
      setScrollToSection3(!!scrollToSection3);
    } else {
      setScrollToSection3(false);
    }
  };

  return (
    <div>
      {step !== 0 && (
      <LandingHeader step={step} setStep={handleSetStep} />
    )}
      <FullpageContainer activeIndex={step} setActiveIndex={setStep}>
      <FullpageSection>
          <First setStep={handleSetStep} />
        </FullpageSection>
        <FullpageSection>
          <Second />
        </FullpageSection>
        <FullpageSection>
          <Third />
        </FullpageSection>
        <FullpageSection>
          <Fourth 
            autoScrollToSection3={scrollToSection3} 
            setAutoScrollToSection3={setScrollToSection3}
          />
        </FullpageSection>
      </FullpageContainer>
      {/* <LandingFooter /> */}
    </div>
  );
};

export default LandingPage;
