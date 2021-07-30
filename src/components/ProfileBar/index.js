import React from 'react';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  PersonalData,
  ProfessionalProfileData,
  LocationData,
  LocationIcon,
  ProfessionalData,
  JobData,
  SchoolIcon,
  SchoolData
 } from './styles';

function ProfileBar() {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>

        <PersonalData>
          <h1>Victor Rosas</h1>
          <strong>@victorrosas</strong>
          <h2>Front-end Developer</h2>
        </PersonalData>

        <ProfessionalProfileData>
          <LocationData>
            <LocationIcon />
            <span>Rio Branco/Acre - Brasil</span>
            </LocationData>

            <ProfessionalData>
              <JobData>
                <SchoolIcon />
                <span>InCircle</span>
              </JobData>

              <SchoolData>
                <SchoolIcon />
                <span>Uninorte</span>
              </SchoolData>
            </ProfessionalData>
          
        </ProfessionalProfileData>
        
      </ProfileData>

    </Container>
  );
}

export default ProfileBar;