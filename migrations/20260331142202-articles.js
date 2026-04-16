// eslint-disable-next-line @typescript-eslint/no-require-imports
const articles = require('./articlesDatabase.json');

module.exports = {

  async up(db) {
    await db.collection('articles').insertMany(articles);
},

  async down(db) {
    // TODO write the statements to rollback your migration (if possible)
    }
};
