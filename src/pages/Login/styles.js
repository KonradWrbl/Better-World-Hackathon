import styled from 'styled-components'

export const LoginWrapper = styled.div`
    padding: 0 20px;
    background-color: ${({theme}) => theme.colors.lightGrey};
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100vh;


    form {
        display: flex;
        flex-direction: column;
        width: 100%;

        span {
            padding: 10px 4px;
        }
        
        label {
        display: flex;
        flex-direction: column;
        padding: 0 0 21px 0;


            input {
                height: 45px;
                border: none;
                border-radius: 5px 5px 5px 5px;
                padding: 0 10px;

                ::placeholder {
                    opacity: .5;
                }
        }
    }

    div {
        width: 100%;
        display: flex;
        justify-content:flex-end;
    }

    button {
        height: 38px;
        width: 131px;
        border: none;
        background-color: ${({theme}) => theme.colors.primary};
        border-radius: 5px;
        color: white;
        font-size: ${({theme}) => theme.font.reg}
    } 

    img {
        padding: 0 0 50px 0;
    }

    

    
`