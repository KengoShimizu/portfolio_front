import React from 'react';
// common
import CommonStyle from './../../common/CommonStyle';

interface TextProps {
  theme?: TextThemes[];
  children?: React.ReactNode;
  style?: {};
}

export enum TextThemes {
  INIT = 'INIT',
}

enum ModifierClassNames {
  INIT = 'text-init',
}


const Text: React.FC<TextProps> = ({ theme = [], children, style = {} }) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <p className={modifierClasses} style={style}>
      {children}
      <style jsx>
        {`
        `}
      </style>
    </p>
  );
}

export default Text;