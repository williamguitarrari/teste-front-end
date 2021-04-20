import React, { Component } from 'react';
import 'react-multi-carousel/lib/styles.css';

import Newsletter from '../../components/Newsletter';
import CustomSlider from '../../components/Banner';
import Carousel from '../../components/Carousel';
import api from '../../services/api';

import { Container } from './styles';

api.get("/products")
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => {
    console.error("ops! ocorreu um erro" + err);
  });
class Home extends Component {
  render() {
    return (
      <Container>
        <CustomSlider />
        <Carousel />
        <Newsletter />
      </Container>
    );
  }
}

export default Home;