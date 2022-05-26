var mongoose = require ('mongoose');
var transportvehicleSchema = mongoose.Schema({
    Type: String,
    Length: Number,
    Weight: Number
});
var transportvehicle = mongoose.model("Transportvehicle",transportvehicleSchema);
module.exports = transportvehicle;
