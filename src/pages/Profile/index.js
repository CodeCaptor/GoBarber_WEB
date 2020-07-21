import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';

function Profile() {
    const profile = useSelector((state) => state.User.profile);
    function handleSubmit(data) {
        console.tron.log(data);
    }
    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <Input name="name" type="text" placeholder="Nome completo" />
                <Input name="email" type="email" placeholder="Seu email" />
                <hr />
                <Input
                    name="oldPassword"
                    type="password"
                    placeholder="Sua senha atual"
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha atual"
                />
                <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="Sua senha atual"
                />
                <button type="submit">Atualizar Perfil</button>
            </Form>
            <button type="button">Sair do GoBarber</button>
        </Container>
    );
}

export default Profile;
