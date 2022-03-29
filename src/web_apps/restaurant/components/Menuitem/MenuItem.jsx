import React from 'react';

import './MenuItem.css';

const MenuItem = ( { title, price, tags}) => (
  <div className='restaurant__menuitem'>
    <div className='restaurant__menuitem-head'>
      <div className='restaurant__menuitem-name'>
        <p className='p__cormorant' style={ {color: '#DCCA87' }}>{title}</p>
      </div>

      <div className='restaurant__menuitem-dash'/>

      <div className='restaurant__menuitem-price'>
        <p className='p__cormorant'>{price}</p>
      </div>

    </div>

    <div className='restaurant__menuitem-sub'>
      <p className='p__opensans' style= {{ color: '#AAAAAA'}}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
