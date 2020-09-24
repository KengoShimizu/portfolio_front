import React from 'react';
import Text, { TextThemes } from './../atoms/Text';

interface MenuItemProps {
  content: string;
  isSelected?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({content, isSelected = false}) => {
  return (
    <Text theme={isSelected ? [TextThemes.MENU_ITEM, TextThemes.MENU_ITEM_SELECT] : [TextThemes.MENU_ITEM]}>
      {content}
    </Text>
  );
}

export default MenuItem;