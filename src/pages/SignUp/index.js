import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/white_logo.svg';

export default function SignUp() {
    return (
        <>
            <img src={logo} alt="logo gobatber" />
            <form>
                <input type="text" placeholder="Nome completo" />
                <input type="email" placeholder="Seu email" />
                <input type="password" placeholder="Sua senha" />
                <button type="button">Criar Conta</button>
                <Link to="/">Já possuo cadastro</Link>
            </form>
        </>
    );
}
