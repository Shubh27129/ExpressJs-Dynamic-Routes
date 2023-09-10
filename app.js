const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const sequelize= require('./util/database')
const Product = require('./models/product');
const Users = require('./models/users');


var cors= require('cors')

const app = express();

app.use(cors())

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const bookappRoutes= require('./routes/bookappointment');
const expenseRoutes = require('./routes/expense');


app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    Users.findByPk(1)
      .then(users => {
        req.users = users;
        next();
      })
      .catch(err => console.log(err));
  });

app.use(express.json());
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use('/user',bookappRoutes)
app.use('/expense', expenseRoutes)



app.use(errorController.get404);

Product.belongsTo(Users, { constraints: true, onDelete: 'CASCADE' });
Users.hasMany(Product);

sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    return Users.findByPk(1);
     console.log(result);
  })
  .then(user => {
    if (!user) {
      return Users.create({ name: 'Max', email: 'test@test.com' });
    }
    return user;
  })
  .then(user => {
    // console.log(user);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });


