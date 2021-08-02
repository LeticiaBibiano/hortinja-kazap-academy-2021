import React from 'react'
import styled from 'styled-components'
import BgModal from '../../assets/bgModal.svg'

export const NewCategory = styled.div` 
  width: 35%;
  height: 70%;
  background-color: #E5E5E5;
  border-radius: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NcBg = styled.div` 
  width: 100%;
  height: 60%;
  background-image: url(${BgModal});
  background-size: cover;
  border-radius: 30px;
  z-index: 1 ;
`;

export const Category = styled.div` 
  width: 27%;
  height: 6%;
  background-color: #FBFAFA;
  border-radius: 30px;  
  z-index: 2 ;
  position: absolute;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

