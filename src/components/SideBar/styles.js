import styled, { css } from "styled-components";

import { LocationOn } from '../../styles/Icons';

const IconCSS = css`
  width: 20px;
  height: 20px;

  fill: var(--gray);
  
`;

export const LocationIcon = styled(LocationOn)`
  ${IconCSS}
  fill: var(--like);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 10px;

  background: var(--white);

`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;

  border-bottom: 3px solid var(--gray);

  > h2 {

    color: var(--like);
    font-weight: normal;
  }
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const TopMain = styled.div`
    display: flex;
    justify-content: space-between;
  `;

export const ActivityMain = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  background: var(--like);
  margin-right: 10px;
`;

export const LeftActivity = styled.div`
  padding-right: 30px;

 > h2 {
    font-size: 13px;
    font-weight: bold;
  }
`;

export const RightActivity = styled.div`

  > h2 {
    font-size: 25px;
    font-weight: normal;
  }
`;

export const ProjectMain = styled.div`
 display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  background: var(--green);
`;

export const TotalMain = styled.div`
  margin-top: 10px;
  padding: 10px 5px;
  border-radius: 5px;
  background: var(--orange);
`;

export const TotalData = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftTotal = styled.div`
   > h2 {
    font-size: 15px;
    font-weight: bold;
  }
`;

export const RightTotal = styled.div`
  > h2 {
    font-weight: normal;
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  padding-right: 20px;
  margin-bottom: 15px;
`;

export const ActivitySquare = styled.div`
  border: solid 1px var(--like);
  background: transparent;
  border-radius: 10px;
  width: 100px;
  justify-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 5px;
  padding-left: 5px;
`;

export const Title = styled.div`
 display: flex;
 flex: 1;
 justify-content: center;
 padding-bottom: 5px;

  > span {
    font-size: 13px;
    font-weight: bold;
    color: var(--primary);

  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1px;
`;

export const Line1 = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  border-bottom: solid 1px var(--gray);

  > span {
    font-size: 13px;
    margin-bottom: 2px;

    color: var(--primary);
  }
  > p {
    font-size: 13px;

    color: var(--primary);
  }
`;

export const Line2 = styled.div`
 display: flex;
  justify-content: space-between;

  border-bottom: solid 1px var(--gray);


  > span {
    font-size: 13px;
    margin-bottom: 2px;

    color: var(--primary);
  }

  > p {
    font-size: 13px;
    color: var(--primary);
  }
`;
  
export const Line3 = styled.div`
 display: flex;
  justify-content: space-between;
  > span {
    font-size: 13px;
    margin-bottom: 2px;

    color: var(--primary);
  }

  > p {
    font-size: 13px;
    color: var(--primary);
  }
`;

export const ProjectSquare = styled.div`
   border: solid 1px var(--green);
  background: transparent;
  border-radius: 10px;
  width: 100px;
  justify-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 5px;
  padding-left: 5px;
`;

export const TotalSquare = styled.div`
   border: solid 1px var(--orange);
  background: transparent;
  border-radius: 10px;
  width: 100px;
  justify-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 5px;
  padding-left: 5px;
`;
