import React from 'react';
import { MdNotifications } from 'react-icons/md';
import {
    Container,
    Badge,
    NotificationList,
    Notification,
    Scroll,
} from './styles';

function Notifications() {
    return (
        <Container>
            <Badge hasUnread>
                <MdNotifications color="#7159c1" size={20} />
            </Badge>
            <Scroll>
                <NotificationList>
                    <Notification unread>
                        <p>Você possui um novo agendamento apra amanhã</p>
                        <time>há dois dias atrás</time>
                        <button type="button">Marcar como lido</button>
                    </Notification>
                    <Notification>
                        <p>Você possui um novo agendamento apra amanhã</p>
                        <time>há dois dias atrás</time>
                        <button type="button">Marcar como lido</button>
                    </Notification>
                    <Notification>
                        <p>Você possui um novo agendamento apra amanhã</p>
                        <time>há dois dias atrás</time>
                        <button type="button">Marcar como lido</button>
                    </Notification>
                    <Notification>
                        <p>Você possui um novo agendamento apra amanhã</p>
                        <time>há dois dias atrás</time>
                        <button type="button">Marcar como lido</button>
                    </Notification>
                    <Notification>
                        <p>Você possui um novo agendamento apra amanhã</p>
                        <time>há dois dias atrás</time>
                        <button type="button">Marcar como lido</button>
                    </Notification>
                    <Notification>
                        <p>Você possui um novo agendamento apra amanhã</p>
                        <time>há dois dias atrás</time>
                        <button type="button">Marcar como lido</button>
                    </Notification>
                </NotificationList>
            </Scroll>
        </Container>
    );
}

export default Notifications;
