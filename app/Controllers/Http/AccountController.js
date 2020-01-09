'use strict'

const User = use('App/Models/User');

class AccountController {
    async register({ request, response }){
        const data = request.only(['email', 'password', 'username']);
        const user = await User.create(data);
        return response.status(200);
    }

    async login({ request, auth }){
        const { email, password} = request.all();
        const token = await auth.attempt(email, password);
        
        return token;
    }

    async index(){
        return "Authenticated!";
    }
}

module.exports = AccountController
