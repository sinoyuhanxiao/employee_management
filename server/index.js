const { NestFactory } = require('@nestjs/core');
const { DatabaseModule } = require('./dist/database.module');
const cors = require('cors');

// Define async bootstrap function
async function bootstrap() {
  const app = await NestFactory.create(DatabaseModule);
  app.use(cors()); // Add cors middleware

  // Start listening on port 8080
  await app.listen(8080);
  console.log('Server started on port 8080');
}

// start the server
bootstrap();