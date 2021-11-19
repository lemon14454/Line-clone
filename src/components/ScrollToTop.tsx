import { IoIosArrowDropupCircle } from "react-icons/io";
import styled from "styled-components";

const Up = styled.div`
  position: fixed;
  right: 3rem;
  bottom: 1rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ScrollToTop = () => {
  const ScrollUp = () => {
    const element = document.getElementById("home");
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <Up onClick={ScrollUp}>
      <IoIosArrowDropupCircle size={48} />
    </Up>
  );
};

export default ScrollToTop;
