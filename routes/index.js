var express = require('express');
var router = express.Router();
let Project = require('../models/Project');

// Get Homepage
router.get('/', function(req, res){
        
        Project.find(function(err, projects){
            
            if(err)
                res.send(err.message);
            else
                res.render('index', {projects});
        })
    });


/*function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}*/

module.exports = router;