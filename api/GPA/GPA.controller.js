'use strict';

var mongoose = require('mongoose');

// Defining Model
// =====================================================

var GPAModel = mongoose.model('GPAModel', {
    class: String,
    credits: Number,
    grade: String
});

// Defining Routes
// =====================================================

exports.index = function(req, res) {
    GPAModel.find(function (err, gpa) {
        if (err) {
            console.log("Error getting data from database");
            res.send(err)
        } else {
            res.json(gpa); // return results
        }
    });
};

exports.create = function(req, res) {
    GPAModel.create(req.body, function (err, gpa) {
        if (err) {
            res.send(err);
        } else {
            GPAModel.find(function (err, gpas) {
                if (err) {
                    res.send(err);
                }

                res.json(gpas);
            });
        }
    });
};

exports.destroy = function(req, res) {
    GPAModel.findById(req.params.GPA_id, function(err, gpa){
      if(err) { res.send(err); return "error: " + err; }
      if(!gpa) { return res.sendStatus(404); }

      gpa.remove(function(err){
         if(err) { return "error: " + err}
         return res.sendStatus(204);
      });
    });
};