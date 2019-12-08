import styled from 'styled-components'
import theme from '../../../assets/styles/theme'



export const IngredientContainer = styled.div`
    background-color: ${({element, theme}) => element === 'Mg' ? theme.colors.thirdaryBlue : element === 'Ca' ? theme.colors.secondary : element === 'K' ? theme.colors.accent : element === 'Se' ? theme.colors.thirdaryDarkBlue : theme.colors.primary}32;

    border-radius: 5px 5px 5px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    margin-bottom: 15px;
`

export const ElementName = styled.span`
    width: calc(100% - 100px);
    padding: 0 15px;
    font-size: ${({theme}) => theme.font.reg};
    font-weight: ${({theme}) => theme.font.weight.bold};
`