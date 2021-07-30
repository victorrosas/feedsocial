import React from 'react';

import { 
  Container,
  PostShared,
  Header,
  Avatar,
  HeaderData,
  ProfileData,
  ArrowDown,
  ClockIcon, 
  LockIcon,
  LikeIcon,
  MessageIcon,
  ShareIcon,
  Data,
  TimeData,
  PrivateData,
  TextMain,
  Text,
  Footer,
  DataFooter,
  LeftDataFooter,
  RightDataFooter,
  Coments,
  Shares,
  Buttons,
  LikeButton,
  ComentsButton,
  ShareButton
 } from './styles';

function Main() {
  return (
    <Container>
      {/* <PostInput /> */}

      <PostShared>
        <Header>
          <Avatar />

          <HeaderData>
            <ProfileData>
              <h1>Victor Rosas</h1>
              <ArrowDown />
            </ProfileData>

            <Data>
              <TimeData>
                <ClockIcon />
                <span>há cerca de 8 horas</span>
              </TimeData>

              <PrivateData>
                <LockIcon />
                <span>Somente eu</span>
              </PrivateData>
            </Data>
          </HeaderData>
        </Header>

        <TextMain>
          <Text>
            <span>Essa publicação está configurada no modo privado "Somente eu."</span>
          </Text>
        </TextMain>

        <Footer>
          <DataFooter>
            <LeftDataFooter>
              <LikeIcon />
              <span>Seja o primeiro a curtir</span>
            </LeftDataFooter>

            <RightDataFooter>
              <Coments>
                <span>0 comentários</span>
              </Coments>

              <Shares>
                <span>0 compartilhamentos</span>
              </Shares>
            </RightDataFooter>
          </DataFooter>

          <Buttons>
            <LikeButton>
              <LikeIcon />
              <span>Curtir</span>
            </LikeButton>

            <ComentsButton>
              <MessageIcon />
              <span>Comentários</span>
            </ComentsButton>

            <ShareButton>
              <ShareIcon />
              <span>Compartilhar</span>
            </ShareButton>
          </Buttons>
        </Footer>
      </PostShared>
    </Container>
  );
}

export default Main;