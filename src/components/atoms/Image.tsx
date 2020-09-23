import React from 'react';
// common
import CommonStyle from './../../common/CommonStyle';

interface ImageProps {
  theme?: ImageThemes[];
  src: string;
  height: number;
  width: number;
  alt: string;
}

export enum ImageThemes {
  MYSELF = 'MYSELF',
}

enum ModifierClassNames {
  MYSELF = 'image-myself',
}

const Image: React.FC<ImageProps> = ({ theme = [], src, height, width, alt }) => {
  const modifierClassesWrap = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <p className={modifierClassesWrap}>
      <img src={src} height={height} width={width} alt={alt}/>
      <style jsx>{`
      `}</style>
    </p>
  );
}

export default Image;