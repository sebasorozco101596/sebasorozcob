import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';



const SpecialMenu = () => (
  <div className='restaurant__specialMenu flex__center section__padding' id='menu'>
    <div className='restaurant__specialMenu-title'>
      <SubHeading title="Menu That Fits You Palatte" />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className='restaurant__specialMenu-menu'>
      <div className="restaurant__specialMenu-menu_wine flex__center">
        <p className='restaurant__specialMenu-menu_heading'>Wine & Beer</p>
        <div className="restaurant__specialMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

        <div className="restaurant__specialMenu-menu_img">
          <img src={images.menu} alt="menu_img" />
        </div>

        <div className="restaurant__specialMenu-menu_cocktails flex__center">
          <p className='restaurant__specialMenu-menu_heading'>Cocktails</p>
          <div className="restaurant__specialMenu-menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
              </div>
      </div>

        </div>

        <div style={{ marginTop: 15 }}>
          <button type='button' className='custom__button'>View More</button>
        </div>
      </div>
      );

      export default SpecialMenu;
