import React from 'react';
// common
import CommonStyle from './../../common/CommonStyle';

interface ImageProps {
  theme?: ImageThemes[];
  style?: string;
  src: string;
  height: number;
  width: number;
  alt: string;
}

export enum ImageThemes {
  MYSELF = 'MYSELF',
  CUSTOM = 'CUSTOM',
}

enum ModifierClassNames {
  MYSELF = 'image-myself',
  CUSTOM = 'image-style',
}

const Image: React.FC<ImageProps> = ({ theme = [], style, src, height, width, alt }) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <p className={modifierClasses}>
      <img src={src} height={height} width={width} alt={alt}/>
      <style jsx>{`
        .image-style{
          ${style}
        }
      `}</style>
    </p>
  );
}

export default Image;