import React, { FC } from 'react';
import { Button, Form, Input } from 'antd';
import { IUser } from 'interfaces/user.interface';
import './UserForm.scss';

interface Props {
    user: IUser;
    onUpdate: (user: IUser) => void;
}

const UserForm: FC<Props> = ({ user, onUpdate }) => {
    const { name, email, phone, website }: IUser = user || {};

    const onFinish = (userObj: IUser) => {
        onUpdate({ ...user, ...userObj });
    };

    return (
        <Form
            name='basic'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ name, email, phone, website }}
            onFinish={onFinish}
        >
            <Form.Item
                label='Name'
                name='name'
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input data-testid='name-input' />
            </Form.Item>

            <Form.Item
                label='Email'
                name='email'
                rules={[
                    { required: true, message: 'Please input your email!' },
                    {
                        type: 'email',
                        message: 'Not valid email!',
                    },
                ]}
            >
                <Input data-testid='email-input' />
            </Form.Item>

            <Form.Item
                label='Phone'
                name='phone'
                rules={[
                    {
                        required: true,
                        message: 'Please input your phone number!',
                    },
                ]}
            >
                <Input data-testid='phone-input' />
            </Form.Item>

            <Form.Item
                label='Website'
                name='website'
                rules={[
                    { required: true, message: 'Please input your website!' },
                ]}
            >
                <Input data-testid='website-input' />
            </Form.Item>

            <Form.Item className='button-container'>
                <Button
                    type='primary'
                    htmlType='submit'
                    data-testid='update-button'
                >
                    Update
                </Button>
            </Form.Item>
        </Form>
    );
};

export default UserForm;
