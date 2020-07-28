import bent from 'bent';

const getJson = bent('json');

export default class UsersController {
    
    isValidId(userId: number) {
        return typeof userId === 'number' && userId > 0;
    }

    getUserById(userId: number) {
        if (!this.isValidId(userId)) {
            throw Error('Invalid userId');
        }
        return getJson(`https://jsonplaceholder.typicode.com/users/${userId}`);
    }
}