const User = require('./User');
const Blogposts = require('./Blogposts');

User.hasMany(Blogposts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blogposts.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Blogposts };
