import React, { FC, useState } from 'react';
import { Card, Modal, Popconfirm } from 'antd';
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
import UserForm from 'components/UserForm';

const { Meta } = Card;

interface Props {
    user: IUser;
    onDelete: (userId: number) => void;
    onFavorite: (userId: number) => void;
    onUpdate: (user: IUser) => void;
}

const UserCard: FC<Props> = ({ user, onDelete, onFavorite, onUpdate }) => {
    const [isConfirmVisible, setIsConfirmVisible] = useState(false);
    const [isUpdateVisible, setIsUpdateVisible] = useState(false);
    const {
        id,
        name,
        email,
        phone,
        website,
        isFavorited = false,
    }: IUser = user || {};

    // confirmation:
    const openDeleteConfirm = () => setIsConfirmVisible(true);

    const handleConfirm = () => {
        setIsConfirmVisible(false);
        onDelete(id);
    };

    const cancelConfirm = () => setIsConfirmVisible(false);

    // updating:
    const openUpdateModal = () => setIsUpdateVisible(true);

    const handleUpdate = (userObj: IUser) => {
        setIsUpdateVisible(false);
        onUpdate({ ...userObj, id });
    };

    const cancelUpdate = () => setIsUpdateVisible(false);

    // render actions:
    const renderFavorite = () => {
        return isFavorited ? (
            <HeartFilled
                key='favorited'
                className='favorite-icon'
                data-testid='favorited-icon'
                onClick={() => onFavorite(id)}
            />
        ) : (
            <HeartOutlined
                key='favorite'
                className='favorite-icon'
                data-testid='favorite-icon'
                onClick={() => onFavorite(id)}
            />
        );
    };

    const renderEdit = () => (
        <EditOutlined
            key='edit'
            data-testid='edit-icon'
            onClick={openUpdateModal}
        />
    );

    const renderDelete = () => {
        return (
            <Popconfirm
                visible={isConfirmVisible}
                title='Are you sure to delete this user?'
                onConfirm={handleConfirm}
                onCancel={cancelConfirm}
                okText='Yes'
                cancelText='No'
            >
                <DeleteFilled
                    key='delete'
                    data-testid='delete-icon'
                    onClick={openDeleteConfirm}
                />
            </Popconfirm>
        );
    };

    const renderInformation = () => {
        return (
            <div className='information-container'>
                <div className='item-container'>
                    <MailOutlined
                        className='info-icon'
                        data-testid='email-icon'
                    />
                    <a className='info-link' href={`mailto:${email}`}>
                        {email}
                    </a>
                </div>
                <div className='item-container'>
                    <PhoneOutlined
                        className='info-icon'
                        data-testid='phone-icon'
                    />
                    <a className='info-link' href={`tel:${phone}`}>
                        {phone}
                    </a>
                </div>
                <div className='item-container'>
                    <GlobalOutlined
                        className='info-icon'
                        data-testid='website-icon'
                    />
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
            actions={[renderFavorite(), renderEdit(), renderDelete()]}
            bordered
        >
            <Meta title={name} description={renderInformation()} />
            <Modal
                title='Update user'
                visible={isUpdateVisible}
                footer={null}
                onCancel={cancelUpdate}
                destroyOnClose
            >
                <UserForm user={user} onUpdate={handleUpdate} />
            </Modal>
        </Card>
    );
};

export default UserCard;
