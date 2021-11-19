import styled from "styled-components";
import { motion } from "framer-motion";

interface CardProps {
  src: string;
  title: string;
  descrip: string;
}

const Card = styled(motion.div)`
  text-align: center;
  grid-column: span 1 / span 1;
  padding: 0 3rem;
`;

const Image = styled.img``;

const Title = styled.h2`
  margin: 2rem 0 1rem;
`;

const Descrip = styled.p`
  font-size: 0.85rem;
`;

const CommunicateCard = ({ src, title, descrip }: CardProps) => {
  const ImageSrc = require(`../assets/${src}`).default;
  const variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Card variants={variants}>
      <Image src={ImageSrc} />
      <Title>{title}</Title>
      <Descrip>{descrip}</Descrip>
    </Card>
  );
};

export default CommunicateCard;
