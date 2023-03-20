import { Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Controller()
export class EmployeeController {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {
    console.log('EmployeeController instantiated');
  }

  /**
   * Retrieves all employees from the database.
   *
   * @returns {Promise<Employee[]>} List of employees.
   */
  @Get('employees')
  async findAll(): Promise<Employee[]> {
    console.log('findAll() called');
    return this.employeeRepository.find();
  }

  /**
   * Retrieves a single employee from the database based on the specified ID.
   *
   * @param {string} id - The ID of the employee to retrieve.
   * @returns {Promise<Employee>} The employee with the specified ID.
   */
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Employee> {
    console.log(`findOne() called for id ${id}`);
    return this.employeeRepository.findOne({ where: { id: parseInt(id) }});
  }

  /**
   * Removes an employee from the database based on the specified ID.
   *
   * @param {string} id - The ID of the employee to remove.
   * @returns {Promise<void>} A promise that resolves once the employee has been removed.
   */
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    console.log(`remove() called for id ${id}`);
    await this.employeeRepository.delete(id);
  }

  /**
   * Updates an employee in the database based on the specified ID.
   *
   * @param {string} id - The ID of the employee to update.
   * @param {Employee} employee - The updated employee object.
   * @returns {Promise<Employee>} The updated employee object.
   */
  @Put(':id')
  async update(@Param('id') id: string, @Body() employee: Employee): Promise<Employee> {
    console.log(`update() called for id ${id}`);
    await this.employeeRepository.update(id, employee);
    return this.employeeRepository.findOne({ where: { id: parseInt(id) }});
  }

   /**
   * Adds a new employee to the database.
   *
   * @param {Employee} employee - The new employee to add.
   * @returns {Promise<Employee>} The newly created employee object.
   */
  @Post()
  async create(@Body() employee: Employee): Promise<Employee> {
    console.log(`create() called`);
    return this.employeeRepository.save(employee);
  }
}
