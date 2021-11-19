import CommunicateCard from "src/components/CommunicateCard";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const CommunicateSection = styled.div`
  background-color: var(--background-gray);
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
`;

const Title = styled.div`
  text-align: center;
  width: 100%;
  padding: 1rem 1.5rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3.5rem;
  }
`;

const Grid = styled(motion.div)`
  margin: 3rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  row-gap: 2rem;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Communicate = () => {
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
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <CommunicateSection id="communicate">
      <Title>
        <h1>通訊軟體</h1>
        <p>
          一款全新型態的通訊軟體，讓您隨時隨地享受免費傳訊、免費通話等溝通樂趣。
        </p>
      </Title>

      <Grid ref={ref} initial="hidden" variants={variants} animate={controls}>
        <CommunicateCard
          src={"commun1.png"}
          title={"聊天、語音通話&視訊通話"}
          descrip={
            "能夠和好友一對一或多人群組訊息聊天，或是進行語音、視訊通話。"
          }
        />
        <CommunicateCard
          src={"commun2.png"}
          title={"貼圖＆表情貼＆主題"}
          descrip={
            "使用有趣的貼圖或表情貼豐富聊天，也能更換超讚的主題來表達自己。"
          }
        />
        <CommunicateCard
          src={"commun3.png"}
          title={"主頁"}
          descrip={"可以快速連結 LINE 的各種服務，包含貼圖等多樣的內容資訊。"}
        />
        <CommunicateCard
          src={"commun4.png"}
          title={"社群"}
          descrip={"輕鬆分享共同興趣、開心聊出好麻吉。"}
        />
        <CommunicateCard
          src={"commun5.png"}
          title={"貼文串"}
          descrip={
            "供你分享你的近況，或是瞭解好友的最新消息。透過「探索」功能，能找到更多你喜愛的內容。"
          }
        />
        <CommunicateCard
          src={"commun6.png"}
          title={"錢包"}
          descrip={
            "使用「 LINE Pay 」可以進行安全方便的行動付款或轉帳，也能使用其他金融相關服務。"
          }
        />
      </Grid>
    </CommunicateSection>
  );
};

export default Communicate;
