import React, { useContext } from 'react';
import MenuItem from './../molecules/MenuItem';
import CommonStyle from './../../common/CommonStyle';
import { useState } from 'react';
import { ReducerContext } from '../../common/ReducerContext';

const MenuNav: React.FC = () => {
  const { state, dispatch } = useContext(ReducerContext);

  const handleMenuClick = (menu_item: number) => {
    dispatch({
      type: 'menu_select',
      selected_menu: menu_item
    })
  }

  return (
    <>
      <div className='hidden-block'/>
      <nav className={`navigarion-wrap ${state.second_anime && 'anime'}`}>
        <ul className='navigarion_ul'>
          <li onClick={() => handleMenuClick(1)}>
            <MenuItem content='about' isSelected={state.selected_menu === 1} />
          </li>
          <li onClick={() => handleMenuClick(2)}>
            <MenuItem content='skills' isSelected={state.selected_menu === 2} />
          </li>
          <li onClick={() => handleMenuClick(3)}>
            <MenuItem content='works' isSelected={state.selected_menu === 3} />
          </li>
          <li onClick={() => handleMenuClick(4)}>
            <MenuItem content='contact' isSelected={state.selected_menu === 4} />
          </li>
        </ul>
      </nav>
      <style jsx>{`
          .hidden-block{
            width: 100%;
            height: 112px;
          }
          .navigarion-wrap{
            position: absolute;
            top: -200px;
            width: 100%;
            height: auto;
            background-color: ${CommonStyle.Menu};
            transition: ${CommonStyle.Transition};
          }
          .anime{
            top: 0;
          }
          .navigarion_ul{
            display: flex;
          }
          .navigarion_ul li{
            cursor: pointer;
          }
        `}</style>
    </>
  );
}

export default MenuNav;