import styled from 'styled-components'
import BgInfos from '../../assets/bgInfos.svg'

export const MainCard = styled.div` 
  width: 50%;
  height: 150px;
  background-image: url(${BgInfos});
  background-size: cover;
  border-radius: 30px;
  margin-top: 40px;
`;

export const CardInfo = styled.div` 
  width: 280px;
  height: 150px;
  background-color: white;
  background-size: cover;
  border-radius: 20px;
  margin-top: -85px;
  margin-left: 13px;
  opacity: 0.8;
`;

