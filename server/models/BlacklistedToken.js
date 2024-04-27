const mongoose = require('mongoose');

const blacklistedTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '1d', // Automatically remove blacklisted tokens after 1 day
    },
});

module.exports = mongoose.model('BlacklistedToken', blacklistedTokenSchema);
