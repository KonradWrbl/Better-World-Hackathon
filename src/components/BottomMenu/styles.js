import styled from 'styled-components'

export const MainContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 48px;
    background-color: #fff;
    box-shadow: ${({theme}) => theme.colors.shadow} 0 0 15px;
    align-items: center;
    justify-content: space-around;
    display: ${window.location.pathname === '/login' ? 'none' : 'flex'}
`