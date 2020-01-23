const routes = require('next-routes')

module.exports = routes()
    .add('index', '/')
    .add({name: 'comments', pattern:'/comments/:slug', page: 'comments'})
