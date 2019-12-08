import React from 'react';
import { DeleteButtonContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DeleteButton = () => {
    return (
        <DeleteButtonContainer>
            <FontAwesomeIcon color='white' size="2x" icon='times' />
        </DeleteButtonContainer>
    )
}

export default DeleteButton