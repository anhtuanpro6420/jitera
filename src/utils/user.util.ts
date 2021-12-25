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

export { deleteUser };
