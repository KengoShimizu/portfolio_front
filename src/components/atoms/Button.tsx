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
  DISABLE = 'DISABLE',
}

enum ModifierClassNames {
  DISABLE = 'button-disable',
}


const Button: React.FC<ButtonProps> = ({ theme = [], children, style = {}, onClick }) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
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
          .button-disable{
            margin: 0 auto;
            width: 100%;
            color: ${CommonStyle.TextWhite};
            background-color: ${CommonStyle.TextGray};
            padding: 12px;
            border-radius: 5px;
          }
        `}
      </style>
    </button>
  );
}

export default Button;