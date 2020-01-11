'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Post = use('App/Models/Post');

class PostController {

  async create ({ request, auth }) {
    const post = new Post(auth.user.id, request.only(['title']));
    const result = await Post.create({
      'user_id': auth.user.id,
      'title': request.only(['title'])
    });

    return result;
  }

  async store ({ request, response }) {
  }

  async show ({ params, request, response, view }) {
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = PostController
