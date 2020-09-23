import React from 'react';
// common
import CommonStyle from './../../common/CommonStyle';

interface ButtonProps {
  theme?: ButtonThemes[];
  children?: React.ReactNode;
  style?: {};
  onClick?: any;
}

export enum ButtonThemes {
  INIT = 'INIT',
}

enum ModifierClassNames {
  INIT = 'button-init',
}


const Button: React.FC<ButtonProps> = ({ theme = [], children, style = {}, onClick }) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    //style={propStyle}style直書き
    <button className={["button", modifierClasses].join(' ')} style={style} onClick={onClick}>
      {children}
      <style jsx>
        {`
          .button{
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </button>
  );
}

export default Button;