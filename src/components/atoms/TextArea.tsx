import React from 'react';
// common
import Text from './Text';

interface TextAreaProps {
  theme?: TextAreaThemes[];
  name: string;
  label: string;
  cols: number;
  rows: number;
  maxLength: number;
  placeholder: string;
}

export enum TextAreaThemes {
}

enum ModifierClassNames {
}

const TextArea: React.FC<TextAreaProps> = ({ theme = [], name, label, cols, rows, maxLength, placeholder }) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <>
      <Text><label htmlFor={name} className="label">{label}</label></Text>
      <textarea 
        className={["textarea", modifierClasses].join(' ')}
        id={name} 
        name={name} 
        cols={cols} 
        rows={rows}
        maxLength={maxLength}
        placeholder={placeholder}/>
      <style jsx>
        {`
          .label{
            margin: 10px;
          }
          .textarea{
            margin: 10px 0 32px;
            width: 100%;
            padding: 10px 15px;
            font-size: 16px;
            border-radius: 3px;
            border: 2px solid #ddd;
            box-sizing: border-box;
          }
          .textarea:focus {
            border: 2px solid #ff9900; 
            z-index: 10;
            outline: 0;
          }
        `}
      </style>
    </>
  );
}

export default TextArea;