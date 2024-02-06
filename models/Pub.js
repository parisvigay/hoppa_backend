import mongoose from 'mongoose';
import db from '../config/db.js';

const pubSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    drinksOffered: [String],
    openingHours: [{
        day: { type: String, required: true },
        times: { type: String, required: true }
    }],
    rating: Number,
    facilities: {
        outdoorSeating: { type: Boolean, default: false },
        liveMusic: {
            isAvailable: { type: Boolean, default: false },
            days: [{ type: String }]
        },
        wifi: { type: Boolean, default: false }
    },
    studentDeals: {
        isAvailable: { type: Boolean, default: false },
        days: [{ type: String }]
    }
});

const Pub = mongoose.model('Pub', pubSchema);

const testPub = new Pub({
    name: 'testPub',
    location: 'Brighton',
    drinksOffered: ['Guinness', 'Asahi', 'Cocktails'],
    openingHours: [
        { day: 'Monday', times: '10:00 AM - 11:00 PM' },
        { day: 'Tuesday', times: '10:00 AM - 11:00 PM' },
        { day: 'Wednesday', times: '10:00 AM - 11:00 PM' },
        { day: 'Thursday', times: '10:00 AM - 11:00 PM' },
        { day: 'Friday', times: '10:00 AM - 12:00 AM' },
        { day: 'Saturday', times: '10:00 AM - 12:00 AM' },
        { day: 'Sunday', times: '10:00 AM - 10:00 PM' },
    ],
    rating: 8.5,
    facilities: {
        outdoorSeating: true,
        liveMusic: {
            isAvailable: true,
            days: ['Thursday']
        },
        wifi: true
    },
    studentDeals: {
        isAvailable: true,
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
    }
})

console.log('Before logging testPub');
console.log('Pub object to be saved:', testPub);
console.log('After logging testPub');

testPub.save()
    .then(pub => {
        console.log(`${pub} saved`);
    })
    .catch(err => {
        console.error('Error saving pub:', err);
    });    