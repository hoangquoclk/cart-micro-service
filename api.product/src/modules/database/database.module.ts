import { Global, Module } from '@nestjs/common';

import { DatabaseService } from '@modules/database/services/database.service';

@Global()
@Module({
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
