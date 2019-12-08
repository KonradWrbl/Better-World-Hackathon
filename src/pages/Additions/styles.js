import styled from 'styled-components'

export const AdditionsWrapper = styled.div`
    padding: 20px;
    background-color: ${({theme}) => theme.colors.lightGrey};
    wight: 100%;
    height: 100%;
    
    img {
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

    p {
        margin: 0;
        padding: 25px 0;
        font-weight: ${({theme}) => theme.font.weight.regular}

    }
`