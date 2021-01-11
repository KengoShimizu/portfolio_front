import React from 'react';
import Image, { ImageThemes } from './../atoms/Image';
import { RouteName } from './../../common/Const';
import CommonStyle from './../../common/CommonStyle';

const NotFound: React.FC = (props: any) => {

  let img_ratio = 1;
  if (window.innerWidth <= 768) img_ratio = 0.7;

  return (
    <>
      <div className="not-found-wrap">
        <Image 
          src="/404.png" 
          height={350*img_ratio}
          width={500*img_ratio} 
          alt="Not Found"
          theme={[ImageThemes.NOT_FOUND]}/>
        <a href={RouteName.ROOT} className="back-btn">戻る</a>
      </div>
      <style jsx>{`
        .not-found-wrap{
          width: 100%;
          height: 100vh;
        }
        .back-btn{
          position: absolute;
          top: 74%;
          left: 50%;
          transform: translate(-50%, -85%);
          display: inline-block;
          padding: 16px 44px;
          text-decoration: none;
          background: ${CommonStyle.BorderGray};
          color: ${CommonStyle.TextWhite};
          border-bottom: solid 4px ${CommonStyle.TextBlack};
          border-radius: 32px;
        }
      `}</style>
    </>
  );
}

export default NotFound;