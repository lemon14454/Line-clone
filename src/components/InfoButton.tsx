import styled from "styled-components";
import { FiExternalLink } from "react-icons/fi";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 3px;
  padding: 0.7rem;
  background-color: var(--lighter-gray);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: var(--light-gray);
    transform: scale(0.95);
  }

  @media only Screen and (max-width: 768px) {
    transform: scale(0.8);
    &:hover {
      transform: scale(0.75);
    }
  }
`;

const InfoButton = () => {
  return (
    <Button>
      <FiExternalLink size={24} />
      <h4>其他詳細資訊</h4>
    </Button>
  );
};

export default InfoButton;
