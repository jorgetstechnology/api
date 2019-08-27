
module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log(`ApiRest = porta ${app.get("port")}`);
    });
}