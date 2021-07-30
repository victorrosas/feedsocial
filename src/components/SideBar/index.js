import React from 'react';

import { 
  Container,
  Header,
  LocationIcon,
  Main,
  TopMain,
  ActivityMain,
  LeftActivity,
  RightActivity,
  ProjectMain,
  TotalMain,
  TotalData,
  LeftTotal,
  RightTotal,
  Footer,
  ActivitySquare,
  Title,
  Data,
  Line1,
  Line2,
  Line3
 } from './styles';

function SideBar() {
  return (
    <Container>
      
    <Header>
      <LocationIcon />
      <h2>Eficiência</h2>
    </Header>

    <Main>
      <TopMain>
        <ActivityMain>
          <LeftActivity>
            <h2>Atividades</h2>
            <h2>23/106</h2>
          </LeftActivity>
          <RightActivity>
            <h2>50%</h2>
          </RightActivity>
        </ActivityMain>

        <ProjectMain>
          <LeftActivity>
              <h2>Projetos</h2>
              <h2>23/106</h2>
            </LeftActivity>
            <RightActivity>
              <h2>50%</h2>
            </RightActivity>
        </ProjectMain>
      </TopMain>

      <TotalMain>
        <TotalData>
          <LeftTotal>
          <h2>Total</h2>
          <h2>23/106</h2>
          </LeftTotal>
          <RightTotal>
            <h2>50%</h2>
          </RightTotal>
        </TotalData>
      </TotalMain>
    </Main>

    <Footer>
      <ActivitySquare>
      <Title>
          <span>Atividades</span>
        </Title>
        <Data>
          <Line1>
            <span>Pedentes</span>
            <p>3</p>
          </Line1>

          <Line2>
            <span>Pedentes</span>
            <p>3</p>
          </Line2>

          <Line3>
            <span>Pedentes</span>
            <p>3</p>
          </Line3>
        </Data>
      </ActivitySquare>

      <ActivitySquare>
        <Title>
          <span>Projetos</span>
        </Title>
        <Data>
          <Line1>
            <span>Pedentes</span>
            <p>3</p>
          </Line1>

          <Line2>
            <span>Pedentes</span>
            <p>3</p>
          </Line2>

          <Line3>
            <span>Pedentes</span>
            <p>3</p>
          </Line3>
        </Data>
      </ActivitySquare>

      <ActivitySquare>
      <Title>
          <span>Total</span>
        </Title>
        <Data>
          <Line1>
            <span>Pedentes</span>
            <p>3</p>
          </Line1>

          <Line2>
            <span>Pedentes</span>
            <p>3</p>
          </Line2>

          <Line3>
            <span>Pedentes</span>
            <p>3</p>
          </Line3>
        </Data>
      </ActivitySquare>
    </Footer>

    </Container>
  );
}

export default SideBar;