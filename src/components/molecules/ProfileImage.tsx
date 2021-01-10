import React from 'react';
import CommonStyle from '../../common/CommonStyle';

interface ProfileImageProps {
  anime: boolean;
  initial_animation?: boolean;
  anime_duration: number;
  anime_delay: number;
  second_anime?: boolean;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ anime, initial_animation, anime_duration, anime_delay, second_anime }) => {
  const transform_rotateY = (deg: number) => `
    transform: rotateY(${deg}deg);
    -webkit- transform: rotateY(${deg}deg);`;

  return (
    <>
      <p className={`photo-image_wrap ${initial_animation && 'image_wrap_anime'} ${second_anime && 'image_hover'}`}>
        <img
          src='./myself_400px.png'
          height='200'
          width='200'
          alt='myself'
          className={anime ? 'photo-image' : ''}
        />
      </p>
      <p className={`illust-image_wrap ${initial_animation && 'image_wrap_anime'}`}>
        <img
          src='./myself_illust_400px.png'
          height='200'
          width='200'
          alt='myself'
          className={anime ? 'illust-image' : ''}
        />
      </p>
      <style jsx>{`
          .photo-image_wrap{
            z-index: 100;
          }
          .photo-image_wrap,
          .illust-image_wrap{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: ${CommonStyle.Transition};
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
            top: 136px;
          }
          .image_hover .photo-image,
          .image_hover + .illust-image_wrap .illust-image{
            transition: ${CommonStyle.Transition};
          }
          .image_hover:hover .photo-image{
            transition: ${CommonStyle.Transition};
            ${transform_rotateY(180)}
          }
          .image_hover:hover + .illust-image_wrap .illust-image{
            transition: ${CommonStyle.Transition};
            ${transform_rotateY(0)}
          }
          /* ipad - pc */
          @media screen and (min-width: 768px) {
            .photo-image_wrap,
            .illust-image_wrap{
              top: 30%;
              left: 45%;
              transform: translate(-30%, -45%);
            }
            .image_wrap_anime{
              top: 100px;
              left: calc(50px + 15%);
            }
          }
        `}</style>
    </>
  );
}

export default ProfileImage;