import React from 'react';
import { LoginWrapper } from './styles';
import drop from '../../assets/images/drop.svg'

const Login = () => {
    return (
        <LoginWrapper>
            <form>
                <img src={drop} />
                <span>E-mail:</span>
                <label>
                    <input type="email" name="name" placeholder="e.g.annanowa@gmail.com"/>
                </label>
                <span>Password</span>
                <label>
                    <input type="text" name="pass" placeholder="********"/>
                </label>
                <div>
                    <button>Zaloguj</button>
                </div>
            </form>
        </LoginWrapper>
    )
}

export default Login