'use strict';

const { Booking } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
    async up(queryInterface, Sequelize) {
        await Booking.bulkCreate(
            [
                {
                    spotId: 2,
                    userId: 1,
                    startDate: new Date(2025, 3, 4),
                    endDate: new Date(2025, 3, 10),
                },
                {
                    spotId: 2,
                    userId: 2,
                    startDate: new Date(2025, 3, 12),
                    endDate: new Date(2025, 3, 15),
                },
                {
                    spotId: 1,
                    userId: 3,
                    startDate: new Date(2025, 4, 4),
                    endDate: new Date(2025, 4, 10),
                },
                {
                    spotId: 1,
                    userId: 2,
                    startDate: new Date(2025, 4, 12),
                    endDate: new Date(2025, 4, 15),
                },
                {
                    spotId: 3,
                    userId: 2,
                    startDate: new Date(2025, 5, 4),
                    endDate: new Date(2025, 5, 10),
                },
                {
                    spotId: 3,
                    userId: 3,
                    startDate: new Date(2025, 5, 12),
                    endDate: new Date(2025, 5, 15),
                },
            ],
            { validate: true },
        );
    },

    async down(queryInterface, Sequelize) {
        options.tableName = 'Bookings';
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete(
            options,
            {
                spotId: { [Op.in]: [1, 2, 3] },
            },
            {},
        );
    },
};
