import React from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { userRequest } from '~/store/modules/user/actions';
import logo from '~/assets/white_logo.svg';

const schema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    email: Yup.string().email('Email inválido').required('Campo obrigatório'),
    password: Yup.string()
        .min(6, 'Senha deve ter acima de 6 caracteres')
        .required('Campo obrigatório'),
});
export default function SignUp() {
    const dispatch = useDispatch();

    function handleSubmit({ name, email, password }) {
        dispatch(userRequest(name, email, password));
    }

    return (
        <>
            <img src={logo} alt="logo gobatber" />
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" type="text" placeholder="Nome completo" />
                <Input name="email" type="email" placeholder="Seu email" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha"
                />
                <button type="submit">Criar Conta</button>
                <Link to="/">Já possuo cadastro</Link>
            </Form>
        </>
    );
}
