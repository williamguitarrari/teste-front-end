import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  left: 0px;
  top: 0px;
  background: #E6E8EA;
`;

export const Logo = styled(Link)`
img {
  height: 41px;
  margin-left: 100%;
}
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 20%;
`;

export const Badge = styled.span`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 50%;
    text-align: center;
    background: red;
    color: #fefefe;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;

`;


