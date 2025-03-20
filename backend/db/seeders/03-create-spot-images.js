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
                    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdwallpapers.in%2Fdownload%2Fmanhattan_skyline_new_york_city-1920x1200.jpg&f=1&nofb=1&ipt=f807020c19001bbbaf721de86a2509dfb53ca319dad545bef202927e4ea13093&ipo=images',
                    preview: false,
                },
                {
                    spotId: 1,
                    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F210000%2Fvelka%2Fnew-york-skyline-1489166213wpP.jpg&f=1&nofb=1&ipt=98c777ceb69a3f3d8ce585b86ec430e45734c8158c54693e153ee3afc7638706&ipo=images',
                    preview: false,
                },
                {
                    spotId: 1,
                    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa5%2F7b%2F87%2Fa57b875c538f3e1d4b3ee8db4a6ba466.jpg&f=1&nofb=1&ipt=f52ab294d0341ec2610b18bf369dc0fd3307b4915c7b9a99a631b25f70d7bfc6&ipo=images',
                    preview: false,
                },
                {
                    spotId: 1,
                    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.insidehook.com%2Fwp-content%2Fuploads%2F2022%2F09%2FGettyImages-1418077297.jpg%3Ffit%3D1200%252C742&f=1&nofb=1&ipt=591e06ab2e1833bc122e9d0177b19e999135c48f45fbc1ce951d5708294b0105&ipo=images',
                    preview: false,
                },
                {
                    spotId: 1,
                    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F09%2F809618-brooklyn-bridge-night-city-cities-urban-new-york-usa-america-travelling-lights-river-hudson-towers-nyc-landscape.jpg&f=1&nofb=1&ipt=5f2cff2872c3172f6aec570d3e285d6d4dca95c568182b12d6eac08e1b0fba64&ipo=images',
                    preview: true,
                },
                {
                    spotId: 2,
                    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgotravelcalifornia.com%2Fwp-content%2Fuploads%2F2022%2F08%2Flos-angeles-attractions-feature.jpg&f=1&nofb=1&ipt=580163fa32563996e1eba5b21e99202e2d5e30c5c36e2c8df0b134038c50fc7b&ipo=images',
                    preview: false,
                },
                {
                    spotId: 2,
                    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages%2Fartworkimages%2Fmediumlarge%2F2%2F3-aerial-downtown-los-angeles-at-night-adamkaz.jpg&f=1&nofb=1&ipt=fd72afc21fe7d092a2d9b4cd78786af4ec5924930de0d638b3eae7e663f4c73d&ipo=images',
                    preview: false,
                },
                {
                    spotId: 2,
                    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fa.cdn-hotels.com%2Fgdcs%2Fproduction48%2Fd1624%2Fffac64d6-c429-4b20-966a-66503859ee85.jpg&f=1&nofb=1&ipt=22fe4ed98de8aeeca4ff1b5bc01eedb3135c992844c5008705dcb09d91af09f9&ipo=images',
                    preview: false,
                },
                {
                    spotId: 2,
                    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftravelnotesandbeyond.com%2Fwp-content%2Fuploads%2F2021%2F01%2FDowntown-L.A-2.jpg&f=1&nofb=1&ipt=6dec0f21bfb67c114bd438e7da574859fae3e30d01e42e203a6329b238399581&ipo=images',
                    preview: false,
                },
                {
                    spotId: 2,
                    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftwomonkeystravelgroup.com%2Fwp-content%2Fuploads%2F2019%2F10%2FThings-To-Do-in-Los-Angeles-California1.jpg&f=1&nofb=1&ipt=7ec97e0d464d1a3ca360eb29d7ae0ff4cb4b49ad39de0cee18daad33c12c29ea&ipo=images',
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
