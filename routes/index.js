var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  get: get,
  profile: profile,
  getForm: getForm,
  addUser: addUser,
  getPostPage: getPostPage,
  addPost: addPost,
  getSinglePost: getSinglePost
}

function get (req, res) {
  knex('users')
    .select()
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function profile (req, res) {
  knex('profiles')
  .join('users', 'profiles.user_id', '=', 'users.id')
  .select('users.name', 'profiles.image')
  .where('users.id', Number(req.params.id))
  .first()// to get first item from the array, as id will be [99901], instead of doing [0] later
  // .then(function(userProfile) {
  //   //view model
  //   var vm = {
  //     name: userProfile.name,
  //     image: userProfile.image
  //   }
  // })
  .then(profile => {
    return knex('posts')
    .select('posts.title', 'posts.content', 'posts.id')
    .where('posts.user_id', Number(req.params.id))
    .then(posts => {
      profile.posts = posts
      return profile
    })
    .then (profile => res.render('profile', profile))
  })
}

// function getUserPosts (req, res) {
//   knex('posts')
//   .select('posts.title', 'posts.content')
//   .where('posts.user_id', Number(req.params.id))
//   .first()
//   .then(function(userPost) {
//     var vm = {
//       title: userPost.title,
//       content: userPost.content
//     }
//     res.render('profile', vm)
//   })
// }

function getForm (req, res) {
  res.render('form', {})
}

function addUser (req, res) {
  return knex('users')
  .insert( {name: req.body.username, email: req.body.useremail})
  .then(function(id) {
    return knex('profiles')
    .insert({image: req.body.image, user_id: id[0]})
    .then(function() {
      res.redirect('/form')
      })
  })
}

function getPostPage (req, res) {
  knex('users').select()
  .then(function(users) {
    var vm = {
      users: users
    }
    res.render('post', vm)
  })

}

function addPost (req, res) {
  return knex('posts')
  .insert({title: req.body.title, content: req.body.content, user_id:Number(req.body.userid)})
  .then(function() {
    res.redirect('/post-page')
  })
}

function getSinglePost (req, res) {
    knex('posts')
    .select('posts.title', 'posts.content', 'posts.id')
    .where('posts.id', Number(req.params.id))
    .first()
    .then(function(singlePost) {
      var vm = {
        title: singlePost.title,
        content: singlePost.content
      }
      res.render('single-post', vm)
    })
}

//   .then(function(userPost) {
//     var vm = {
//       title: userPost.title,
//       content: userPost.content
//     }
