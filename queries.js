const database = require("./database-connection");

module.exports = {

    read(id) {
        return database('resolution')
            .where("id", id)
            .first()

    },
    list() {
        return database('resolution')
    },
    create(resolution) {
        return database('resolution')
            .insert(resolution)
            .returning('*')
            .then(object => object[0])


    },
    update(id, resolution) {
        console.log(id, resolution)
        return database('resolution')
            .where("id", id)
            .update(resolution)


    },
    delete(id) {
        return database('resolution')
            .delete()
            .where("id", id)
    }
}
