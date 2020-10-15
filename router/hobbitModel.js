const db = require("../data/connection.js");

module.exports = {
    get,
    create,
     getById,
     remove
};

function get() {
    return db("hobbits");
}

function getById(id) {
    return db('hobbits')
    .where({ id })
    .first();
}

function create(hobbit) {
    return db('hobbits')
    .insert(hobbit)
    .then(ids => {
        return getById(ids[0])
    })
}

function remove(id) {
    return db('hobbits')
      .where('id', id)
      .del();
  }