const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    op: { type: String },
    t: { type: Number },
    v: { type: Number },
    ns: { type: String },
    ui: { type: String },
    wall: { type: String },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Course', Course);
