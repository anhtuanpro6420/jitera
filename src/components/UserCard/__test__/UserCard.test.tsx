import React from 'react';
import { render, screen } from '@testing-library/react';
import { mockUser, onDelete, onFavorite, onUpdate } from '__mocks__/user.mock';
import { IUser } from 'interfaces/user.interface';
import UserCard from '../index';

describe('UserCard', () => {
    describe('Card UI', () => {
        test('should render avatar', () => {
            render(
                <UserCard
                    user={mockUser}
                    onDelete={onDelete}
                    onFavorite={onFavorite}
                    onUpdate={onUpdate}
                />
            );
            const avatarElement = screen.getByAltText(/avatar/i);
            expect(avatarElement).toBeInTheDocument();
        });

        test('should render email icon', () => {
            render(
                <UserCard
                    user={mockUser}
                    onDelete={onDelete}
                    onFavorite={onFavorite}
                    onUpdate={onUpdate}
                />
            );
            const emailIcon = screen.getByTestId('email-icon');
            expect(emailIcon).toBeInTheDocument();
        });

        test('should render phone icon', () => {
            render(
                <UserCard
                    user={mockUser}
                    onDelete={onDelete}
                    onFavorite={onFavorite}
                    onUpdate={onUpdate}
                />
            );
            const phoneIcon = screen.getByTestId('phone-icon');
            expect(phoneIcon).toBeInTheDocument();
        });

        test('should render website icon', () => {
            render(
                <UserCard
                    user={mockUser}
                    onDelete={onDelete}
                    onFavorite={onFavorite}
                    onUpdate={onUpdate}
                />
            );
            const websiteIcon = screen.getByTestId('website-icon');
            expect(websiteIcon).toBeInTheDocument();
        });

        test('should render favorite icon', () => {
            render(
                <UserCard
                    user={mockUser}
                    onDelete={onDelete}
                    onFavorite={onFavorite}
                    onUpdate={onUpdate}
                />
            );
            const favoriteIcon = screen.getByTestId('favorite-icon');
            expect(favoriteIcon).toBeInTheDocument();
        });

        test('should render favorited icon', () => {
            const favoritedUser: IUser = { ...mockUser, isFavorited: true };
            render(
                <UserCard
                    user={favoritedUser}
                    onDelete={onDelete}
                    onFavorite={onFavorite}
                    onUpdate={onUpdate}
                />
            );
            const favoritedIcon = screen.getByTestId('favorited-icon');
            expect(favoritedIcon).toBeInTheDocument();
        });

        test('should render edit icon', () => {
            render(
                <UserCard
                    user={mockUser}
                    onDelete={onDelete}
                    onFavorite={onFavorite}
                    onUpdate={onUpdate}
                />
            );
            const editIcon = screen.getByTestId('edit-icon');
            expect(editIcon).toBeInTheDocument();
        });

        test('should render delete icon', () => {
            render(
                <UserCard
                    user={mockUser}
                    onDelete={onDelete}
                    onFavorite={onFavorite}
                    onUpdate={onUpdate}
                />
            );
            const deleteIcon = screen.getByTestId('delete-icon');
            expect(deleteIcon).toBeInTheDocument();
        });
    });

    describe('Card information', () => {
        test('should render correct name of the user', () => {
            render(
                <UserCard
                    user={mockUser}
                    onDelete={onDelete}
                    onFavorite={onFavorite}
                    onUpdate={onUpdate}
                />
            );
            const nameElement = screen.getByText(RegExp(mockUser.name, 'i'));
            expect(nameElement).toBeInTheDocument();
        });

        test('should render correct email of the user', () => {
            render(
                <UserCard
                    user={mockUser}
                    onDelete={onDelete}
                    onFavorite={onFavorite}
                    onUpdate={onUpdate}
                />
            );
            const emailElement = screen.getByText(RegExp(mockUser.email, 'i'));
            expect(emailElement).toBeInTheDocument();
        });

        test('should render correct phone of the user', () => {
            render(
                <UserCard
                    user={mockUser}
                    onDelete={onDelete}
                    onFavorite={onFavorite}
                    onUpdate={onUpdate}
                />
            );
            const phone = screen.getByText(RegExp(mockUser.phone, 'i'));
            expect(phone).toBeInTheDocument();
        });

        test('should render correct website of the user', () => {
            render(
                <UserCard
                    user={mockUser}
                    onDelete={onDelete}
                    onFavorite={onFavorite}
                    onUpdate={onUpdate}
                />
            );
            const website = screen.getByText(RegExp(mockUser.website, 'i'));
            expect(website).toBeInTheDocument();
        });
    });
});
