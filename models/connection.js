const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://admin:AdminPwd@cluster0.z2pamot.mongodb.net/miniuno';

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch((error) => console.error(error));
