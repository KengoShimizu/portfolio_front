import React from 'react';
import CommonStyle from '../../common/CommonStyle';
import Text, { TextThemes } from './../atoms/Text';
import Title, { TitleThemes } from './../atoms/Title';

interface ProfileTextProps {
  second_anime?: boolean;
  old: number;
}

const ProfileText: React.FC<ProfileTextProps> = ({ second_anime, old }) => {
  return (
    <>
      <div className={`profile-text-wrap ${second_anime && 'anime'}`}>
        <Title theme={[TitleThemes.PROFILE_NAME]}>清水 謙吾</Title>
        <div className='profile-text-occupation'>
          <Text theme={[TextThemes.OCCUPATION_HEAD]}>職業</Text>
          <Text theme={[TextThemes.OCCUPATION]}>学生Webエンジニア</Text>
        </div>
        <Text theme={[TextThemes.MB52]}>京都府出身 / 神戸大学出身 / {old}才</Text>
        <Text theme={[TextThemes.LH2EM]}>
          神戸大学院2年の清水謙吾です．<br/>
          大学院1年時に研究留学として，<br/>
          カナダのBlock大学に1年間在籍．<br/>
          独学で始めたweb開発で現在までに<br/>
          複数のサービスを開発．
        </Text>
      </div>
      <style jsx>{`
        .profile-text-wrap{
          padding-top: 1em;
          opacity: 0;
          transition: ${CommonStyle.Transition};
        }
        .anime{
          opacity: 1;
        }
        .profile-text-occupation{
          display: flex;
          max-width: 360px;
          margin: 24px 0;
          padding: 20px 12px;
          border-radius: 4px;
          background-color: ${CommonStyle.BGGray};
        }
        .profile-text-from-wrap{
          padding: 12px 0 24px;
        }
        .profile-text_subtitle{
          color: ${CommonStyle.TextGray};
          padding-right: 3em;
          margin-left: 2em;
        }
        .special{
          padding-right: 3em;
          margin-left: 4em;
        }
      `}</style>
    </>
  );
}

export default ProfileText;