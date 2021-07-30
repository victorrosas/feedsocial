import styled, { css } from "styled-components";

import { 
  ExpandMore, 
  Alarm, 
  Lock, 
  ThumbUp, 
  Message, 
  Share 
} from '../../styles/Icons';

const IconCSS = css`
  width: 20px;
  height: 20px;

  fill: var(--gray);
  
`;


export const Container = styled.div`
  background: white;
  border-radius: 12px;
  padding: 15px;
  
  margin-bottom: 15px;

  
`;

export const PostShared = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;

  border: 3.75px solid var(--primary);
  background: var(--gray);
  border-radius: 50%;
`;

export const HeaderData = styled.div`
  padding-left: 10px;
  width: 100%;
`;

export const ProfileData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    color: var(--like);
  }
`;

export const ArrowDown = styled(ExpandMore)`
  ${IconCSS}
`;

export const ClockIcon = styled(Alarm)`
  ${IconCSS}
  width: 15px;
  height: 15px;
`;

export const LockIcon = styled(Lock)`
  ${IconCSS}
  width: 15px;
  height: 15px;
`;

export const LikeIcon = styled(ThumbUp)`
  ${IconCSS}
`;

export const MessageIcon = styled(Message)`
  ${IconCSS}
`;


export const ShareIcon = styled(Share)`
  ${IconCSS}
`;


export const Data = styled.div`
  display: flex;
  
`;

export const TimeData = styled.div`
  padding-right: 10px;
  
  > span {
    color: var(--gray);
    font-size: 12px;
    padding-left: 2px;
  }
`;

export const PrivateData = styled.div`
  > span {
    color: var(--gray);
    font-size: 12px;
    padding-left: 2px;
  }
`;

export const TextMain = styled.div`
  margin-top: 15px;
`;

export const Text = styled.div`
  > span {
    color: var(--gray);
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 15px;
  
`;

export const DataFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const LeftDataFooter = styled.div`
  > span {
    color: var(--gray);
    font-size: 12px;
    padding-left: 5px;
  }
`;

export const RightDataFooter = styled.div`
  display: flex;
`;

export const Coments = styled.div`
  padding-right: 5px;
  
   > span {
    color: var(--gray);
    font-size: 12px;
  }
`;

export const Shares = styled.div`
   > span {
    color: var(--gray);
    font-size: 12px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-around;
  width: 100%;

  margin: 10px 10px;

`;

export const LikeButton = styled.button`
  background: var(--background);
  border-radius: 25px;
  padding: 10px 50px;
  align-items: center;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: var(--like-light-hover);
  }


   > span {
    color: var(--primary);
    padding-left: 5px;
  }
`;

export const ComentsButton = styled.button`
   background: var(--background);
   border-radius: 25px;
   cursor: pointer;

   transition: 0.2s;

  &:hover {
    background: var(--like-light-hover);
  }

  padding: 10px 50px;

   > span {
    color: var(--primary);
    padding-left: 5px;
  }
`;

export const ShareButton = styled.button`
   background: var(--background);
   border-radius: 25px;
   cursor: pointer;

  padding: 10px 50px;

  transition: 0.2s;

  &:hover {
    background: var(--like-light-hover);
  }

   > span {
    color: var(--primary);
    padding-left: 5px;
  }
`;

