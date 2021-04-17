import React from 'react';
import 'react-multi-carousel/lib/styles.css';

import Newsletter from '../../components/Newsletter';
import CustomSlider from '../../components/Banner';
import Carousel from '../../components/Carousel';

import { Container } from './styles';



function Home() {

  return (
    <Container>
      <CustomSlider />
      <Carousel />
      <Newsletter />
    </Container>
  );
}
export default Home;