import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../_helpers/app-settings';


import { User } from '../_models/user';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${AppSettings.API_ENDPOINT}/users`);
    }

    getById(id: number) {
        return this.http.get(`${AppSettings.API_ENDPOINT}/users/` + id);
    }

    register(user: User) {
        return this.http.post(`${AppSettings.API_ENDPOINT}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${AppSettings.API_ENDPOINT}/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${AppSettings.API_ENDPOINT}/users/` + id);
    }
}