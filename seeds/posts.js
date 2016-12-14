
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('posts').insert({id: 1, user_id: 99901, title: "Post 1"}),
        knex('posts').insert({id: 2, user_id: 99901, title: "Post 2"}),
        knex('posts').insert({id: 3, user_id: 99902, title: "Post 3"})
      ]);
    });
};
