import React, { useContext, useEffect, useState } from 'react';
import ProfileCard from '../organisms/ProfileCard';
import MenuNav from '../organisms/MenuNav';
import { ReducerContext } from './../../common/ReducerContext';
import CommonStyle from '../../common/CommonStyle';
import Skills from './../organisms/Skills';
import Works from './../organisms/Works';
import Contact from './../organisms/Contact';
import Skill from './../../types/Skill';
import Work from './../../types/Work';

const Top: React.FC = (props: any) => {
  const { state } = useContext(ReducerContext);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [works, setWorks] = useState<Work[]>([]);

  const fetchSkillsData = async (subscribe?: boolean) => {
    try {
      const res = await fetch('http://localhost:4000/api/v1/user/skills')
        .then(res => res.json());
      if (!subscribe) setSkills(res);
    } catch (e) {
      console.log(e);
    }
  }

  const fetchWorksData = async (subscribe?: boolean) => {
    try {
      const res = await fetch('http://localhost:4000/api/v1/user/works')
        .then(res => res.json());
      if (!subscribe) setWorks(res);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    let subscribe = false;
    fetchSkillsData(subscribe)
    fetchWorksData(subscribe)
    const cleanup = () => {
      subscribe = true;
    };
    return cleanup;
  }, [])

  return (
    <>
      <MenuNav />
      {/* 初期アニメーションで見せたくない部分を隠すため */}
      <div className='initial-preventer'/>
      <div className={`common ${state.selected_menu === 1 ? 'appear' : 'disappear'}`}>
        <ProfileCard />
      </div>
      <div className={`common ${state.selected_menu === 2 ? 'appear' : 'disappear'}`}>
        <Skills skills={skills} />
      </div>
      <div className={`common ${state.selected_menu === 3 ? 'appear' : 'disappear'}`}>
        <Works works={works} />
      </div>
      <div className={`common ${state.selected_menu === 4 ? 'appear' : 'disappear'}`}>
        <Contact />
      </div>
      <style jsx>{`
        .common{
          width: 100%;
        }
        .appear{
          display: block;
          z-index: 100;
        }
        .disappear{
          ${window.innerWidth < 768 ? 'display: none;' : 'display: block;'};
          z-index: 50;
        }
        /* ipad - pc */
        @media screen and (min-width: 768px) {
          .common{
            position: absolute;
            top: 100px;
            left: 0;
            transition: ${CommonStyle.Transition};
          }
          .initial-preventer{
            position: absolute;
            width: 100%;
            height: calc(100vh - 100px);
            z-index: 75;
            top: 100px;
            left: 0;
            background-color: ${CommonStyle.BGWhite};
          }
          .appear{
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
        }
        @keyframes animation-appear {
          0% {
            left: 3000px;
          }
          99% {
            left: 0px;
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