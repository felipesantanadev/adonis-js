'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {
    Post(userId, title) {
        if(!title || title === ""){
            throw Error('The title must be provided.');
        } else if(title.length > 150) {
            throw Error('The title mus have less then 150 characters.');

        }

        if(id <= 0) {
            throw Error('Invalid user.');
        }

        this.fill({
            'user_id': userId,
            'title': title
        });
    }
}

module.exports = Post
