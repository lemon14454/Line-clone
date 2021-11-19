import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

interface CardProps {
  src: string;
  title: string;
  descrip: string;
}

const Card = styled(motion.div)`
  grid-column: span 1 / span 1;
  width: 100%;
  padding: 3rem 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    grid-column: span 2 / span 2;
  }
`;

const Image = styled(motion.img)`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const Title = styled.h2`
  margin: 2rem 0 1rem;
  font-size: calc(1rem + 0.5vw);
`;

const Descrip = styled.p`
  font-size: 0.85rem;
`;

const ServiceCard = ({ src, title, descrip }: CardProps) => {
  const ImageSrc = require(`../assets/${src}`).default;
  const constraintsRef = useRef(null);

  return (
    <Card ref={constraintsRef}>
      <Image src={ImageSrc} drag dragConstraints={constraintsRef} />
      <Title>{title}</Title>
      <Descrip>{descrip}</Descrip>
    </Card>
  );
};

export default ServiceCard;
