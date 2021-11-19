import styled, { keyframes } from "styled-components";
import HomeImage from "../assets/home.jpeg";
import { motion } from "framer-motion";

const lineMove = keyframes`
0% {
  height: 0;
  bottom: -12px;
}

15% {
  height: 12px;
  bottom: -24px;
}

50% {
  height: 80px;
  bottom: -92px;
}

85% {
  height: 12px;
  bottom: -118px;
}

to {
  height: 0;
  bottom: -130px;
}
`;

const bounce = keyframes`
0% {
  bottom: 3vw;
}

50% {
  bottom: calc(3vw + 5px);
}

to {
  bottom: 3vw;
}
`;

const HeroSection = styled.div`
  width: 100vw;
  height: 100%;
  background-color: var(--white);
  display: flex;
  justify-content: center;
`;

const Topic = styled(motion.div)`
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  height: 50vw;
  color: var(--white);
`;

const Title = styled(motion.h1)`
  font-size: calc(3rem + 1vw);
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const SubTitle = styled(motion.h4)`
  font-size: calc(1rem + 1vw);
`;
const HelpText = styled(motion.h6)`
  font-size: calc(0.7rem + 0.5vw);
  font-weight: 300;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 20;
  transition: all 0.3s ease;

  img {
    height: 100%;
  }
`;

const Mask = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 20;
`;

const ScrollWrap = styled.div`
  position: absolute;
  z-index: 20;
  width: 30px;
  height: 130px;
  top: calc(2rem + 40vw);
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
  display: block;
  animation: ${bounce} 1.4s ease infinite;

  @media only Screen and (max-width: 768px) {
    display: none;
  }
`;

const ScrollNav = styled.div`
  position: absolute;
  top: 0;
  color: var(--white);
  font-size: 11px;

  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 1px;
    height: 100px;
    background-color: var(--white);
    left: 12px;
    bottom: -130px;
    animation: ${lineMove} 0.9s ease-in-out infinite;
  }
`;

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -200 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <HeroSection id="home">
      <Topic variants={container} initial="hidden" animate="show">
        <Title variants={item}>Life on LINE</Title>
        <SubTitle variants={item}>LINE 始終陪伴在你身旁</SubTitle>
        <HelpText variants={item}>
          這不是真正的LINE官網，只是網頁前端練習，與原本網站有極大差距。
        </HelpText>
      </Topic>

      <Background>
        <img src={HomeImage} alt="home" />
        <Mask />
      </Background>

      <ScrollWrap>
        <ScrollNav>向下滾動</ScrollNav>
      </ScrollWrap>
    </HeroSection>
  );
};

export default Hero;
