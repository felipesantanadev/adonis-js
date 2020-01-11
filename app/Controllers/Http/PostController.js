'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Post = use('App/Models/Post');

class PostController {

  async index({request}) {
    // eager loading
    return await Post.query()
                     .with('user')
                     .fetch();
  }

  async create ({ request, auth }) {
    const data = request.only(['title']);
    const result = await Post.create({
      'user_id': auth.user.id,
      ...data
    });

    return result;
  }

  async show ({ params }) {
    console.log(params.id);
    const post = await Post.findOrFail(params.id);
    return post;
  }


  async destroy ({ params, auth, response }) {
    const post = await Post.findOrFail(params.id);
    if(post.user_id != auth.user.id) {
      return response.status(401);
    }
    return post.delete();
  }
}

module.exports = PostController
