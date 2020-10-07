import React from 'react';
import CommonStyle from '../../common/CommonStyle';
import Text, { TextThemes } from './../atoms/Text';

interface SkillCircleProps {
  svg: any;
  level: number;
}

const SkillCircle: React.FC<SkillCircleProps> = ({ svg, level }) => {
  return (
    <>
      <div className="skill-out-circle">
        <div className="skill-inner-circle">
          {svg}
        </div>
        <Text
          theme={[
            TextThemes.CENTER,
            TextThemes.CUSTOM
          ]}
          style={`
            margin: 10px;
          `}
        >
          <span className="level-text">Level </span>{level}
        </Text>
      </div>

      <style jsx>{`
        .skill-out-circle{
          position: relative;
          margin: auto;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: ${CommonStyle.TextWhite};
          background-image: linear-gradient(to right, transparent 50%, ${CommonStyle.TextGray} 0); 
        }
        .skill-out-circle::before{ 
          content: ''; 
          display: block;
          margin-left: 50%;
          height: 100%;
          border-radius: 0 100% 100% 0 / 50%;
          background-color: inherit;
          transform-origin: left;
          background: ${level < 6 ? CommonStyle.TextWhite : CommonStyle.TextGray};
          transform: rotate(${level < 6 ? (level * 36) + 'deg' : ((level % 6) * 36 + 36) + 'deg'});
        }
        .skill-inner-circle{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          -webkit- transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          text-align: center;
          line-height: 120px;
          background: ${CommonStyle.BGWhite};
        }
        .level-text{
          font-size: 16px;
          color: ${CommonStyle.TextGray}
        }
      `}</style>
    </>
  );
}

export default SkillCircle;