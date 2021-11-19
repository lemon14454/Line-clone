import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";

const Headers = styled.header`
  z-index: 1000;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  font-weight: bold;
  width: 100%;
  height: 75px;
  opacity: 0.95;
  background: var(--white);
  color: var(--black);
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);

  @media only Screen and (max-width: 768px) {
    background: transparent;
    position: absolute;
    z-index: 20;
    box-shadow: none;
  }
`;

const Logo = styled.h3`
  @media only Screen and (max-width: 768px) {
    color: var(--white);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4rem;

  @media only Screen and (max-width: 768px) {
    display: none;
  }

  a {
    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 3px;
      background: transparent;
      transition: width 0.5s;
    }
    &:hover::after {
      width: 100%;
      background: var(--black);
    }
  }
`;

const Locale = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media only Screen and (max-width: 768px) {
    color: var(--white);
  }
`;

const Header = () => {
  return (
    <Headers>
      <Logo>
        <a href="/">LINE</a>
      </Logo>

      <Nav>
        <a href="#about">Life on LINE</a>
        <a href="#communicate">通訊軟體</a>
        <a href="#services">服務導覽</a>
      </Nav>

      <Locale>
        <AiFillGithub size={24} />
        <a
          href="https://github.com/lemon14454"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </Locale>
    </Headers>
  );
};

export default Header;
