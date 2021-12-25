import React, { FC, useState } from 'react';
import { Card, Popconfirm } from 'antd';
import {
    DeleteFilled,
    EditOutlined,
    GlobalOutlined,
    HeartFilled,
    HeartOutlined,
    MailOutlined,
    PhoneOutlined,
} from '@ant-design/icons';
import { IUser } from 'interfaces/user.interface';
import './UserCard.scss';

const { Meta } = Card;

interface Props {
    user: IUser;
    onDelete: (userId: number) => void;
    onFavorite: (userId: number) => void;
}

const UserCard: FC<Props> = ({ user, onDelete, onFavorite }) => {
    const [isConfirmVisible, setIsConfirmVisible] = useState(false);
    const {
        id,
        name,
        email,
        phone,
        website,
        isFavorited = false,
    }: IUser = user || {};

    const confirm = () => {
        setIsConfirmVisible(false);
        onDelete(id);
    };

    const cancel = () => setIsConfirmVisible(false);

    const openDeleteConfirm = () => setIsConfirmVisible(true);

    const renderFavorite = () => {
        return isFavorited ? (
            <HeartFilled
                key='favorited'
                className='favorite-icon'
                onClick={() => onFavorite(id)}
            />
        ) : (
            <HeartOutlined
                key='favorite'
                className='favorite-icon'
                onClick={() => onFavorite(id)}
            />
        );
    };

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
                    // eslint-disable-next-line max-len
                    src={`https://avatars.dicebear.com/v2/avataaars/${name}.svg?options[mood][]=happy`}
                />
            }
            actions={[
                renderFavorite(),
                <EditOutlined key='edit' />,
                <Popconfirm
                    visible={isConfirmVisible}
                    title='Are you sure to delete this user?'
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText='Yes'
                    cancelText='No'
                >
                    <DeleteFilled key='delete' onClick={openDeleteConfirm} />
                </Popconfirm>,
            ]}
            bordered
        >
            <Meta title={name} description={renderInformation()} />
        </Card>
    );
};

export default UserCard;
