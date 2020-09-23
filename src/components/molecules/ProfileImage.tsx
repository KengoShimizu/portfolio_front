import React, { useState, useEffect, useContext } from 'react';
import CommonStyle from '../../common/CommonStyle';
import { ReducerContext } from './../../common/ReducerContext';


const ProfileImage: React.FC = () => {
  const [anime, setAnime] = useState(false);
  const { state, dispatch } = useContext(ReducerContext);
  const anime_duration = 1;
  const anime_delay = 1;

  const transform_rotateY = (deg: number) => `
    transform: rotateY(${deg}deg);
    -webkit- transform: rotateY(${deg}deg);`;

  useEffect(() => {
    setAnime(true);
    setTimeout(() => {
      dispatch({
        type: 'initial_anime',
        initial_animation: true
      })
    }, (anime_duration + anime_delay + 0.3) * 1000);
  }, [])

  return (
    <>
      <p className={`illust-image_wrap ${state.initial_animation && 'image_wrap_anime'}`}>
        <img
          src='./myself_illust_400px.png'
          height='200'
          width='200'
          alt='myself'
          className={anime ? 'illust-image' : ''}
        />
      </p>
      <p className={`photo-image_wrap ${state.initial_animation && 'image_wrap_anime'}`}>
        <img
          src='./myself_400px.png'
          height='200'
          width='200'
          alt='myself'
          className={anime ? 'photo-image' : ''}
        />
      </p>
      <style jsx>{`
          .photo-image_wrap,
          .illust-image_wrap{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: .5s;
          }
          .photo-image,
          .illust-image{
            border: 5px solid ${CommonStyle.BorderGray};
            border-radius: 50%;
            backface-visibility: hidden;
            animation-duration: ${anime_duration}s;
            animation-delay: ${anime_delay}s;
          }
          .photo-image{
            animation-name: photo-animation;
          }
          .illust-image{
            transform: rotateY(180deg);
            -webkit- transform: rotateY(180deg);
            animation-name: illust-animation;
          }
          @keyframes photo-animation {
            0% {
              ${transform_rotateY(0)}
            }
            50% {
              ${transform_rotateY(180)}
            }
            100% {
              ${transform_rotateY(0)}
            }
          }
          @keyframes illust-animation {
            0% {
              ${transform_rotateY(180)}
            }
            50% {
              ${transform_rotateY(0)}
            }
            100% {
              ${transform_rotateY(180)}
            }
          }
          .image_wrap_anime{
            top: 100px;
            left: calc(100px + 10%);
          }
        `}</style>
    </>
  );
}

export default ProfileImage;