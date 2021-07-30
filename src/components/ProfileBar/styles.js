import styled, { css } from "styled-components";

import { LocationOn } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 420px;

  width: 300px;
  border-radius: 10px;

  background: var(--white);

`;

export const Banner = styled.div`
  flex-shrink: 0;
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  width: 100%;
  height: min(33vw, 199px);

  background: var(--like);

  position: relative;
  
`;

export const Avatar = styled.div`
  width: max(50px, min(135px, 22vw));
  height: max(50px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  background: var(--white);
  border-radius: 50%;

  position: absolute;

  bottom: max(-60px, -10vw);
  left: 70px;
`;

export const ProfileData = styled.div`
  width: 100%;  

  height: 100%;
  display: flex;
  flex-direction: column;

`;

export const PersonalData = styled.div`
  width: 100%;
  
  text-align: center;

  padding-top: 70px;

  

  > h1 {
    font-size: 30px;
    color: var(--like);
  }

  > strong {
    font-size: 15px;
    color: var(--primary);
  }

  > h2 {
    font-size: 15px;
    font-weight: normal;
    color: var(--gray);
  }

`;

export const ProfessionalProfileData = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 10px;
  padding-top: 18px;
  padding-bottom: 15px;
`;

const IconCSS = css`
  width: 20px;
  height: 20px;

  fill: var(--secondary);
  
`;

export const LocationData = styled.div`
  display: flex;
  padding-bottom: 5px;

  > span {
    color: var(--gray);
  }
`;

export const LocationIcon = styled(LocationOn)`
  ${IconCSS}
  fill: var(--like);
`;

export const ProfessionalData = styled.div`
  display: flex;
  width: 100%;
`;

export const JobData = styled.div`
> span {
    padding-right: 15px;
    color: var(--gray);
  }
`;

export const SchoolIcon = styled(LocationOn)`
  ${IconCSS}
  fill: var(--gray);
`;

export const SchoolData = styled.div`
   > span {
    color: var(--gray);
  }
`;
