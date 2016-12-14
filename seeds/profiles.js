exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        knex('profiles').insert({user_id: 99901,  image: 'https://goo.gl/bzoc5j'}),
        knex('profiles').insert({user_id: 99902,  image: '' }),
        knex('profiles').insert({user_id: 99903,  image: '' }),
        knex('profiles').insert({user_id: 99904,  image: '' }),
        knex('profiles').insert({user_id: 99905,  image: '' }),
        knex('profiles').insert({user_id: 99907,  image: '' }),
        knex('profiles').insert({user_id: 99908,  image: '' }),
        knex('profiles').insert({user_id: 99909,  image: '' }),
        knex('profiles').insert({user_id: 99906,  image: ''}),
        knex('profiles').insert({user_id: 99910,  image: '' }),
        knex('profiles').insert({user_id: 99911,  image: '' }),
        knex('profiles').insert({user_id: 99912,  image: '' }),
        knex('profiles').insert({user_id: 99913,  image: '' }),
        knex('profiles').insert({user_id: 99914,  image: '' }),
        knex('profiles').insert({user_id: 99915,  image: '' }),
        knex('profiles').insert({user_id: 99916,  image: '' }),
        knex('profiles').insert({user_id: 99917,  image: '' }),
        knex('profiles').insert({user_id: 99918,  image: '' }),
        knex('profiles').insert({user_id: 99919,  image: '' }),
        knex('profiles').insert({user_id: 99920,  image: '' }),
        knex('profiles').insert({user_id: 99921,  image: '' }),
        knex('profiles').insert({user_id: 99922,  image: '' }),
        knex('profiles').insert({user_id: 99923,  image: '' }),
        knex('profiles').insert({user_id: 99924,  image: '' }),
        knex('profiles').insert({user_id: 99925,  image: '' }),
        knex('profiles').insert({user_id: 99926,  image: '' })
      ]);
    });
};
