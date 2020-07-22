import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { userUpdateProfileRequest } from '~/store/modules/user/actions';
import { authSignOut } from '~/store/modules/auth/actions';

import { Container } from './styles';
import AvatarInput from './AvatarInput';

function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.User.profile);

    function handleSubmit(data) {
        dispatch(userUpdateProfileRequest(data));
    }
    function handleSignOut() {
        dispatch(authSignOut());
    }
    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <AvatarInput name="avatar_id" />
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
            <button type="button" onClick={handleSignOut}>
                Sair do GoBarber
            </button>
        </Container>
    );
}

export default Profile;
