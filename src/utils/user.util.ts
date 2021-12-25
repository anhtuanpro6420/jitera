import { IUser } from 'interfaces/user.interface';

const deleteUser = (
    deletedId: number,
    users: Array<IUser> = []
): Array<IUser> => {
    const cloneUsers: Array<IUser> = [...users];
    const userIndex: number = cloneUsers.findIndex(
        (user: IUser) => user.id === deletedId
    );
    const isUserExisted: boolean = userIndex > -1;
    if (isUserExisted) {
        cloneUsers.splice(userIndex, 1);
    }
    return cloneUsers;
};

const favoriteUser = (
    deletedId: number,
    users: Array<IUser> = []
): Array<IUser> => {
    const cloneUsers: Array<IUser> = [...users];
    const userIndex: number = cloneUsers.findIndex(
        (user: IUser) => user.id === deletedId
    );
    const isUserExisted: boolean = userIndex > -1;
    if (isUserExisted) {
        const foundUser: IUser = cloneUsers[userIndex];
        const { isFavorited = false } = foundUser;
        cloneUsers[userIndex] = { ...foundUser, isFavorited: !isFavorited };
    }
    return cloneUsers;
};

const updateUser = (updatedUser: IUser, users: Array<IUser> = []) => {
    const cloneUsers: Array<IUser> = [...users];
    const userIndex: number = cloneUsers.findIndex(
        (user: IUser) => user.id === updatedUser.id
    );
    const isUserExisted: boolean = userIndex > -1;
    if (isUserExisted) {
        cloneUsers[userIndex] = { ...updatedUser };
    }
    return cloneUsers;
};

export { deleteUser, favoriteUser, updateUser };
