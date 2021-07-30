import React from 'react';

import ProfileBar from '../ProfileBar';
import Main from '../Main';

import { Container, Wrapper,  MainWrapper} from './styles';

function Layout() {
  return (
    <Container>
      <Wrapper>
        <ProfileBar />

        <MainWrapper>
          <Main />
          <Main />
        </MainWrapper>

        {/* <SideBar /> */}
      </Wrapper>
    </Container>
  );
}

export default Layout;