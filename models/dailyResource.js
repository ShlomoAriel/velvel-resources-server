var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DailyResourceSchema = new Schema({
    date: { 
        type: Date,
        required: true},
    resourceType:{
        type:Schema.ObjectId,
        ref:'ResourceType',
        required: true
    },
    site:{
        type:Schema.ObjectId,
        ref:'Site', 
        required: true
    },
    amount:{
        type: Number,
        required: true,
    }
});
DailyResourceSchema.index({ resourceType: 1, date: 1 }, { unique: true });
var DailyResource = mongoose.model('DailyResource', DailyResourceSchema);
module.exports = DailyResource;