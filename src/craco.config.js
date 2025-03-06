const CracoTranspileModulesPlugin = require('craco-plugin-transpile-modules');

module.exports = {
    plugins: [
        {
            plugin: CracoTranspileModulesPlugin,
            options: {
                modules: ['react-activity-calendar'],
            },
        },
    ],
};
