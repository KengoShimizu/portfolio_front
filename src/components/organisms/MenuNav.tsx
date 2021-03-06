import React, { useState, useContext } from 'react';
import MenuItem from './../molecules/MenuItem';
import CommonStyle from './../../common/CommonStyle';
import { ReducerContext } from '../../common/ReducerContext';
import { Menu } from 'react-feather';
import { useEffect } from 'react';

const MenuNav: React.FC = () => {
  const { state, dispatch } = useContext(ReducerContext);
  const [ hamburger, setHamburger ] = useState(false);

  const handleMenuClick = (menu_item: number) => {
    let page = 'about';
    if (menu_item === 2) page = 'skills';
    else if (menu_item === 3) page = 'works';
    else if (menu_item === 4) page = 'contact';

    dispatch({
      type: 'menu_select',
      selected_menu: menu_item,
      page: page
    })
    setHamburger(false);
  }

  const handleHamburger = () => {
    setHamburger(true);
  }

  useEffect(() => {
    // スクロールの固定
    if (hamburger) {
      document.body.setAttribute('style', 'overflow: hidden;')
    } else {
      document.body.removeAttribute('style')
    }
  }, [hamburger])

  return (
    <>
      {hamburger && <div className="hamburger-overlay" onClick={() => handleMenuClick(state.selected_menu ? state.selected_menu : 1)}/>}
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
        .hamburger-overlay{
          position: absolute;
          width: 100%;
          height: 110vh;
          z-index: 1499;
          backdrop-filter: blur(3px);
        }
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
          position: fixed;
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
          .hamburger,
          .hamburger-overlay{
            display: none;
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