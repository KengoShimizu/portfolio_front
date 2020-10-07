import React from 'react';
import Text, { TextThemes } from './../atoms/Text';
import CommonStyle from './../../common/CommonStyle';
import Work from './../../types/Work';
import Image from './../atoms/Image';

interface WorkCardProps {
  work: Work;
}

const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
  return (
    <>
      <Image src={work.image} height={120} width={150} alt={work.name}/>
      <Text>{work.name}</Text>
      <Text>{work.description}</Text>
      <Text>{work.member}</Text>
      {work.tags.map((data: any) => 
        <Text 
          theme={[TextThemes.TAG]}
        >{data.content}</Text>
      )}
      <Text>{work.url}</Text>
    </>
  );
}

export default WorkCard;