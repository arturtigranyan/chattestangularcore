import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }
   
    apiURL = "https://localhost:44339/";

    getAll() {   
        return this.http.get<User[]>(this.apiURL + 'account/GetAllUsers');
    }

    getById(id: number) {
        return this.http.get(this.apiURL + 'api/users/' + id);
    }

    getChatHistory(userChat)
    {        
        return this.http.get(this.apiURL +'GetAllChatUser?id=' + userChat.id);
    }

    register(user: User) {
        return this.http.post(this.apiURL + 'api/users/register', user);
    }

    update(user: User) {        
        return this.http.put(this.apiURL + 'users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(this.apiURL + 'account/DeleteUser/' + id);
    }
}