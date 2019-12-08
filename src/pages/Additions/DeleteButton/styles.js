import styled from 'styled-components'

export const DeleteButtonContainer = styled.div`
    height: 50px;
    width: 50px;
    background-color: ${({theme}) => theme.colors.red};
    border-radius: 5px 5px 5px 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    /* svg, {
        fill: #fff;
    } */
`