import React from 'react';
import CommonStyle from '../../common/CommonStyle';
import { Twitter, Instagram, GitHub } from 'react-feather';

interface SnsBarProps {
  second_anime?: boolean;
}

const SnsBar: React.FC<SnsBarProps> = ({ second_anime }) => {
  return (
    <>
      <div className={`sns-bar ${second_anime && 'anime'}`}>
        <a href="https://twitter.com/kengoPman" target="_blank" rel="noopener"><Twitter size={36} color={CommonStyle.BorderGray}/></a>
        <a href="https://www.instagram.com/kungfu_kengo/" target="_blank" rel="noopener"><Instagram size={36} color={CommonStyle.BorderGray}/></a>
        <a href="https://github.com/KengoShimizu" target="_blank" rel="noopener"><GitHub size={36} color={CommonStyle.BorderGray}/></a>
      </div>
      <style jsx>{`
        .sns-bar{
          position: absolute;
          opacity: 0;
          top: 272px;
          display: flex;
          width: 200px;
          justify-content: space-around;
          left: 24%;
          transition: ${CommonStyle.Transition};
        }
        .anime{
          opacity: 1;
        }
        /* ipad - pc */
        @media screen and (min-width: 768px) {
          .sns-bar{
            left: 15%;
          }
        }
      `}</style>
    </>
  );
}

export default SnsBar;