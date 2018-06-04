
// exports.up = function(knex, Promise) {
  
// };

// exports.down = function(knex, Promise) {
  
// };

exports.up = function (knex, Promise) {
    
        return knex.schema.createTable('resolution', (table) => {
            table.increments('id')
            table.date('dueDate')
            table.string('resolution')
        })
    
    };
    
    exports.down = function (knex, Promise) {
    
        return knex.schema.dropTableIfExists('resolution')
    
    };
