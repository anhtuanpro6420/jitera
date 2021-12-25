import { IUser } from 'interfaces/user.interface';
import axios from '../axios-instance';

const getUsers = async (): Promise<Array<IUser>> => {
    const { data }: { data: Array<IUser> } = await axios.get(`/users`);
    return data;
};

export { getUsers };
