import React from 'react';
import Text, { TextThemes } from './../atoms/Text';
import WorkCard from './../molecules/WorkCard';
import CommonStyle from '../../common/CommonStyle';
import Work from './../../types/Work';

interface WorksProps {
  works: Work[];
}

const Works: React.FC<WorksProps> = ({ works }) => {
  return (
    <>
      <div className="works-wrapper">
        {works.map((data: any) => 
          <WorkCard work={data}/> 
        )}
      </div>
      <style jsx>{`
      `}</style>
    </>
  );
}

export default Works;