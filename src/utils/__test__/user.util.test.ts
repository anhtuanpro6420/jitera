import { mockUser, mockUsers, mockInvalidUserId } from '__mocks__/user.mock';
import { IUser } from 'interfaces/user.interface';
import { deleteUser, favoriteUser, updateUser } from 'utils/user.util';

describe('User utils', () => {
    describe('Happy cases', () => {
        test('should delete user from user list successfully', () => {
            const deletedUsers: Array<IUser> = deleteUser(
                mockUser.id,
                mockUsers
            );
            expect(deletedUsers).toHaveLength(9);
        });

        test('should favorite user from user list successfully', () => {
            const favoritedUsers: Array<IUser> = favoriteUser(
                mockUser.id,
                mockUsers
            );
            const favoritedUser: IUser | undefined = favoritedUsers.find(
                (user: IUser) => user.id === mockUser.id
            );
            expect(favoritedUser?.isFavorited).toBe(true);
        });

        test('should update user from user list successfully', () => {
            const updatedObj: IUser = {
                ...mockUser,
                name: 'My testing name',
            };
            const updatedUsers: Array<IUser> = updateUser(
                updatedObj,
                mockUsers
            );
            const updatedUser: IUser | undefined = updatedUsers.find(
                (user: IUser) => user.id === updatedObj.id
            );
            expect(updatedUser?.name).toEqual('My testing name');
        });
    });

    describe('Not happy cases', () => {
        test('should delete user from user list unsuccessfully with invalid user id', () => {
            const deletedUsers: Array<IUser> = deleteUser(
                mockInvalidUserId,
                mockUsers
            );
            expect(deletedUsers).toHaveLength(10);
        });

        test('should favorite user from user list unsuccessfully with invalid user id', () => {
            const favoritedUsers: Array<IUser> = favoriteUser(
                mockInvalidUserId,
                mockUsers
            );
            const favoritedUser: IUser | undefined = favoritedUsers.find(
                (user: IUser) => user.id === mockInvalidUserId
            );
            expect(favoritedUser).toBe(undefined);
        });

        test('should update user from user list successfully', () => {
            const updatedObj: IUser = {
                ...mockUser,
                id: mockInvalidUserId,
                name: 'My testing name',
            };
            const updatedUsers: Array<IUser> = updateUser(
                updatedObj,
                mockUsers
            );
            const updatedUser: IUser | undefined = updatedUsers.find(
                (user: IUser) => user.id === updatedObj.id
            );
            expect(updatedUser).toBe(undefined);
        });
    });
});
