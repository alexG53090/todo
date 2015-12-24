exports.seed = function(knex, Promise) {
    return knex("tasks").del().then(function(){
        return Promise.all([
            knex("tasks").insert({
                task: "clean",
                complete: false,
                points: 2,
            }),
            knex("tasks").insert({
                task: "code",
                complete: true,
                points: 3,
            }),
            knex("tasks").insert({
                task: "rest",
                complete: false,
                points: 1,
            }),
        ]);
    });
};
