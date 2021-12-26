import React from 'react';
import '__mocks__/media.mock';
import { render, screen } from '@testing-library/react';
import { mockUser, onUpdate } from '__mocks__/user.mock';
import UserForm from '../index';

describe('UserForm', () => {
    describe('Form UI', () => {
        test('should render name label', () => {
            render(<UserForm user={mockUser} onUpdate={onUpdate} />);
            const nameLabel = screen.getByLabelText('Name');
            expect(nameLabel).toBeInTheDocument();
        });

        test('should render email label', () => {
            render(<UserForm user={mockUser} onUpdate={onUpdate} />);
            const emailLabel = screen.getByLabelText('Email');
            expect(emailLabel).toBeInTheDocument();
        });

        test('should render phone label', () => {
            render(<UserForm user={mockUser} onUpdate={onUpdate} />);
            const phoneLabel = screen.getByLabelText('Phone');
            expect(phoneLabel).toBeInTheDocument();
        });

        test('should render website label', () => {
            render(<UserForm user={mockUser} onUpdate={onUpdate} />);
            const websiteLabel = screen.getByLabelText('Website');
            expect(websiteLabel).toBeInTheDocument();
        });

        test('should render name input', () => {
            render(<UserForm user={mockUser} onUpdate={onUpdate} />);
            const nameInput = screen.getByTestId('name-input');
            expect(nameInput).toBeInTheDocument();
        });

        test('should render email input', () => {
            render(<UserForm user={mockUser} onUpdate={onUpdate} />);
            const emailInput = screen.getByTestId('email-input');
            expect(emailInput).toBeInTheDocument();
        });

        test('should render phone input', () => {
            render(<UserForm user={mockUser} onUpdate={onUpdate} />);
            const phoneInput = screen.getByTestId('phone-input');
            expect(phoneInput).toBeInTheDocument();
        });

        test('should render website input', () => {
            render(<UserForm user={mockUser} onUpdate={onUpdate} />);
            const websiteInput = screen.getByTestId('website-input');
            expect(websiteInput).toBeInTheDocument();
        });

        test('should render update button', () => {
            render(<UserForm user={mockUser} onUpdate={onUpdate} />);
            const updateButton = screen.getByTestId('update-button');
            expect(updateButton).toBeInTheDocument();
        });
    });

    describe('Form Information', () => {
        test('should render correct name', () => {
            render(<UserForm user={mockUser} onUpdate={onUpdate} />);
            const nameInput = screen.getByTestId('name-input');
            expect(nameInput).toHaveDisplayValue(mockUser.name);
        });

        test('should render correct email', () => {
            render(<UserForm user={mockUser} onUpdate={onUpdate} />);
            const emailInput = screen.getByTestId('email-input');
            expect(emailInput).toHaveDisplayValue(mockUser.email);
        });

        test('should render correct phone', () => {
            render(<UserForm user={mockUser} onUpdate={onUpdate} />);
            const phoneInput = screen.getByTestId('phone-input');
            expect(phoneInput).toHaveDisplayValue(mockUser.phone);
        });

        test('should render correct website', () => {
            render(<UserForm user={mockUser} onUpdate={onUpdate} />);
            const websiteInput = screen.getByTestId('website-input');
            expect(websiteInput).toHaveDisplayValue(mockUser.website);
        });
    });
});
