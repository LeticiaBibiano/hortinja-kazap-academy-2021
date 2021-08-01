import React from 'react'
import styled from 'styled-components'
import BgCard from '../../assets/bgCard.svg'
import Beringela from '../../assets/beringela.jpg'

export const Card2 = styled.div` 
    height: 320px;
    width: 300px;
    background: #FBFAFA;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 32px;
    margin-left: 20px;
`;

export const CardImage = styled.div`
    height: 100px;
    width: 280px;
    background-image: url(${BgCard});
    background-size: cover;
    margin-top: 10px;
    border-radius: 32px;
    display: flex;
    align-items: center;
    
`

export const ItemImage2 = styled.div`
    height: 80px;
    width: 80px;
    background-image: url(${Beringela});
    background-size: cover;
    border-radius: 100px;
    margin-left: 20px;
    border: 2px solid white;
    background-position: center;
`
