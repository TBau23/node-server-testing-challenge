const router = require("express").Router();

const db = require("./hobbitModel.js");

router.get("/", (req, res) => {
    db.get()
        .then(hobbits => {
            res.status(200).json(hobbits)
        })
        .catch(err => {
            res.status(500).json({err: err.message})
        })
})

router.post("/", (req,res) => {
    db.create(req.body)
        .then(hobbit => {
            res.status(201).json(hobbit)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
              message: 'Error adding halfling ...'
            })
          })
})

router.delete('/:id', (req, res) => {
    // do your magic!
    db.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({message: 'Hobbit removed forever'})
      } else {
        res.status(404).json({message: "The hobbit could not be found"})
      }
    })
    .catch(error => {å
      res.status(500).json({ message: "Error deleting hobbit"})
    })
  
  });

module.exports = router;