import React, { FC } from 'react';
import { Card } from 'antd';
import {
    DeleteFilled,
    EditOutlined,
    GlobalOutlined,
    HeartOutlined,
    MailOutlined,
    PhoneOutlined,
} from '@ant-design/icons';
import { IUser } from 'interfaces/user.interface';
import './UserCard.scss';

const { Meta } = Card;

interface Props {
    user: IUser;
}

const UserCard: FC<Props> = ({ user }) => {
    const { name, email, phone, website }: IUser = user || {};

    const renderInformation = () => {
        return (
            <div className='information-container'>
                <div className='item-container'>
                    <MailOutlined className='info-icon' />
                    <a className='info-link' href={`mailto:${email}`}>
                        {email}
                    </a>
                </div>
                <div className='item-container'>
                    <PhoneOutlined className='info-icon' />
                    <a className='info-link' href={`tel:${phone}`}>
                        {phone}
                    </a>
                </div>
                <div className='item-container'>
                    <GlobalOutlined className='info-icon' />
                    <a className='info-link' href={`http://${website}`}>
                        {`http://${website}`}
                    </a>
                </div>
            </div>
        );
    };
    return (
        <Card
            className='user-card-container'
            cover={
                <img
                    className='avatar'
                    alt='avatar'
                    src={`https://avatars.dicebear.com/v2/avataaars/${name}.svg?options[mood][]=happy`}
                />
            }
            actions={[
                <HeartOutlined key='favorite' className='favorite-icon' />,
                <EditOutlined key='edit' />,
                <DeleteFilled key='delete' />,
            ]}
            bordered
        >
            <Meta title={name} description={renderInformation()} />
        </Card>
    );
};

export default UserCard;
