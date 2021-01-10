import React from 'react';
import SkillCircle from './../molecules/SkillCircle';
import Text, { TextThemes } from './../atoms/Text';
import CommonStyle from '../../common/CommonStyle';
import Skill from './../../types/Skill';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const markup = skills.filter((data: any) => data.kind === 1)
  const frontend = skills.filter((data: any) => data.kind === 2)
  const backend = skills.filter((data: any) => data.kind === 3)
  const infrastructure = skills.filter((data: any) => data.kind === 4)
  const others = skills.filter((data: any) => data.kind === 5)

  const skill_head_custom_text = `
    text-align: center;
    padding: 52px 0 36px;
    font-weight: bold;
    font-size: ${CommonStyle.TextLarge};
  `;

  const section_title = `
    font-size: ${CommonStyle.TextLarge};
    padding: 20px;
    ${window.innerWidth < 768 ? 'display: block;' : 'display: none;'}
  `;

  return (
    <>
      <div className="skills-wrapper">
        <Text 
          theme={[TextThemes.CUSTOM, TextThemes.BOLD]}
          style={section_title}>
          Skills
        </Text>

        <div className="skills">
          <Text theme={[TextThemes.CUSTOM]} style={skill_head_custom_text}>Markup</Text>
          <div className="grid-wrap">
            {markup.map((data: any, i: number) =>
              <SkillCircle
                svg={<img src={data.image} width={52} alt={data.name} />}
                level={data.level}
                key={`markup${i}`}
              />
            )}
          </div>
        </div>

        <div className="skills">
          <Text theme={[TextThemes.CUSTOM]} style={skill_head_custom_text}>Front End</Text>
          <div className="grid-wrap">
            {frontend.map((data: any, i: number) =>
              <SkillCircle
                svg={<img src={data.image} width={52} alt={data.name} />}
                level={data.level}
                key={`frontend${i}`}
              />
            )}
          </div>
        </div>

        <div className="skills">
          <Text theme={[TextThemes.CUSTOM]} style={skill_head_custom_text}>Back End</Text>
          <div className="grid-wrap">
            {backend.map((data: any, i: number) =>
              <SkillCircle
                svg={<img src={data.image} width={52} alt={data.name} />}
                level={data.level}
                key={`backend${i}`}
              />
            )}
          </div>
        </div>

        <div className="skills">
          <Text theme={[TextThemes.CUSTOM]} style={skill_head_custom_text}>Infrastructure</Text>
          <div className="grid-wrap">
            {others.map((data: any, i: number) =>
              <SkillCircle
                svg={<img src={data.image} width={52} alt={data.name} />}
                level={data.level}
                key={`others${i}`}
              />
            )}
          </div>
        </div>

        <div className="skills">
          <Text theme={[TextThemes.CUSTOM]} style={skill_head_custom_text}>Others</Text>
          <div className="grid-wrap">
            {infrastructure.map((data: any, i: number) =>
              <SkillCircle
                svg={<img src={data.image} width={52} alt={data.name} />}
                level={data.level}
                key={`infrastructure${i}`}
              />
            )}
          </div>
        </div>

      </div>
      <style jsx>{`
      .skills-wrapper{
        margin-bottom: 108px;
      }
      .skills{
        margin-bottom: 52px;
      }
      .grid-wrap {
        display: grid;
        grid-template-columns: 150px 150px;
        grid-row-gap: 52px;
        justify-content: center;
      }
      /* ipad - pc */
      @media screen and (min-width: 768px) {
        .grid-wrap {
          grid-template-columns: 150px 150px 150px 150px 150px;
        }
      }
      `}</style>
    </>
  );
}

export default Skills;