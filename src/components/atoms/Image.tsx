import React from 'react';

interface ImageProps {
  theme?: ImageThemes[];
  src: string;
  height: number;
  width: number;
  alt: string;
}

export enum ImageThemes {
  TA_CENTER = 'TA_CENTER',
  NOT_FOUND = 'NOT_FOUND',
}

enum ModifierClassNames {
  TA_CENTER = 'ta_center',
  NOT_FOUND = 'not-found',
}

const Image: React.FC<ImageProps> = ({ theme = [], src, height, width, alt }) => {
  const modifierClassesWrap = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <p className={modifierClassesWrap}>
      <img src={src} height={height} width={width} alt={alt}/>
      <style jsx>{`
        .ta_center{
          text-align: center;
        }
        .not-found{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -85%);
        }
      `}</style>
    </p>
  );
}

export default Image;