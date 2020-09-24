import React from 'react';
// common
import CommonStyle from './../../common/CommonStyle';

interface TextProps {
  theme?: TextThemes[];
  children?: React.ReactNode;
  style?: string;
}

export enum TextThemes {
  MENU_ITEM = 'MENU_ITEM',
  MENU_ITEM_SELECT = 'MENU_ITEM_SELECT',
  OCCUPATION_HEAD = 'OCCUPATION_HEAD',
  OCCUPATION = 'OCCUPATION',
  MB52 = 'MB52',
  LH2EM = 'LH2EM',
  CENTER = 'CENTER',
  CUSTOM = 'CUSTOM',
}

enum ModifierClassNames {
  MENU_ITEM = 'menu-item_text',
  MENU_ITEM_SELECT = 'menu-item-selected_text',
  OCCUPATION_HEAD = 'profile-occupation-head',
  OCCUPATION = 'profile-occupation',
  MB52 = 'mb52',
  LH2EM = 'line-height-2em',
  CENTER = 'text-align-center',
  CUSTOM = 'custom-text',
}


const Text: React.FC<TextProps> = ({ theme = [], children, style = '' }) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <p className={["text", modifierClasses].join(' ')}>
      {children}
      <style jsx>
        {`
          .text{
            color: ${CommonStyle.TextBlack};
            font-size: 20px;
          }
          .menu-item_text{
            width: 164px;
            height: 100px;
            line-height: 100px;
            text-align: center;
            font-size: ${CommonStyle.TextBigFS};
            background-color: ${CommonStyle.Menu};
            color: ${CommonStyle.TextWhite};
            font-weight: bold;
          }
          .menu-item_text:hover{
            background-color: ${CommonStyle.Selected};
            color: ${CommonStyle.Menu};
          }
          .menu-item-selected_text{
            background-color: ${CommonStyle.Selected};
            color: ${CommonStyle.Menu};
          }
          .profile-occupation-head{
            padding: 0 1em;
            border-right: 1px solid ${CommonStyle.Menu};
          }
          .profile-occupation{
            padding-left: 1em;
          }
          .mb52{
            margin-bottom: 52px;
          }
          .line-height-2em{
            line-height: 2em;
          }
          .text-align-center{
            text-align: center;
          }
          .custom-text{
            ${style}
          }
        `}
      </style>
    </p>
  );
}

export default Text;