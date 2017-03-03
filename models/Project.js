var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
    title:String,
    username:String,
    URL:String,
    screenshot:String
})

var Project = mongoose.model("project", projectSchema);

module.exports = Project;