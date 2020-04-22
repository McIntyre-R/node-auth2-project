
exports.up = function(knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('user_name', 10)
                .notNullable()
                .unique();
            tbl.string('password', 20)
                .notNullable()
                .unique();
            tbl.string('department', 255)
                .notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
};
