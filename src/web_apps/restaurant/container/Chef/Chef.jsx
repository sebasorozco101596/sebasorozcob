import React from 'react';

import { SubHeading, SUbHeading } from '../../components'
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='restaurant__bg restaurant__wrapper section__padding'>
    <div className='restaurant__wrapper_img restaurant__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>

    <div className='restaurant__wrapper_info'>
      <SubHeading title= "Chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='restaurant__chef-content'>
        <div className='restaurant__chef-content_quote'>
          <img src= {images.quote} alt="quote" />
        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro provident dicta maiores saepe eos libero architecto modi, ab nobis ea incidunt iure amet voluptates repellendus optio excepturi ratione reprehenderit.</p>
      </div>

      <div className='restaurant__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'> Chef & Founder</p>
        <img src= {images.sign} alt="" />
      </div>
    </div>
  </div>
);

export default Chef;
