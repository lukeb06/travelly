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
                    url: 'https://picsum.photos/601/400',
                    preview: false,
                },
                {
                    spotId: 1,
                    url: 'https://picsum.photos/600/401',
                    preview: false,
                },
                {
                    spotId: 1,
                    url: 'https://picsum.photos/601/401',
                    preview: false,
                },
                {
                    spotId: 1,
                    url: 'https://picsum.photos/602/400',
                    preview: true,
                },
                {
                    spotId: 2,
                    url: 'https://picsum.photos/600/402',
                    preview: false,
                },
                {
                    spotId: 2,
                    url: 'https://picsum.photos/602/402',
                    preview: false,
                },
                {
                    spotId: 2,
                    url: 'https://picsum.photos/603/400',
                    preview: false,
                },
                {
                    spotId: 2,
                    url: 'https://picsum.photos/600/403',
                    preview: false,
                },
                {
                    spotId: 2,
                    url: 'https://picsum.photos/603/403',
                    preview: true,
                },
                {
                    spotId: 3,
                    url: 'https://picsum.photos/604/400',
                    preview: false,
                },
                {
                    spotId: 3,
                    url: 'https://picsum.photos/600/404',
                    preview: false,
                },
                {
                    spotId: 3,
                    url: 'https://picsum.photos/604/404',
                    preview: false,
                },
                {
                    spotId: 3,
                    url: 'https://picsum.photos/605/400',
                    preview: false,
                },
                {
                    spotId: 3,
                    url: 'https://picsum.photos/600/405',
                    preview: true,
                },
                {
                    spotId: 4,
                    url: 'https://picsum.photos/605/405',
                    preview: false,
                },
                {
                    spotId: 4,
                    url: 'https://picsum.photos/606/400',
                    preview: false,
                },
                {
                    spotId: 4,
                    url: 'https://picsum.photos/600/406',
                    preview: false,
                },
                {
                    spotId: 4,
                    url: 'https://picsum.photos/606/406',
                    preview: false,
                },
                {
                    spotId: 4,
                    url: 'https://picsum.photos/607/400',
                    preview: true,
                },
                {
                    spotId: 5,
                    url: 'https://picsum.photos/600/407',
                    preview: false,
                },
                {
                    spotId: 5,
                    url: 'https://picsum.photos/607/407',
                    preview: false,
                },
                {
                    spotId: 5,
                    url: 'https://picsum.photos/608/400',
                    preview: false,
                },
                {
                    spotId: 5,
                    url: 'https://picsum.photos/600/408',
                    preview: false,
                },
                {
                    spotId: 5,
                    url: 'https://picsum.photos/608/408',
                    preview: true,
                },
                {
                    spotId: 6,
                    url: 'https://picsum.photos/609/400',
                    preview: false,
                },
                {
                    spotId: 6,
                    url: 'https://picsum.photos/600/409',
                    preview: false,
                },
                {
                    spotId: 6,
                    url: 'https://picsum.photos/609/409',
                    preview: false,
                },
                {
                    spotId: 6,
                    url: 'https://picsum.photos/610/400',
                    preview: false,
                },
                {
                    spotId: 6,
                    url: 'https://picsum.photos/600/410',
                    preview: true,
                },
                {
                    spotId: 7,
                    url: 'https://picsum.photos/610/410',
                    preview: false,
                },
                {
                    spotId: 7,
                    url: 'https://picsum.photos/611/400',
                    preview: false,
                },
                {
                    spotId: 7,
                    url: 'https://picsum.photos/600/411',
                    preview: false,
                },
                {
                    spotId: 7,
                    url: 'https://picsum.photos/611/411',
                    preview: false,
                },
                {
                    spotId: 7,
                    url: 'https://picsum.photos/612/400',
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
