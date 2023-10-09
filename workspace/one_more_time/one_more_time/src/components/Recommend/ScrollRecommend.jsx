import styled from "styled-components";

const items = [
  {
    title: "강원도 휴양지",
    hashtags: "힐링",
    img: "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/1jPF/image/ydzXe-ouzUNj26CMuy3ItgL9jV4.jpg",
  },
  {
    title: "강원도 휴양지",
    hashtags: "힐링",
    img: "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/1jPF/image/ydzXe-ouzUNj26CMuy3ItgL9jV4.jpg",
  },
  {
    title: "강원도 휴양지",
    hashtags: "힐링",
    img: "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/1jPF/image/ydzXe-ouzUNj26CMuy3ItgL9jV4.jpg",
  },
  {
    title: "강원도 휴양지",
    hashtags: "힐링",
    img: "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/1jPF/image/ydzXe-ouzUNj26CMuy3ItgL9jV4.jpg",
  },
  {
    title: "강원도 휴양지",
    hashtags: "힐링",
    img: "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/1jPF/image/ydzXe-ouzUNj26CMuy3ItgL9jV4.jpg",
  },
];

export const ScrollRecommend = () => {
  return (
    <StyledContainer>
      {items.map((item, key) => (
        <StyledItem>
          <StyledItemImage src={item.img} alt="img" />
          <div>{item.title}</div>
          <p>{`#${item.hashtags}`}</p>
        </StyledItem>
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  overflow: scroll;
  height: 73vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledItem = styled.div`
  width: 40vw;
  height: 30vh;
  background-color: powderblue;
  border-radius: 15px;
  margin: 10px;
  text-align: center;
`;

const StyledItemImage = styled.img`
  width: 100%;
  height: 20vh;
  border-radius: 15px;
`;
