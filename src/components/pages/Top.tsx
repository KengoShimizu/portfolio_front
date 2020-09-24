import React, { useContext } from 'react';
import ProfileCard from '../organisms/ProfileCard';
import MenuNav from '../organisms/MenuNav';
import { ReducerContext } from './../../common/ReducerContext';
import CommonStyle from '../../common/CommonStyle';
import Skills from './../organisms/Skills';
import { useEffect } from 'react';
import { useState } from 'react';

const Top: React.FC = (props: any) => {
  const { state } = useContext(ReducerContext);
  const [skills, setSkills] = useState([]);

  const fetchSkillsData = async (subscribe?: boolean) => {
    try {
      const res = await fetch('http://localhost:4000/api/v1/user/skills')
        .then(res => res.json());
      if(!subscribe) setSkills(res);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    let subscribe = false;
    fetchSkillsData(subscribe)
    const cleanup = () => {
      subscribe = true;
    };
    return cleanup;
  }, [])

  return (
    <>
      <MenuNav />
      <div className='test'/>
      <div className={`common ${state.selected_menu === 1 ? 'appear' : 'disappear'}`}>
        <ProfileCard />
      </div>
      <div className={`common ${state.selected_menu === 2 ? 'appear' : 'disappear'}`}>
        <Skills skills={skills}/>
      </div>
      <style jsx>{`
        .test{
          position: absolute;
          width: 100%;
          height: 100vh;
          z-index: 75;
          top: 100px;
          left: 0;
          background-color: ${CommonStyle.BGWhite};
        }
        .common{
          transition: ${CommonStyle.Transition};
          position: absolute;
          width: 100%;
          top: 100px;
          left: 0;
        }
        .appear{
          display: block;
          z-index: 100;
          animation-duration: ${CommonStyle.Transition};
          animation-fill-mode: forwards;
          animation-name: animation-appear;
        }
        .disappear{
          z-index: 50;
          animation-duration: ${CommonStyle.Transition};
          animation-fill-mode: forwards;
          animation-name: animation-disapper;
        }
        @keyframes animation-appear {
            0% {
              left: 3000px;
            }
            100% {
              left: 0px;
            }
          }
        @keyframes animation-disapper {
            0% {
              left: 0px;
              top: 100px;
            }
            99%{
              top: 100px;
            }
            100% {
              top: -3000px;
              left: -3000px;
            }
          }
      `}</style>
    </>
  );
}

export default Top;