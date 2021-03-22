const path = require('path'); // Helps with routing
const express = require('express'); // Allowing us to use express
const session = require('express-session'); // Allowing us to use session
const exphbs = require('express-handlebars'); // Allowing us to use handlebars
const routes = require('./controllers'); // Connecting routes to server
// const helpers = require('./utils/helpers'); // Connecting helpers

const sequelize = require('./config/connection'); // Connecting sequelize info to allow server to connect
const SequelizeStore = require('connect-session-sequelize')(session.Store); // Allowing us to use connect-session-sequelize

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});