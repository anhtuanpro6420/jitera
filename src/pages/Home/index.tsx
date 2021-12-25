import React, { FC, useEffect, useState } from 'react';
import { Row, Col } from 'antd';

import UserCard from 'components/UserCard';
import { IUser } from 'interfaces/user.interface';
import { getUsers } from 'apis/user.api';
import { deleteUser, favoriteUser, updateUser } from 'utils/user.util';

const Home: FC = () => {
    const [users, setUsers] = useState([] as Array<IUser>);

    const fetchUsers = async () => {
        const usersResponse: Array<IUser> = await getUsers();
        setUsers(usersResponse);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const openDeleteConfirm = (userId: number) => {
        const removedUsers: Array<IUser> = deleteUser(userId, users);
        setUsers(removedUsers);
    };

    const handleFavorite = (userId: number) => {
        const favoritedUsers: Array<IUser> = favoriteUser(userId, users);
        setUsers(favoritedUsers);
    };

    const handleUpdate = (userObj: IUser) => {
        const updatedUsers: Array<IUser> = updateUser(userObj, users);
        setUsers(updatedUsers);
    };

    const renderUsers = () => {
        return users.map((user: IUser) => (
            <Col key={user.id} xs={24} sm={24} md={12} lg={6}>
                <UserCard
                    user={user}
                    onDelete={openDeleteConfirm}
                    onFavorite={handleFavorite}
                    onUpdate={handleUpdate}
                />
            </Col>
        ));
    };

    return (
        <div className='home-page'>
            <Row>{renderUsers()}</Row>
        </div>
    );
};

export default Home;
