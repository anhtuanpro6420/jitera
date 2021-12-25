import React, { FC, useState } from 'react';
import { Card, Popconfirm } from 'antd';
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
    onDelete: (userId: number) => void;
}

const UserCard: FC<Props> = ({ user, onDelete }) => {
    const [isConfirmVisible, setIsConfirmVisible] = useState(false);
    const { id, name, email, phone, website }: IUser = user || {};

    const confirm = () => {
        setIsConfirmVisible(false);
        onDelete(id);
    };

    const cancel = () => setIsConfirmVisible(false);

    const openDeleteConfirm = () => setIsConfirmVisible(true);

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
