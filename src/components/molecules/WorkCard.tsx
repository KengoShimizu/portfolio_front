import React from 'react';
import Text, { TextThemes } from './../atoms/Text';
import CommonStyle from './../../common/CommonStyle';
import Work from './../../types/Work';
import Image, { ImageThemes } from './../atoms/Image';

interface WorkCardProps {
  work: Work;
}

const WorkCard: React.FC<WorkCardProps> = ({ work }) => {

  const work_title = `
    font-size: ${CommonStyle.TextMiddleLarge};
    margin-bottom: 4px;
    ${window.innerWidth < 768 ? 'text-align: center;' : ''}
  `;

  let img_ratio = 1.5;
  if (window.innerWidth <= 1024) img_ratio = 1;
  if (window.innerWidth <= 768) img_ratio = 0.7;

  return (
    <>
      <div className="work-card">
        <Image 
          src={work.image} 
          height={275*img_ratio}
          width={500*img_ratio} 
          alt={work.name}
          theme={[ImageThemes.TA_CENTER]}/>
        <div className="work-card_sentenses">
          <Text 
            theme={[TextThemes.BOLD, TextThemes.MT20, TextThemes.CUSTOM]} 
            style={work_title}>
            {work.name}
          </Text>
          {work.new_tags.map((data: any, i: number) => i !== 0 &&
            <Text 
              theme={[TextThemes.TAG]}
              key={i+"work"}
            >{data.content}</Text>
          )}
          <Text theme={[TextThemes.MT20]}>{work.description}</Text>
          <a href={work.url} target="_blank" rel="noopener noreferrer" className="work-url">{work.url}</a>
        </div>
      </div>
      <style jsx>{`
        .work-card{
          padding: 44px 10px;
        }
        .work-card_sentenses{
          position: relative;
        }
        .work-url{
          margin-top: 16px;
          display: block;
        }
        /* ipad - pc */
        @media screen and (min-width: 768px) {
          .work-card{
            display: flex;
            margin: 80px;
          }
        }
      `}</style>
    </>
  );
}

export default WorkCard;