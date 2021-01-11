import React from 'react';
// common
import Text from './Text';

interface InputProps {
  theme?: InputThemes[];
  name: string;
  label: string;
}

export enum InputThemes {
}

enum ModifierClassNames {
}

const Input: React.FC<InputProps> = ({ theme = [], name, label }) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <>
      <Text><label htmlFor={name} className="label">{label}</label></Text>
      <input 
        className={["input", modifierClasses].join(' ')}
        type="text" 
        name={name}
        id={name}/>
      <style jsx>
        {`
          .label{
            margin: 10px;
          }
          .input{
            margin: 10px 0 32px;
            width: 100%;
            padding: 10px 15px;
            font-size: 16px;
            border-radius: 3px;
            border: 2px solid #ddd;
            box-sizing: border-box;
          }
          .input:focus {
            border: 2px solid #ff9900; 
            z-index: 10;
            outline: 0;
          }
        `}
      </style>
    </>
  );
}

export default Input;