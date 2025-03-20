'use strict';

const { SpotImage } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
    async up(queryInterface, Sequelize) {
        await SpotImage.bulkCreate(
            [
                {
                    spotId: 1,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 1,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 1,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 1,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 1,
                    url: 'https://picsum.photos/600/400',
                    preview: true,
                },
                {
                    spotId: 2,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 2,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 2,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 2,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 2,
                    url: 'https://picsum.photos/600/400',
                    preview: true,
                },
                {
                    spotId: 3,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 3,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 3,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 3,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 3,
                    url: 'https://picsum.photos/600/400',
                    preview: true,
                },
                {
                    spotId: 4,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 4,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 4,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 4,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 4,
                    url: 'https://picsum.photos/600/400',
                    preview: true,
                },
                {
                    spotId: 5,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 5,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 5,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 5,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 5,
                    url: 'https://picsum.photos/600/400',
                    preview: true,
                },
                {
                    spotId: 6,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 6,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 6,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 6,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 6,
                    url: 'https://picsum.photos/600/400',
                    preview: true,
                },
                {
                    spotId: 7,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 7,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 7,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 7,
                    url: 'https://picsum.photos/600/400',
                    preview: false,
                },
                {
                    spotId: 7,
                    url: 'https://picsum.photos/600/400',
                    preview: true,
                },
            ],
            { validate: true },
        );
    },

    async down(queryInterface, Sequelize) {
        options.tableName = 'SpotImages';
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete(
            options,
            {
                spotId: { [Op.in]: [1, 2, 3, 4, 5, 6, 7] },
            },
            {},
        );
    },
};
