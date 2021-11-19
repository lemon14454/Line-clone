import ImgBlock from "src/components/ImgBlock";
import Textblock from "src/components/Textblock";
import styled from "styled-components";

const AboutSection = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
`;

const Title = styled.div`
  text-align: center;
  width: 100%;
  padding: 1rem 1.5rem;
  margin-top: 3rem;
  h1 {
    font-size: 3.5rem;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 3rem 6rem;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Title>
        <h1>Life on LINE</h1>
        <p>
          超越通訊軟體，LINE為用戶建構全新的溝通型態與豐富的數位生活，成為用戶生活中不可或缺的平台。
        </p>
      </Title>

      <Content>
        <Textblock
          title={"LINE TODAY"}
          subtitle={"隨點隨看 生活快充"}
          helptext={
            "最即時的新聞、影音、運動賽事和娛樂內容直播，讓你話題永不斷線，LINE TODAY陪伴您的每一天！"
          }
        />
        <ImgBlock src={"about1.png"} />
      </Content>
      <Content>
        <Textblock
          title={"LINE貼文串"}
          subtitle={"探索樂趣 分享生活"}
          helptext={
            "在貼文串追蹤你的最愛．有感內容不錯過。打造你的個人閱知頻道，探索生活大小事。分享所見所聞，串連人際、啟發創意的無限可能！"
          }
        />
        <ImgBlock src={"about2.png"} />
      </Content>
      <Content>
        <Textblock
          title={"LINE Pay"}
          subtitle={"付款、轉帳、生活繳費，輕鬆簡單又便利！"}
          helptext={
            "付款簡單又便利，還能輕鬆轉帳給LINE好友，動動手指輕鬆完成日常生活各種帳單繳費， 免出門省時又省力。"
          }
        />
        <ImgBlock src={"about3.png"} />
      </Content>
      <Content>
        <Textblock
          title={"LINE購物"}
          subtitle={"先LINE購物再購物"}
          helptext={
            "涵蓋各大購物、拍賣、精品、通路、旅遊、及票券商店，輕鬆貨比五百家，一站比價三千萬筆商品，再享LINE POINTS回饋賺不停！"
          }
        />
        <ImgBlock src={"about4.png"} />
      </Content>
      <Content>
        <Textblock
          title={"LINE TV"}
          subtitle={"共享追劇生活"}
          helptext={
            "和朋友一起追劇，不錯過最新、最熱門、最潮的話題大劇，即時分享娛樂影音，展開精彩生活故事，LINE TV是您的追劇第一選擇！"
          }
        />
        <ImgBlock src={"about5.png"} />
      </Content>
    </AboutSection>
  );
};

export default About;
