const express = require('express')
const foods = express.Router()
const Food = require('../models/food.js')

//==================
//  INDEX ROUTE
//==================
foods.get('/', (req, res) => {
  Food.find({}, (err, foundFood) => {
    res.json(foundFood)
  })
})

//==================
//  CREATE ROUTE
//==================
foods.post('/', (req, res) => {
  Food.create(req.body, (err, createdFood) => {
    Food.find({}, (err, foundFood) => {
      res.json(foundFood)
    })
  })
})

//====================
//  UPDATE ROUTE
//====================
foods.put('/:id', (req, res) => {
  Food.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedFood) => {
    if(err) {
      res.send(err)
    } else {
      Food.find({}, (err, foundFood) => {
        res.json(foundFood)
      })
    }
  })
})

//=======================
//  DELETE ROUTE
//=======================
foods.delete('/:id', (req, res) => {
  Food.findByIdAndRemove(req.params.id, (err, deletedFood) => {
    Food.find({}, (err, foundFood) => {
      res.json(foundFood)
    })
  })
})

module.exports = foods
