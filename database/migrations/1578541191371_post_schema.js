'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.timestamps()
      
      table.integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
          
      table.string('title', 150).notNullable();
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema
