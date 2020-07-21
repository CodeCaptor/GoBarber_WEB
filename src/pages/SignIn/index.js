import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { authRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/white_logo.svg';

const schema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
});
export default function SignIn() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.Auth.loading);
    function handleSubmit({ email, password }) {
        dispatch(authRequest(email, password));
    }

    return (
        <>
            <img src={logo} alt="logo gobatber" />
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="Seu email" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha"
                />
                <button type="submit">
                    {loading ? 'Carregando...' : 'Acesssar'}
                </button>
                <Link to="/register">Criar conta Gratuita</Link>
            </Form>
        </>
    );
}
