import React, { useState, useEffect, useContext } from 'react';
import CommonStyle from '../../common/CommonStyle';
import { ReducerContext } from './../../common/ReducerContext';
import Text, { TextThemes } from './../atoms/Text';
import Title, { TitleThemes } from './../atoms/Title';


const ProfileText: React.FC = () => {
  const { state } = useContext(ReducerContext);
  const [animeEnd, setAnimeEnd] = useState(false);

  useEffect(() => {
    if(state.initial_animation){
      setTimeout(() => {
        setAnimeEnd(true)
      }, 300)
    }
  }, [state.initial_animation])

  return (
    <>
      <div className={`profile-text-wrap ${animeEnd && 'anime'}`}>
        <Title theme={[TitleThemes.PROFILE_NAME]}>清水 謙吾</Title>
        <div className="profile-text-from-wrap">
          <Text><span className='profile-text_subtitle'>出身大学</span> 神戸大学</Text>
          <Text><span className='profile-text_subtitle special'>出身</span> 京都府</Text>
          <Text><span className='profile-text_subtitle special'>趣味</span> 音楽 / スポーツ / コミュニケーション</Text>
        </div>
        <Text>
          神戸大学院2年の清水謙吾です．
          大学院1年時に研究留学として，
          カナダのBlock大学に1年間在籍．
          独学で始めたweb開発で現在までに
          複数のサービスを開発．
        </Text>
      </div>
      <style jsx>{`
        .profile-text-wrap{
          opacity: 0;
          transition: .5s;
        }
        .anime{
          opacity: 1;
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