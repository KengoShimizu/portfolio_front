import React, { useContext, useEffect, useState } from 'react';
import ProfileImage from '../molecules/ProfileImage';
import ProfileText from '../molecules/ProfileText';
import { ReducerContext } from './../../common/ReducerContext';
import { CalcOld } from './../../common/Function';

const ProfileCard: React.FC = (props: any) => {
  const { state, dispatch } = useContext(ReducerContext);
  const [ anime, setAnime ] = useState(false);
  const anime_duration = 1;
  const anime_delay = 1;
  const old = CalcOld();

  useEffect(() => {
    setAnime(true);
    setTimeout(() => {
      dispatch({
        type: 'initial_anime',
        initial_animation: true
      })
    }, (anime_duration + anime_delay + 0.3) * 1000);
  }, [])

  useEffect(() => {
    if(state.initial_animation){
      setTimeout(() => {
        dispatch({
          type: 'second_anime_start',
          second_anime: true
        })
      }, 300)
    }
  }, [state.initial_animation])

  return (
    <>
      <div className='profile-card-container'>
          <ProfileImage 
            anime={anime} 
            initial_animation={state.initial_animation}
            anime_duration={anime_duration}
            anime_delay={anime_delay}
            second_anime={state.second_anime}
          />
        <div className="profile-card-text">
          <ProfileText second_anime={state.second_anime} old={old}/>
        </div>
      </div>
      <style jsx>{`
        .profile-card-container{
          position: relative;
          max-width: 1000px;
          min-height: 200px;
          margin: 0 auto;
          margin-top: 15vh;
        }
        .profile-card-text{
          margin-left: calc(250px + 25%);
        }
      `}</style>
    </>
  );
}

export default ProfileCard;