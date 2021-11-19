import About from "src/Sections/About";
import Communicate from "src/Sections/Communicate";
import Hero from "src/Sections/Hero";
import Services from "src/Sections/Services";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  display: none;
  font-weight: bold;
  background-color: var(--white);
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid var(--light-gray);

  @media only Screen and (max-width: 768px) {
    position: sticky;
    padding-top: 2rem;
    z-index: 5;
    top: 0;
    display: flex;
    justify-content: center;
    gap: 4rem;
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

const Home = () => {
  return (
    <Container>
      <Nav>
        <a href="#about">Life on LINE</a>
        <a href="#communicate">通訊軟體</a>
        <a href="#services">服務導覽</a>
      </Nav>
      <Hero />
      <About />
      <Communicate />
      <Services />
    </Container>
  );
};

export default Home;
