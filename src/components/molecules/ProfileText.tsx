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
          <Text
            theme={[TextThemes.CUSTOM]}
            style={`
              padding: 0 1em;
              border-right: 1px solid ${CommonStyle.Menu};
            `}
          >職業</Text>
          <Text
            theme={[TextThemes.CUSTOM]}
            style={`padding-left: 1em;`}
          >学生Webエンジニア</Text>
        </div>
        <Text theme={[TextThemes.MB52]}>京都府出身 / 神戸大学出身 / {old}才</Text>
        <Text theme={[TextThemes.LH2EM]}>
          某通信会社SEの清水謙吾です。web開発との出会いは、大学院1年時のカナダ・Block大学での1年間研究留学でした。独学で始めたweb開発で現在までに複数のサービスを開発しています。掲載許可を得ていないサービスやその他制作物についてはこちらには掲載していません。
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