'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(
            'SpotImages',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER,
                },
                spotId: {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Spots',
                    },
                    onDelete: 'CASCADE',
                },
                url: {
                    type: Sequelize.STRING(250),
                    allowNull: false,
                },
                preview: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
                },
                createdAt: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                },
                updatedAt: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                },
            },
            options,
        );
    },

    async down(queryInterface, Sequelize) {
        options.tableName = 'SpotImages';
        return queryInterface.dropTable(options);
    },
};
