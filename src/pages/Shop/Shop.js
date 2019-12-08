import React from 'react';
import { ShopWrapper } from './styles';
import Card from './Card/Card';
import waves from '../../assets/images/Mask Group 3.svg'


const Shop = () => {
    return (
        <ShopWrapper>
            <img id="waves" src={waves} />
            <h2>Shop</h2>
            <Card count1 = '1' count2 = '5'/>
            <Card count1 = '10' count2 = '20'/>
            <Card count1 = '50' count2 = '100'/>
        </ShopWrapper>
    )
}

export default Shop