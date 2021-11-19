import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface ImgBlockProps {
  src: string;
}

const RightBlock = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 50vw;
  object-fit: cover;
  object-position: center center;

  @media only screen and (max-width: 768px) {
    width: 90vw;
  }
`;

const ImgBlock = ({ src }: ImgBlockProps) => {
  const ImageSrc = require(`../assets/${src}`).default;
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
    hidden: { opacity: 0, x: 300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <RightBlock
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={controls}
    >
      <Image src={ImageSrc} alt="About" />
    </RightBlock>
  );
};

export default ImgBlock;
