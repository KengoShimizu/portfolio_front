import React, { useContext } from 'react';
import ProfileImage from '../molecules/ProfileImage';
import ProfileText from '../molecules/ProfileText';
import { ReducerContext } from './../../common/ReducerContext';

const ProfileCard: React.FC = (props: any) => {
  const { state } = useContext(ReducerContext);

  return (
    <>
      <div className='profile-card-container'>
          <ProfileImage />
        <div className="profile-card-text">
          <ProfileText />
        </div>
      </div>
      <style jsx>{`
        .profile-card-container{
          position: relative;
          max-width: 1000px;
          min-height: 200px;
          margin: 0 auto;
          margin-top: 100px;
        }
        .profile-card-text{
          margin-left: calc(250px + 10%);
        }
      `}</style>
    </>
  );
}

export default ProfileCard;