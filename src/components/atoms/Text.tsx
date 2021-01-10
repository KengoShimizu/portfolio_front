import React from 'react';
// common
import CommonStyle from './../../common/CommonStyle';

interface TextProps {
  theme?: TextThemes[];
  children?: React.ReactNode;
  style?: string;
}

export enum TextThemes {
  BOLD = 'BOLD',
  MENU_ITEM = 'MENU_ITEM',
  MENU_ITEM_SELECT = 'MENU_ITEM_SELECT',
  MB52 = 'MB52',
  MT20 = 'MT20',
  LH2EM = 'LH2EM',
  CENTER = 'CENTER',
  CUSTOM = 'CUSTOM',
  TAG = 'TAG',
}

enum ModifierClassNames {
  BOLD = 'text_bold',
  MENU_ITEM = 'text_menu-item',
  MENU_ITEM_SELECT = 'text_menu-item-selected',
  MB52 = 'mb52',
  MT20 = 'mt20',
  LH2EM = 'line-height-2em',
  CENTER = 'text_align-center',
  CUSTOM = 'text_custom',
  TAG = 'text_tag',
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
          .text_custom{
            ${style}
          }

          .text_bold{
            font-weight: bold;
          }
          .mb52{
            margin-bottom: 52px;
          }
          .mt20{
            margin-top: 20px;
          }
          .line-height-2em{
            line-height: 2em;
          }
          .text_align-center{
            text-align: center;
          }
          
          {/* メニューバー */}
          .text_menu-item:hover{
            background-color: ${CommonStyle.Selected};
            color: ${CommonStyle.Menu};
          }
          .text_menu-item-selected{
            background-color: ${CommonStyle.Selected};
            color: ${CommonStyle.Menu};
          }

          {/* タグ */}
          .text_tag{
            position: relative;
            display: inline-block;
            height: 22px;
            line-height: 22px;
            margin: 8px 0 0 16px;
            padding: 0 1em;
            background-color: #3498db;
            border-radius: 0 3px 3px 0;
            color: #fff;
            font-size: 13px;
            text-decoration: none;
          }
          .text_tag::before{
            position: absolute;
            top: 0;
            left: -11px;
            content: '';
            width: 0;
            height: 0;
            border-color: transparent #3498db transparent transparent;
            border-style: solid;
            border-width: 11px 11px 11px 0;
          }
          .text_tag::after {
            position: absolute;
            top: 50%;
            left: 0;
            z-index: 2;
            display: block;
            content: '';
            width: 6px;
            height: 6px;
            margin-top: -3px;
            background-color: #fff;
            border-radius: 100%;
          }
        `}
      </style>
    </p>
  );
}

export default Text;