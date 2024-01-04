// import seed data files, arrays of objects
const blogsData = require('../seed-data/blogs');
const commentsData = require('../seed-data/comments');

exports.seed = async function(knex) {
  await knex('blog').del();
  await knex('comment').del();
  await knex('blog').insert(blogsData);
  await knex('comment').insert(commentsData);
};