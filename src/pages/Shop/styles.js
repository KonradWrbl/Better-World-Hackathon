import styled from 'styled-components'

export const ShopWrapper = styled.div`
    padding: 20px;
    background-color: ${({theme}) => theme.colors.lightGrey};
    wight: 100%;
    height: 100%;
    
    #waves {
        position: absolute;
        top: 0;
        width: 100%;
        left: 0;
    }

    h2 {
        margin: 0;
        padding-top: 30px;
        font-size: ${({theme}) => theme.font.m}
    }
`