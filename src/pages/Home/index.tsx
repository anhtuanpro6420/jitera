import { IUser } from 'interfaces/user.interface';
import React, { FC, useEffect, useState } from 'react';
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

    return <div className='home-page'>Home page</div>;
};

export default Home;
