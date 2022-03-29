import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';

import { images } from '../../constants'
import './Header.css';

const Header = () => (
  <div className='restaurant__header restaurant__wrapper section__padding' id='home'>

    <div className='restaurant__wrapper_info'>
      <SubHeading tittle="Chase the new flavour"/>
      <h1 className='restaurant__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}>
      Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus 
      </p>
      <button type="button" className='custom__button'>Explore Menu</button>
    </div>

    <div className="restaurant__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
