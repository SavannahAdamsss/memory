
// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };

exports.seed =
function (knex, Promise) {
  return knex("resolution").del().then(() => {
    return knex("resolution").insert([{
      id: 1,
      dueDate: "1997-02-01",
      resolution: "Go skiing"
    }, {
      id: 2,
      dueDate: "1997-05-01",
      resolution: "Do stand-up"
    }, {
      id: 3,
      dueDate: "1997-09-01",
      resolution: "Start knitting"
    }]);
  }).then(() => {
    return knex.raw("ALTER SEQUENCE resolution_id_seq RESTART WITH 4;")
  })

}
