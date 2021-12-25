import React, { FC } from 'react';
import { Layout } from 'antd';
import Header from 'components/Header';

const { Content } = Layout;

interface Props {
    children: JSX.Element;
}

const Wrapper: FC<Props> = ({ children }) => {
    return (
        <Layout>
            <Header />
            <Content>{children}</Content>
        </Layout>
    );
};

export default Wrapper;
