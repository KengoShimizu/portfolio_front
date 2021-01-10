import React from 'react';
import Text, { TextThemes } from './../atoms/Text';
import WorkCard from './../molecules/WorkCard';
import CommonStyle from '../../common/CommonStyle';
import Work from './../../types/Work';

interface WorksProps {
  works: Work[];
}

const Works: React.FC<WorksProps> = ({ works }) => {
  const section_title = `
    font-size: ${CommonStyle.TextLarge};
    padding: 20px;
    ${window.innerWidth < 768 ? 'display: block;' : 'display: none;'}
  `;

  return (
    <>
      <div className="works-wrapper">
        <Text 
          theme={[TextThemes.CUSTOM, TextThemes.BOLD]}
          style={section_title}>
          Works
        </Text>
        {works.map((data: any, i: number) => 
          <WorkCard work={data} key={i+"workcard"}/> 
        )}
      </div>
      <style jsx>{`
      `}</style>
    </>
  );
}

export default Works;