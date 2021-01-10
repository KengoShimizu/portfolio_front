import React from 'react';
import Text, { TextThemes } from './../atoms/Text';
import CommonStyle from './../../common/CommonStyle';
import Work from './../../types/Work';
import Image from './../atoms/Image';

interface WorkCardProps {
  work: Work;
}

const WorkCard: React.FC<WorkCardProps> = ({ work }) => {

  const work_title = `
    font-size: ${CommonStyle.TextMiddleLarge};
    margin-bottom: 
  `;

  return (
    <>
      <div className="work-card">
        <Image src={work.image} height={275*1.5} width={500*1.5} alt={work.name}/>
        <div className="work-card_sentenses">
          <Text 
            theme={[TextThemes.BOLD, TextThemes.MT20, TextThemes.CUSTOM]} 
            style={work_title}>
            {work.name}
          </Text>
          {work.tags.map((data: any, i: number) => 
            <Text 
              theme={[TextThemes.TAG]}
              key={i+"work"}
            >{data.content}</Text>
          )}
          <Text>{work.description}</Text>
          <a href={work.url} className="work-url">{work.url}</a>
        </div>
      </div>
      <style jsx>{`
        .work-card{
          display: flex;
          margin: 80px;
        }
        .work-card_sentenses{
          position: relative;
        }
        .work-url{
          position: absolute;
          bottom: 16px;
        }
      `}</style>
    </>
  );
}

export default WorkCard;