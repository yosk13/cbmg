import {DefaultCrudRepository} from '@loopback/repository';
import {Employee, EmployeeRelations} from '../models';
import {CmbgdataDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EmployeeRepository extends DefaultCrudRepository<
  Employee,
  typeof Employee.prototype._id,
  EmployeeRelations
> {
  constructor(
    @inject('datasources.cmbgdata') dataSource: CmbgdataDataSource,
  ) {
    super(Employee, dataSource);
  }
}
