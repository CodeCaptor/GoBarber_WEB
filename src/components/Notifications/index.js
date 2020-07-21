import React, { useState, useEffect, useMemo } from 'react';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdNotifications } from 'react-icons/md';
import {
    Container,
    Badge,
    NotificationList,
    Notification,
    Scroll,
} from './styles';

import api from '~/services/api';

function Notifications() {
    const [visible, setVisible] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const hasUnread = useMemo(
        () =>
            !!notifications.find((notification) => notification.read === false),
        [notifications]
    );
    function handleToggleVisible() {
        setVisible(!visible);
    }
    useEffect(() => {
        async function getNotificationsData() {
            const response = await api.get('notifications');
            const data = response.data.map((notification) => ({
                ...notification,
                timeDistance: formatDistance(
                    parseISO(notification.createdAt),
                    new Date(),
                    { addSuffix: true, locale: pt }
                ),
            }));
            console.log(data);
            setNotifications(data);
        }
        getNotificationsData();
    }, []);
    async function handleMarkAsRead(id) {
        await api.put(`notifications/${id}`);
        setNotifications(
            notifications.map((notification) =>
                notification._id === id
                    ? { ...notification, read: true }
                    : notification
            )
        );
    }
    return (
        <Container>
            <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
                <MdNotifications color="#7159c1" size={20} />
            </Badge>
            <Scroll visible={visible}>
                <NotificationList>
                    {notifications.map((notification) => (
                        <Notification
                            unread={!notification.read}
                            key={notification._id}
                        >
                            <p>{notification.content}</p>
                            <time>{notification.timeDistance}</time>
                            <button
                                type="button"
                                onClick={() =>
                                    handleMarkAsRead(notification._id)
                                }
                            >
                                {notification.read
                                    ? 'lido'
                                    : 'Marcar como lido'}
                            </button>
                        </Notification>
                    ))}
                </NotificationList>
            </Scroll>
        </Container>
    );
}

export default Notifications;
