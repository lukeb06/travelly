'use strict';

const { ReviewImage } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
    async up(queryInterface, Sequelize) {
        await ReviewImage.bulkCreate(
            [
                {
                    reviewId: 1,
                    url: 'https://picsum.photos/300/200',
                },
                {
                    reviewId: 2,
                    url: 'https://picsum.photos/300/200',
                },
                {
                    reviewId: 3,
                    url: 'https://picsum.photos/300/200',
                },
                {
                    reviewId: 4,
                    url: 'https://picsum.photos/300/200',
                },
                {
                    reviewId: 5,
                    url: 'https://picsum.photos/300/200',
                },
                {
                    reviewId: 6,
                    url: 'https://picsum.photos/300/200',
                },
                {
                    reviewId: 7,
                    url: 'https://picsum.photos/300/200',
                },
                {
                    reviewId: 8,
                    url: 'https://picsum.photos/300/200',
                },
                {
                    reviewId: 9,
                    url: 'https://picsum.photos/300/200',
                },
                {
                    reviewId: 10,
                    url: 'https://picsum.photos/300/200',
                },
                {
                    reviewId: 11,
                    url: 'https://picsum.photos/300/200',
                },
                {
                    reviewId: 12,
                    url: 'https://picsum.photos/300/200',
                },
                {
                    reviewId: 13,
                    url: 'https://picsum.photos/300/200',
                },
                {
                    reviewId: 14,
                    url: 'https://picsum.photos/300/200',
                },
                {
                    reviewId: 15,
                    url: 'https://picsum.photos/300/200',
                },
                {
                    reviewId: 16,
                    url: 'https://picsum.photos/300/200',
                },
                {
                    reviewId: 17,
                    url: 'https://picsum.photos/300/200',
                },
                {
                    reviewId: 18,
                    url: 'https://picsum.photos/300/200',
                },
                {
                    reviewId: 19,
                    url: 'https://picsum.photos/300/200',
                },
                {
                    reviewId: 20,
                    url: 'https://picsum.photos/300/200',
                },
                {
                    reviewId: 21,
                    url: 'https://picsum.photos/300/200',
                },
            ],
            { validate: true },
        );
    },

    async down(queryInterface, Sequelize) {
        options.tableName = 'ReviewImages';
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete(
            options,
            {
                reviewId: {
                    [Op.in]: [
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
                    ],
                },
            },
            {},
        );
    },
};
