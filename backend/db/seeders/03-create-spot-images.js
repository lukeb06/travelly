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
                    url: 'https://media.timeout.com/images/105375857/image.jpg',
                    preview: false,
                },
                {
                    spotId: 1,
                    url: 'https://wallup.net/wp-content/uploads/2019/10/633191-new-york-usa-manhattan-empire-state-building-new-york-usa-skyscrapers-buildings-lights-sky-clouds-night-sunset-twilight-city-1.jpg',
                    preview: false,
                },
                {
                    spotId: 1,
                    url: 'https://static01.nyt.com/images/2012/05/06/nyregion/06BIG_SPAN/BIG-superJumbo.jpg',
                    preview: false,
                },
                {
                    spotId: 1,
                    url: 'https://lovingnewyork.com.br/wp-content/uploads/2015/05/o-que-fazer-em-Nova-York-161004120416001.jpg',
                    preview: false,
                },
                {
                    spotId: 1,
                    url: 'https://www.wallpaperflare.com/static/508/869/204/new-york-city-landscape-empire-state-wallpaper.jpg',
                    preview: true,
                },
                {
                    spotId: 2,
                    url: 'https://cdn.britannica.com/40/94540-050-789B2064/Palm-trees-skyline-Los-Angeles-background.jpg',
                    preview: false,
                },
                {
                    spotId: 2,
                    url: 'https://a.cdn-hotels.com/gdcs/production9/d1044/3f257bf0-8f10-11e8-b6b0-0242ac110007.jpg',
                    preview: false,
                },
                {
                    spotId: 2,
                    url: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/475000/475457-Los-Angeles.jpg',
                    preview: false,
                },
                {
                    spotId: 2,
                    url: 'https://cdn.wallpapersafari.com/9/23/2tIby9.jpg',
                    preview: false,
                },
                {
                    spotId: 2,
                    url: 'https://a.cdn-hotels.com/gdcs/production186/d422/2a4bbf5b-c812-4cf8-8737-e351cccfd260.jpg',
                    preview: true,
                },
                {
                    spotId: 3,
                    url: 'https://www.wallpapers-full-hd.com/backgrounds/town-night-river-panorama-bridge.jpg',
                    preview: false,
                },
                {
                    spotId: 3,
                    url: 'https://secretchicago.com/wp-content/uploads/2022/09/Summer-sunset-Chicago-scaled.jpg',
                    preview: false,
                },
                {
                    spotId: 3,
                    url: 'https://media.timeout.com/images/103170852/image.jpg',
                    preview: false,
                },
                {
                    spotId: 3,
                    url: 'https://cdn.wallpapersafari.com/48/80/8VEj2S.jpg',
                    preview: false,
                },
                {
                    spotId: 3,
                    url: 'https://cdn1.matadornetwork.com/blogs/1/2022/07/cloud-gate-chicago-sunset.jpg',
                    preview: true,
                },
                {
                    spotId: 4,
                    url: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/houston/Houston_SKyline_e91e6bde-25f8-4525-93b6-0fe4c9f79307.jpg',
                    preview: false,
                },
                {
                    spotId: 4,
                    url: 'https://www.tripsavvy.com/thmb/5WRhxnOeJfe6F9d8vX48NXFAaUw=/2123x1412/filters:fill(auto,1)/houston-downtown-aerial-at-sunset--angled-view-with-highway-1202397435-f07619a1951e409b9709c4578e408aab.jpg',
                    preview: false,
                },
                {
                    spotId: 4,
                    url: 'https://a.cdn-hotels.com/gdcs/production160/d978/e833a409-9682-46b9-8ab1-5f3e2ef7f4e7.jpg',
                    preview: false,
                },
                {
                    spotId: 4,
                    url: 'https://media.timeout.com/images/105885490/image.jpg',
                    preview: false,
                },
                {
                    spotId: 4,
                    url: 'https://www.tripsavvy.com/thmb/akRvd35Sr6wGOdlKoLV983Zy1oY=/2119x1414/filters:no_upscale():max_bytes(150000):strip_icc()/houston--texas--usa-1144807482-ce6f88373d524057aa1b3f0d62dfd390.jpg',
                    preview: true,
                },
                {
                    spotId: 5,
                    url: 'https://media.timeout.com/images/105124787/image.jpg',
                    preview: false,
                },
                {
                    spotId: 5,
                    url: 'https://wallpaperaccess.com/full/3575629.jpg',
                    preview: false,
                },
                {
                    spotId: 5,
                    url: 'https://www.worldatlas.com/upload/34/95/6f/shutterstock-217213000.jpg',
                    preview: false,
                },
                {
                    spotId: 5,
                    url: 'https://wallpaperaccess.com/full/1473216.jpg',
                    preview: false,
                },
                {
                    spotId: 5,
                    url: 'https://lp-cms-production.imgix.net/2019-06/1da32e09c1497a907cda4479049e6b2b-denver.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4',
                    preview: true,
                },
                {
                    spotId: 6,
                    url: 'https://cdn.advantagestorage.net/wp-content/uploads/2022/11/Downtown-Phoenix-Skyline-1200x805.jpg',
                    preview: false,
                },
                {
                    spotId: 6,
                    url: 'https://www.tripsavvy.com/thmb/BS2_bGMEJ7RZZQEFx5bCz3FByck=/2122x1413/filters:fill(auto,1)/GettyImages-1138165502-1daa3ff05ff54d2dadb274ae52c27f14.jpg',
                    preview: false,
                },
                {
                    spotId: 6,
                    url: 'https://lp-cms-production.imgix.net/2021-04/MFT46K.jpg?auto=format&q=75&w=1920',
                    preview: false,
                },
                {
                    spotId: 6,
                    url: 'https://clubadventures.com/wp-content/uploads/2022/02/Downtown-Phoenix-Skyline-from-Phoenix-Mountains-Preserve.jpg',
                    preview: false,
                },
                {
                    spotId: 6,
                    url: 'https://www.propeterra.com/hubfs/148e5282_6056_4aca_9135_d0d5f25e9a9d_df00ab2b-7f9c-462e-a8a7-903f8757870e.jpg',
                    preview: true,
                },
                {
                    spotId: 7,
                    url: 'https://3.bp.blogspot.com/-1ckk-co5o5Y/USUGw4m6PuI/AAAAAAAA3mo/efHw0UO9pbo/s1600/El-Puente-Golden-Gate-San+Francisco-en-la-Noche-California-USA.jpg',
                    preview: false,
                },
                {
                    spotId: 7,
                    url: 'https://www.tripsavvy.com/thmb/O_llFoTsBqEnjr3TwZitD03bU6k=/3500x2335/filters:fill(auto,1)/beautiful-view-of--business-center-in-downtown-san-francisco-1130838109-29a92045d48649d6a334ef9d92cae0ac.jpg',
                    preview: false,
                },
                {
                    spotId: 7,
                    url: 'https://www.widest.com/wp-content/uploads/San-Francisco-California-skyline.jpg',
                    preview: false,
                },
                {
                    spotId: 7,
                    url: 'https://www.tripsavvy.com/thmb/nWJIzv7V4sJ5XBPQ48W-j9oM12o=/4925x3283/filters:fill(auto,1)/breathtaking-sunset-over-san-francisco--california--usa-809715958-5acb9aecba617700362fbb3a.jpg',
                    preview: false,
                },
                {
                    spotId: 7,
                    url: 'https://fthmb.tqn.com/poEG8oqqLqxyF3vyD7KWttwlD4Y=/3865x2576/filters:fill(auto,1)/aerial-view-san-francisco-594572819-598f9b8e9abed5001082488e.jpg',
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
