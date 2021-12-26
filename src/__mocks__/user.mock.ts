import { IUser } from 'interfaces/user.interface';

export const mockUser: IUser = {
    id: 1,
    name: 'Leanne Graham',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
};
export const onDelete = jest.fn();
export const onFavorite = jest.fn();
export const onUpdate = jest.fn();
