import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';
import logo from '~/assets/white_logo.svg';

const schema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
});
export default function SignIn() {
    function handleSubmit(data) {
        alert('click');
        console.tron.log(data);
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
                <button type="submit">Acesssar</button>
                <Link to="/register">Criar conta Gratuita</Link>
            </Form>
        </>
    );
}
