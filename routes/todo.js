var Todo = require('../models/todo')

module.exports = function(express, db) {
  Router = express.Router();

  Router.route("/todos")
    // use req.connection.remoteAddress for individualive each todo, without auth module.
    .get(function(req, res) {
      Todo.find({author: req.connection.remoteAddress}, function (err, todos) {
        if (err) return res.status(500).send(err);
        res.json(todos)
      })
    })

    .post(function(req, res) {
      var newTodo = new Todo({
        title: req.body.title,
        description: req.body.description,
        author: req.connection.remoteAddress
      });

      newTodo.save(function(err, todo) {
        if (err) return res.status(500).send(err);
        res.json(todo);
      })
    })

  Router.route("/todos/:id")
    .get(function(req, res) {
      Todo.findOne({author: req.connection.remoteAddress, _id: req.params.id}, function(err, todo) {
        if (err) return res.status(500).send(err);
        res.json(todo)
      })
    })
    .put(function(req, res) {
      var query = {author: req.connection.remoteAddress, _id: req.params.id};
      var update = {};
      if (req.body.title) update.title = req.body.title;
      if (req.body.description) update.description = req.body.description;
      console.log(update);
      Todo.findOneAndUpdate(query, update, {new: true}, function(err, updatedTodo) {
        if (err) return res.status(500).send(err);
        res.json(updatedTodo);
      })

    })
    // Delete an message
    .delete(function(req, res) {
      var query = {author: req.connection.remoteAddress, _id: req.params.id};
      Todo.findOneAndRemove(query, {}, function(err, todo) {
        if (err) return res.status(500).send(err);
        res.json(todo);
      })
    });

  return Router;
}
