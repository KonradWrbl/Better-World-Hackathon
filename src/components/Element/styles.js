import styled from 'styled-components'

export const ElementContainer = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 5px 5px 5px 5px;

     span {
         display: inline-block;
         font-size: ${({theme}) => theme.font.m};
         font-weight: ${({theme}) => theme.font.weight.bold};
         color: ${({element, theme}) => element === 'Mg' ? theme.colors.thirdaryBlue : element === 'Ca' ? theme.colors.secondary : element === 'K' ? theme.colors.accent : element === 'Se' ? theme.colors.thirdaryDarkBlue : theme.colors.primary};

     }
`