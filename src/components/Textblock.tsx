import styled from "styled-components";
import InfoButton from "./InfoButton";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface TextblockProps {
  title: string;
  subtitle: string;
  helptext: string;
  children?: JSX.Element;
}

const LeftBlock = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  line-height: 1.5;
  color: var(--black);
  position: relative;

  @media only Screen and (max-width: 768px) {
    width: 100%;
  }

  button {
    margin: 1.5rem 0;
  }
`;

const Title = styled.h3`
  font-size: calc(1rem + 1.8vw);
`;

const SubTitle = styled.h4`
  color: var(--green);
  font-size: calc(0.5rem + 0.8vw);
  font-weight: 600;
  margin: 0.5rem 0;
`;

const Textblock = ({ title, subtitle, helptext, children }: TextblockProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <LeftBlock
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={controls}
    >
      {children}
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <p>{helptext}</p>
      <InfoButton />
    </LeftBlock>
  );
};

export default Textblock;
