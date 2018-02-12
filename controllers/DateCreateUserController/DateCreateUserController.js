var db = require("../../models");
// var mongojs = require("mongojs");

// // Mongojs configuration
// var databaseUrl = "datecreate";
// var collections = ["users"];

// Hook our mongojs config to the db var
// var db = mongojs(databaseUrl, collections);
// db.on("error", function(error) {
//   console.log("Database Error:", error);
// });

// Defining methods for the UserController
module.exports = {
    findAllUsers: function (req, res) {
        db.DateCreateUser
            .find(req.query)
            // .sort({ id: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
    //     db.User
    //         .findById(req.params.id)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    },
    // create: function (req, res) {
    //     db.User
    //         .create(req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    update: function (req, res) {
    //     db.User
    //         .findOneAndUpdate({ _id: req.params.id }, req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    },
    removeContact: function (req, res) {
    //     db.User
    //         .findById({ _id: req.params.id })
    //         .then(dbModel => dbModel.remove())
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    }
};