import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/white_logo.svg';

export default function SignIn() {
    return (
        <>
            <img src={logo} alt="logo gobatber" />
            <form>
                <input type="email" placeholder="Seu email" />
                <input type="password" placeholder="Sua senha" />
                <button type="button">Acesssar</button>
                <Link to="/register">Criar conta Gratuita</Link>
            </form>
        </>
    );
}
