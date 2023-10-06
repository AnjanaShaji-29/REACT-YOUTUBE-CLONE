import { AddTaskOutlined, ReplyOutlined, ThumbDownOffAltOutlined, ThumbUpOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div`

`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: {{( theme )} => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: {{( theme )} => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: {{( theme )} => theme.text};
  
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: {{( theme )} => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: {{( theme )} => theme.textSoft};
  font-size: 12px;
`;
const ChannelDescription = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  height: max-content;
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
`;


const Video = () => {
  return (
    <Container>
      <Content> 
        <VideoWrapper>
        <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title> Test Video </Title>
        <Details>
          <Info> 84,644 views  30 Jun 2022   </Info>
          <Buttons>
            <Button> <ThumbUpOutlined /> 123 </Button>
            <Button> <ThumbDownOffAltOutlined /> Dislike </Button>
            <Button> <ReplyOutlined /> Share </Button>
            <Button> <AddTaskOutlined/> Save </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="" />
            <ChannelDetail>
              <ChannelName> Web Dev </ChannelName>
              <ChannelCounter> 200k  subscribers </ChannelCounter>
              <ChannelDescription> Lorem ipsum dolor, sit amet consectectur dsffa xfbfb sfe
              wdawd sdf seferse dffd sdfsgg sfhfh
               </ChannelDescription>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe> SUBSCRIBE </Subscribe>
        </Channel>
      </Content>
        <Recommendation> recommendation </Recommendation>
    </Container>
  )
}

export default Video;