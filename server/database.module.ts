import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { EmployeeController } from './employee.controller'

/**
 * The `DatabaseModule` provides configuration and registration for the TypeORM module, which handles
 * connection and communication with the SQLite database storing employee data.
 *
 * Uses the `@nestjs/typeorm` package to configure the SQLite database connection and entity
 * synchronization. The `TypeOrmModule.forRoot` method sets up the database connection and entity
 * definitions, while `TypeOrmModule.forFeature` registers the `Employee` entity with the database.
 *
 * The `EmployeeController` is also registered with this module, allowing the database to be queried
 * and updated via HTTP requests.
 *
 * Note that logging is enabled by default for this module, which can be useful for debugging and
 * troubleshooting. 
 */

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'employees.db',
      entities: [Employee],
      synchronize: true,
      autoLoadEntities: true, 
      logging: true // enable logging
    }),
    TypeOrmModule.forFeature([Employee]), // <-- register Employee repository
  ],
  controllers: [
    EmployeeController,
  ]
})
export class DatabaseModule {
  constructor() {
    console.log('DatabaseModule initialized');
  }
}

