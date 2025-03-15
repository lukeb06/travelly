'use strict';

const { Spot } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA; // define your schema in options object
}

const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

module.exports = {
    async up(queryInterface, Sequelize) {
        await Spot.bulkCreate(
            [
                {
                    ownerId: 1,
                    address: '123 Pencil Ln',
                    city: 'New York City',
                    state: 'New York',
                    country: 'United States',
                    lat: 40.7128,
                    lng: -74.006,
                    name: 'Spot 1',
                    description: LOREM,
                    price: 100,
                },
                {
                    ownerId: 2,
                    address: '371 Main St',
                    city: 'Los Angeles',
                    state: 'California',
                    country: 'United States',
                    lat: 34.0522,
                    lng: -118.2437,
                    name: 'Spot 2',
                    description: LOREM,
                    price: 130,
                },
                {
                    ownerId: 3,
                    address: '1293 West Ave',
                    city: 'Chicago',
                    state: 'Illinois',
                    country: 'United States',
                    lat: 10.7128,
                    lng: -60.006,
                    name: 'Spot 3',
                    description: LOREM,
                    price: 200,
                },
                {
                    ownerId: 4,
                    address: '1841 East Blvd',
                    city: 'Houston',
                    state: 'Texas',
                    country: 'United States',
                    lat: 29.7128,
                    lng: -95.006,
                    name: 'Spot 4',
                    description: LOREM,
                    price: 150,
                },
                {
                    ownerId: 5,
                    address: '9173 Lake Rd',
                    city: 'Denver',
                    state: 'Colorado',
                    country: 'United States',
                    lat: 10.7128,
                    lng: -60.006,
                    name: 'Spot 5',
                    description: LOREM,
                    price: 320,
                },
                {
                    ownerId: 6,
                    address: '1198 Lincoln Ave',
                    city: 'Phoenix',
                    state: 'Arizona',
                    country: 'United States',
                    lat: 10.7128,
                    lng: -60.006,
                    name: 'Spot 6',
                    description: LOREM,
                    price: 250,
                },
                {
                    ownerId: 7,
                    address: '123 Main St',
                    city: 'San Francisco',
                    state: 'California',
                    country: 'United States',
                    lat: 10.7128,
                    lng: -60.006,
                    name: 'Spot 7',
                    description: LOREM,
                    price: 300,
                },
            ],
            { validate: true },
        );
    },

    async down(queryInterface, Sequelize) {
        options.tableName = 'Spots';
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete(
            options,
            {
                name: {
                    [Op.in]: ['Spot 1', 'Spot 2', 'Spot 3', 'Spot 4', 'Spot 5', 'Spot 6', 'Spot 7'],
                },
            },
            {},
        );
    },
};
