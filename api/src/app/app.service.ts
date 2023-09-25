import { Injectable } from '@nestjs/common';
import { MasterService } from 'src/master/master.service';
import { DatabaseConnection } from './app.database';
// import { fs } from 'fs';

@Injectable()
export class AppService {
  constructor(private readonly databaseConnection: DatabaseConnection, private readonly masterService: MasterService) {
    this.databaseConnection.connect();
    // this.masterService.updateCategoryCounts();
    // this.masterService.updatePastEvents()
  }

  async dropDatabase() {
    await this.databaseConnection.dropDatabase();
  }
}
