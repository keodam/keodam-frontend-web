// LandingPage.tsx
import { useState } from "react";
import LandingHeader from "../../components/Landing/LandingHeader";
import NewFirst from "../../components/Landing/steps/NewFirst";
import Second from "../../components/Landing/steps/Second";
import Third from "../../components/Landing/steps/Third";
import Fourth from "../../components/Landing/steps/Fourth";
import { FullpageContainer, FullpageSection } from "@shinyongjun/react-fullpage";
import "@shinyongjun/react-fullpage/css";

const LandingPage = () => {
  const [step, setStep] = useState(0);
  const [scrollToSection3, setScrollToSection3] = useState(false);

  const handleSetStep = (index: number, to3?: boolean) => {
    setStep(index);
    setScrollToSection3(index === 3 ? !!to3 : false);
  };

  return (
     <div>
    <LandingHeader step={step} setStep={handleSetStep} />

    {/* 👇 FullpageContainer를 래퍼로 감싸서 높이 제어 */}
    <div style={{ height: "100vh" }}>
      <FullpageContainer activeIndex={step} setActiveIndex={setStep}>
        <FullpageSection>
          <NewFirst />
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
    </div>
  </div>
  );
};

export default LandingPage;
