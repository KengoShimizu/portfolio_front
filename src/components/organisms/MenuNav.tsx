import React, { useState, useContext } from 'react';
import MenuItem from './../molecules/MenuItem';
import CommonStyle from './../../common/CommonStyle';
import { ReducerContext } from '../../common/ReducerContext';
import { Menu } from 'react-feather';

const MenuNav: React.FC = () => {
  const { state, dispatch } = useContext(ReducerContext);
  const [ hamburger, setHamburger ] = useState(false);

  const handleMenuClick = (menu_item: number) => {
    dispatch({
      type: 'menu_select',
      selected_menu: menu_item
    })
    setHamburger(false);
  }

  const handleHamburger = () => {
    setHamburger(true);
  }

  return (
    <>
      <div className='hidden-block'/>
      <div className={`hamburger ${state.second_anime && 'hamburger-anime'}`} onClick={handleHamburger}>
        <Menu size={36}/>
      </div>
      <nav className={`navigarion-wrap ${state.second_anime && 'anime'} ${hamburger && 'hamburger-open'}`}>
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
        .hamburger{
          position: absolute;
          right: 8px;
          top: -50px;
          transition: ${CommonStyle.Transition};
        }
        .hamburger-anime{
          top: 8px;
        }
        .navigarion-wrap{
          position: absolute;
          z-index: 1500;
          height: 100%;
          right: -170px;
          background-color: ${CommonStyle.Menu};
          transition: ${CommonStyle.Transition};
        }
        .hamburger-open{
          right: 0;
        }
        /* ipad - pc */
        @media screen and (min-width: 768px) {
          .hamburger{
            display: none;
          }
          .hidden-block{
            width: 100%;
            height: 112px;
          }
          .navigarion-wrap{
            position: absolute;
            top: -200px;
            right: 0;
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
        }
      `}</style>
    </>
  );
}

export default MenuNav;