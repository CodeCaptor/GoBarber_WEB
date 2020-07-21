import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/colored_logo.svg';
import { Container, Content, Profile } from './styles';

function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="gobarber" />
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>
                <aside>
                    <Profile>
                        <div>
                            <strong>Diego Fernandes</strong>
                            <Link to="/profile">Meu perfil</Link>
                        </div>
                        <img
                            src="https://api.adorable.io/avatars/50/abott@adorable.png"
                            alt="user"
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}

export default Header;