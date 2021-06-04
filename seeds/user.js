const { User } = require('../models');

const userData =
[
  {
    "username": "leonis",
    "first_name": "Leon",
    "last_name": "Hsu",
    "email": "leonhsu95@gmail.com",
    "password": "admin"
  },
  {
    "username": "saladtini",
    "first_name": "Sal",
    "last_name": "Lernantino",
    "email": "lernantino@hotmail.com",
    "password": "password12345"
  },
  {
    "username": "zaconium",
    "first_name": "Zac",
    "last_name": "Li",
    "email": "zli0@gmail.com",
    "password": "zacPW1234"
  },
  {
    "username": "amiChopsticks",
    "first_name": "Amiko",
    "last_name": "Hashimoto",
    "email": "amiko@yahoo.com",
    "password": "password12345"
  },
  {
    "username": "DallioHax",
    "first_name": "Art",
    "last_name": "Sangdao",
    "email": "dalliohax0@gmail.com",
    "password": "dHaxer9519"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
