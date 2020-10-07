import React from 'react';
import Text, { TextThemes } from './../atoms/Text';
// common
import CommonStyle from './../../common/CommonStyle';

interface MenuItemProps {
  content: string;
  isSelected?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ content, isSelected = false }) => {
  return (
    <Text
      theme={
        isSelected
          ? [TextThemes.BOLD, TextThemes.CENTER, TextThemes.CUSTOM, TextThemes.MENU_ITEM_SELECT]
          : [TextThemes.BOLD, TextThemes.CENTER, TextThemes.CUSTOM, TextThemes.MENU_ITEM]
      }
      style={`
        width: 164px;
        height: 100px;
        line-height: 100px;
        font-size: ${CommonStyle.TextLarge};
        color: ${CommonStyle.TextWhite};
      `}>
      {content}
    </Text>
  );
}

export default MenuItem;