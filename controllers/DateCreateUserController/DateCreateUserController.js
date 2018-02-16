var db = require("../../models");

// Defining methods for the UserController
module.exports = {
    //User Authentication
    findOne: function(err, res) {
        
    },
    // Done
    findAllUsers: function (req, res) {
        db.DateCreateUser
            .find(req.query)
            .sort({ id: -1 })
            .then(dbModel => res.status(200).json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // Done
    findById: function (req, res) {
        db.DateCreateUser
            .findById(req.params.id)
            .then(dbModel => res.status(200).json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // Done
    createUser: function (req, res) {
        db.DateCreateUser
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // Done
    updateRecord: function (req, res) {
        db.DateCreateUser
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findMatch: function (req, res) {
        console.log("req.params", req.params);
        db.DateCreateUser
            .find({locCity: req.params.locCity})
            .and({locState: req.params.locState})
            .and({gender: req.params.gender})
            // TODO add ability to query by minAge and maxAge
            // .and({$gte: req.params.minAge})
            // .and({maxAge: {$lte: req.params.maxAge}})
            .sort({ id: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
    // // TODO
    // removeContact: function (req, res) {
    //     db.DateCreateUser
    //         .findById({ _id: req.params.id })
    //         .then(dbModel => dbModel.remove())
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // }
};