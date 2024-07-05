const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://hungnhp:0943244904Hung@testmonggoconnect.lwcazla.mongodb.net/?retryWrites=true&w=majority&appName=TestMonggoConnect',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
        );

        console.log('Connect Susscessfully');
    } catch (error) {
        console.log('Fail!!!');
    }
}
module.exports = { connect };
