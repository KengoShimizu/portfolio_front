import React from 'react';
import CommonStyle from '../../common/CommonStyle';
import Image, { ImageThemes } from './../atoms/Image';

const InitialCard: React.FC = (props: any) => {
  return (
    <>
      <p className="myself-image_wrap">
        <img
          src='./myself_400px.png'
          height='200'
          width='200'
          alt='myself'
          className='myself-image'
        />
      </p>
      <p className="myself-illust-image_wrap">
        <img
          src='./myself_illust_400px.png'
          height='200'
          width='200'
          alt='myself'
          className='myself-illust-image'
        />
      </p>
      <Image
          src='./myself_illust_400px.png'
          height={200}
          width={200}
          alt='myself'
          theme={[ImageThemes.CUSTOM]}
          style={"padding: 100px;"}
        />
      <style jsx>{`
          .myself-image_wrap,
          .myself-illust-image_wrap{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .myself-image,
          .myself-illust-image{
            border: 5px solid ${CommonStyle.BorderGray};
            border-radius: 50%;
            backface-visibility: hidden;
          }
          .myself-illust-image{
            transform:rotateY(180deg);
          }
        `}</style>
    </>
  );
}

export default InitialCard;