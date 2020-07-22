import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';

import logo from '~/assets/colored_logo.svg';
import Notifictions from '../Notifications';

function Header() {
    const profile = useSelector((state) => state.User.profile);
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="gobarber" />
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>
                <aside>
                    <Notifictions />
                    <Profile>
                        <div>
                            <strong>{profile.name}</strong>
                            <Link to="/profile">Meu perfil</Link>
                        </div>
                        <img
                            src={
                                profile.avatar.url ||
                                'https://api.adorable.io/avatars/50/abott@adorable.png'
                            }
                            alt={profile.name}
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}

export default Header;
