import MockAdapter from 'axios-mock-adapter';
import { getUsers } from 'apis/user.api';
import { IUser } from 'interfaces/user.interface';
import { mockUsers } from '__mocks__/user.mock';
import axios from '../../axios-instance';

describe('User api', () => {
    test('should return list of user', async () => {
        const mock = new MockAdapter(axios);
        mock.onGet('/users').reply(200, mockUsers);
        const users: Array<IUser> = await getUsers();
        expect(users).toEqual(mockUsers);
    });
});
