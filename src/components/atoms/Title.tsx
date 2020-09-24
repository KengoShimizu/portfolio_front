import React from 'react';
// common
import CommonStyle from './../../common/CommonStyle';

interface TitleProps {
  theme?: TitleThemes[];
  children?: React.ReactNode;
}

export enum TitleThemes {
  PROFILE_NAME = 'PROFILE_NAME',
}

enum ModifierClassNames {
  PROFILE_NAME = 'profile-name_title',
}

const Title: React.FC<TitleProps> = ({ theme = [], children }) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <h1 className={modifierClasses}>
      {children}
      <style jsx>
        {`
          .profile-name_title{
            font-weight: 300;
            font-size: ${CommonStyle.TextBigFS};
          }
        `}
      </style>
    </h1>
  );
}

export default Title;