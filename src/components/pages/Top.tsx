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
import queryString from 'query-string';
import { QsToNumber } from './../../common/Function';

const Top: React.FC = (props: any) => {
  const { state, dispatch } = useContext(ReducerContext);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [works, setWorks] = useState<Work[]>([]);
  const [initDisplay, setInitDisplay] = useState(false);
  const qs = queryString.parse(props.location.search);

  const fetchSkillsData = async (subscribe?: boolean) => {
    try {
      const res = await fetch(process.env.REACT_APP_API_END_POINT + 'api/v1/user/skills')
        .then(res => res.json());
      if (!subscribe) setSkills(res);
    } catch (e) {
      console.log(e);
    }
  }

  const fetchWorksData = async (subscribe?: boolean) => {
    try {
      const res = await fetch(process.env.REACT_APP_API_END_POINT + 'api/v1/user/works')
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
    if (qs.page === 'skills' || qs.page === 'works' || qs.page === 'contact' && qs.page !== null && !Array.isArray(qs.page)) {
      dispatch({
        type: 'menu_select',
        selected_menu: QsToNumber(qs.page),
        page: qs.page === undefined ? 'about' : qs.page 
      })
      dispatch({
        type: 'initial_anime',
        initial_animation: true
      })
      dispatch({
        type: 'second_anime_start',
        second_anime: true
      })
      setInitDisplay(true);
      setTimeout(() => {
        setInitDisplay(false);
      }, 100)
    }
    return cleanup;
  }, [])

  useEffect(() => {
    window.history.pushState(null, '',`?page=${state.page}`);
  }, [state.page])

  return (
    <>
      <MenuNav />
      {/* 初期アニメーションで見せたくない部分を隠すため */}
      <div className='initial-preventer'/>
      <div className={`common ${state.selected_menu === 1 ? 'appear' : 'disappear'} ${state.selected_menu !== 1 && initDisplay && window.innerWidth >= 768 ? 'dis-none' : ''}`}>
        <ProfileCard />
      </div>
      <div className={`common ${state.selected_menu === 2 ? 'appear' : 'disappear'} ${state.selected_menu !== 2 && initDisplay && window.innerWidth >= 768 ? 'dis-none' : ''}`}>
        <Skills skills={skills} />
      </div>
      <div className={`common ${state.selected_menu === 3 ? 'appear' : 'disappear'} ${state.selected_menu !== 3 && initDisplay && window.innerWidth >= 768 ? 'dis-none' : ''}`}>
        <Works works={works} />
      </div>
      <div className={`common ${state.selected_menu === 4 ? 'appear' : 'disappear'} ${state.selected_menu !== 4 && initDisplay && window.innerWidth >= 768 ? 'dis-none' : ''}`}>
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
          display: none;
          z-index: 50;
        }
        .dis-none{
          display: none !important;
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
            display: block;
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
            left: -1000px;
          }
        }
      `}</style>
    </>
  );
}

export default Top;