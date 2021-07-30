import React from 'react';

import ProfileBar from '../ProfileBar';
import Main from '../Main';
import SideBar from '../SideBar';

import { Container, Wrapper,  MainWrapper} from './styles';

function Layout() {
  return (
    <Container>
      <Wrapper>
        <ProfileBar />

        <MainWrapper>
          <Main />
          <Main />
          <Main />
          <Main />
        </MainWrapper>

        <SideBar />
      </Wrapper>
    </Container>
  );
}

export default Layout;