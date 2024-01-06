/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable("blog", (table) => {
            table.increments("id").primary();
            table.string("content", 2500).notNullable();
            table.string("image_url").notNullable();
            table.string("title").notNullable();
            table.timestamp("created_at").defaultTo(knex.fn.now());
            table
                .timestamp("updated_at")
                .defaultTo(
                    knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
                );
        })
        .createTable("comment", (table) => {
            table.increments("id").primary();
            table.string("name").notNullable();
            table.string("content", 500).notNullable();
            table
                .integer("blog_id")
                .unsigned()
                .references("blog.id")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.timestamp("created_at").defaultTo(knex.fn.now());
            table
                .timestamp("updated_at")
                .defaultTo(
                    knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
                );
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("blog").dropTable("comment");
};
