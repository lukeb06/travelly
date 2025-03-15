'use strict';

const { Review } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
    async up(queryInterface, Sequelize) {
        await Review.bulkCreate(
            [
                {
                    spotId: 1,
                    userId: 5,
                    review: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Nisl egestas posuere; feugiat dictum nam semper morbi dis scelerisque. At praesent dapibus rutrum lobortis class, tellus feugiat rutrum. Vitae consequat ligula sociosqu curabitur diam justo.',
                    stars: 3,
                },

                {
                    spotId: 1,
                    userId: 3,
                    review: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Tempus nisl tempus fringilla congue lectus massa litora ligula. Vel aenean maecenas amet sollicitudin pharetra mi curabitur non sociosqu? Purus tempus sollicitudin turpis fames tempor nisl nibh imperdiet.',
                    stars: 4,
                },
                {
                    spotId: 1,
                    userId: 4,
                    review: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Litora molestie ante ante porta rhoncus. Finibus tempus duis aliquam nisi curabitur proin! Augue aptent nullam consequat tempor finibus lacinia in sollicitudin. Maecenas erat a molestie non hendrerit rhoncus. Nulla quam interdum purus mollis pretium lacinia torquent ullamcorper ut.',
                    stars: 2,
                },
                {
                    spotId: 2,
                    userId: 3,
                    review: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida curae mi ligula mauris nam. Montes ridiculus eleifend suspendisse curae posuere mus auctor fermentum. Tempor vestibulum quisque class sed finibus. Condimentum nam suspendisse malesuada montes in; ligula penatibus duis. Varius ultricies id eget nisl justo a fames fusce.',
                    stars: 1,
                },
                {
                    spotId: 2,
                    userId: 6,
                    review: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Eu dui laoreet arcu nunc dictum felis dis eleifend. Natoque adipiscing suscipit a netus varius. Donec imperdiet curae id lectus fermentum blandit libero facilisi natoque.',
                    stars: 5,
                },
                {
                    spotId: 2,
                    userId: 1,
                    review: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Dignissim mauris efficitur nam viverra etiam enim tempus maximus. Fermentum malesuada interdum tristique commodo dictumst curae magnis. Consectetur vestibulum maximus sem at accumsan sodales.',
                    stars: 4,
                },
                {
                    spotId: 3,
                    userId: 4,
                    review: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Pretium eros vehicula congue tristique purus vitae fusce himenaeos ridiculus. Auctor nec lacus phasellus litora nec tellus eget. Platea inceptos parturient hendrerit hac dis mi.',
                    stars: 3,
                },
                {
                    spotId: 3,
                    userId: 2,
                    review: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Sagittis himenaeos tortor pellentesque nam augue a parturient. Commodo arcu lectus efficitur nascetur molestie vel non dictum justo. Sodales pretium montes massa tempus urna ullamcorper suscipit velit.',
                    stars: 4,
                },
                {
                    spotId: 3,
                    userId: 7,
                    review: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Aenean libero ridiculus magna tortor porta justo posuere. Suscipit consequat eget sed inceptos et commodo pellentesque id. Platea ac ultrices etiam interdum natoque elit ad; ultricies purus. Vel donec ac vel penatibus nunc luctus convallis sollicitudin. Nulla nunc parturient natoque dictumst nisl nunc dapibus consequat. Interdum dis rutrum efficitur ut fringilla malesuada sagittis.',
                    stars: 1,
                },
                {
                    spotId: 4,
                    userId: 1,
                    review: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti orci nam montes tortor est sit. Aptent taciti mauris nisl est tristique feugiat vulputate facilisis. Quis accumsan at faucibus pulvinar eu, consectetur volutpat.',
                    stars: 4,
                },
                {
                    spotId: 4,
                    userId: 5,
                    review: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Hac dolor laoreet scelerisque ullamcorper iaculis fames laoreet convallis. Massa sollicitudin luctus ad adipiscing ac gravida faucibus curabitur feugiat.',
                    stars: 3,
                },
                {
                    spotId: 4,
                    userId: 6,
                    review: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Nec mus fames facilisi primis potenti curabitur. Vehicula nibh diam platea volutpat ad iaculis libero suscipit lectus. Erat lacus maximus montes dictum accumsan molestie. Senectus lobortis morbi potenti fermentum sagittis sollicitudin. Consequat platea nisi curabitur ante curabitur. Suscipit etiam fames dignissim lobortis, integer conubia mus.',
                    stars: 1,
                },
                {
                    spotId: 5,
                    userId: 5,
                    review: 'Lorem ipsum odor amet, consectetuer adipiscing elit. At nascetur suspendisse dictum ornare iaculis ligula elit congue cubilia. Primis pulvinar vitae urna porta diam taciti nostra leo ipsum. Netus nunc vestibulum pretium class viverra viverra hendrerit ante. Convallis auctor est porta litora pellentesque cras nam.',
                    stars: 2,
                },
                {
                    spotId: 5,
                    userId: 4,
                    review: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia dictum ornare aenean convallis sit nisi. Proin non nec convallis lacinia dapibus magnis himenaeos. Purus at nam netus tempor ligula sociosqu.',
                    stars: 3,
                },
                {
                    spotId: 5,
                    userId: 2,
                    review: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies quis suscipit rhoncus pulvinar netus. Turpis dictumst cras finibus dignissim et posuere malesuada scelerisque bibendum. Viverra sodales dolor varius habitant leo sem feugiat.',
                    stars: 3,
                },
                {
                    spotId: 6,
                    userId: 3,
                    review: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie dignissim ultricies fermentum faucibus blandit suspendisse. Magna varius phasellus pretium per consectetur praesent faucibus morbi. Ultrices primis arcu arcu elit dolor non viverra. Id ac iaculis maecenas augue ornare. Urna parturient penatibus mauris imperdiet et hac rhoncus rutrum sollicitudin.',
                    stars: 3,
                },
                {
                    spotId: 6,
                    userId: 1,
                    review: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Odio rutrum ultrices bibendum nulla ligula auctor sodales. Fames fermentum pulvinar luctus; curabitur dapibus tempus conubia. Sem sollicitudin mauris pulvinar pellentesque faucibus commodo tempor elit. Aptent gravida lectus magna rutrum tempor. Tincidunt habitant semper nam phasellus lacus elementum sollicitudin posuere euismod. Nunc urna augue ridiculus proin sit.',
                    stars: 4,
                },
                {
                    spotId: 6,
                    userId: 7,
                    review: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Auctor sapien cursus taciti at diam porta. Viverra cubilia ipsum dapibus porttitor inceptos sagittis feugiat commodo. Suspendisse dignissim placerat primis tempus nam dis rutrum. Maximus leo amet tincidunt sapien sociosqu, sodales blandit in. Quis sodales neque curabitur ut rutrum eu habitasse.',
                    stars: 4,
                },
                {
                    spotId: 7,
                    userId: 3,
                    review: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere id sem euismod, proin lectus proin sit. Elit sit ligula et urna curabitur nascetur. Magnis hendrerit ante libero magnis senectus luctus ac ridiculus ac. Per tristique leo aliquet feugiat cursus.',
                    stars: 4,
                },
                {
                    spotId: 7,
                    userId: 5,
                    review: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Massa odio purus dignissim volutpat morbi enim vehicula cubilia hendrerit. Taciti fermentum conubia a suspendisse dui sagittis elementum porttitor eros.',
                    stars: 1,
                },
                {
                    spotId: 7,
                    userId: 3,
                    review: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Dis integer ad tempor magnis quisque, tristique himenaeos. Id congue mauris ornare tincidunt etiam. Libero tempus eros integer elit montes. Torquent efficitur vitae etiam placerat, sollicitudin ex facilisi ullamcorper et.',
                    stars: 3,
                },
            ],
            { validate: true },
        );
    },

    async down(queryInterface, Sequelize) {
        options.tableName = 'Reviews';
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
