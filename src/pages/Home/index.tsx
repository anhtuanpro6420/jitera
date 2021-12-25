import React, { FC, useEffect, useState } from 'react';
import { Row, Col } from 'antd';

import UserCard from 'components/UserCard';
import { IUser } from 'interfaces/user.interface';
import { getUsers } from '../../apis/user.api';

const Home: FC = () => {
    const [users, setUsers] = useState([] as Array<IUser>);

    const fetchUsers = async () => {
        const usersResponse: Array<IUser> = await getUsers();
        setUsers(usersResponse);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const renderUsers = () => {
        return users.map((user: IUser) => (
            <Col key={user.id} xs={24} sm={24} md={12} lg={6}>
                <UserCard user={user} />
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
