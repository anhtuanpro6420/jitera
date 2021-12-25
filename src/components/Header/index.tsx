import React, { FC } from 'react';
import { Layout } from 'antd';

const { Header: HeaderAnt } = Layout;

const Header: FC = () => {
    return <HeaderAnt className='header'>Users</HeaderAnt>;
};

export default Header;
