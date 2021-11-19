import styled from "styled-components";
import ServiceCard from "src/components/ServiceCard";

const ServiceSection = styled.div`
  background-color: var(--light-green);
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 0 10rem 0;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const Subtitle = styled.h4`
  color: var(--light-gray);
  font-weight: 500;
`;

const Grid = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  row-gap: 3rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Services = () => {
  return (
    <ServiceSection id="services">
      <Title>服務總覽</Title>
      <Subtitle>試著拖曳下方圖示</Subtitle>
      <Grid>
        <ServiceCard
          title={"Line Messenger"}
          descrip={"拉近人與人、人與資訊及應用服務間的距離的通訊軟體"}
          src={"line.png"}
        />
        <ServiceCard
          title={"Line STORE"}
          descrip={"可購買 LINE 貼圖、主題或遊戲中貨幣的官方線上商店"}
          src={"line-store.png"}
        />
        <ServiceCard
          title={"Line TV"}
          descrip={"共享追劇生活"}
          src={"line-tv.png"}
        />
        <ServiceCard
          title={"Line MUSIC"}
          descrip={"全方位音樂服務，不只聽音樂、換鈴聲，還能練唱！"}
          src={"line-music.png"}
        />
      </Grid>
    </ServiceSection>
  );
};

export default Services;
