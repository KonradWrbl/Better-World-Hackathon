import React from 'react';
import Element from '../../../components/Element/Element';
import { IngredientContainer, ElementName } from './styles';
import DeleteButton from '../DeleteButton/DeleteButton';

const Ingredients = ({element}) => {

    const checkElement = () => {
        switch (element) {
            case 'Mg':
                return 'Magnesium'
            case 'Ca':
                return 'Calcium'
            case 'K':
                return 'Potassium';
            case 'Se':
                return 'Calcium';
            default:
                return;
        }
    }

    const elementName = checkElement();

    return (
        <IngredientContainer element={element}>
            <Element element={element}/>
            <ElementName>{elementName}</ElementName>
            <DeleteButton />
        </IngredientContainer>
    )
}

export default Ingredients;