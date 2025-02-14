import mongoose from 'mongoose';
import config from './config';
import app from './app';
// const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.prot, () => {
      console.log(`Example app listening on port ${config.prot}`);
    });
  } catch (error) {
    console.log(error);
  }
}

// console.log(config)

main()