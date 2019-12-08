import React from 'react';
import { ElementContainer } from './styles';

const Element = ({element}) => {
    
    return (
        <ElementContainer element={element}>
            <span>{element}</span>
        </ElementContainer>
    )
}

export default Element