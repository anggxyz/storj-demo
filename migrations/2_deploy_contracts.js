var StorjDemoToken = artifacts.require ("StorjDemoToken");

module.exports = function (deployer) {
    deployer.deploy (
        StorjDemoToken,
        1000000,
        2,
        "Storj Demo",
        "STRJDMO"
    );
};