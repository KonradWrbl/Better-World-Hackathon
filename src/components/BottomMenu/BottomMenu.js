import React from 'react';
import { MainContainer } from './styles.js'
import BottomMenuIcon from '../BottomMenuIcon/BottomMenuIcon'

const BottomMenu = () => {
    return(
        <MainContainer>
            <BottomMenuIcon icon='home'/>
            <BottomMenuIcon icon='chart-pie'/>
            <BottomMenuIcon icon='link'/>
            <BottomMenuIcon icon='cog'/>
        </MainContainer>
    )
}

export default BottomMenu;