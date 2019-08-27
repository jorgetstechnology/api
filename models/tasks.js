module.exports = app => {
    return{
        findAll:(params, callback) => {
            return callback([
                {tile: "Compras"},
                {title: "Conserto"},

            ]);
        }
    };
};