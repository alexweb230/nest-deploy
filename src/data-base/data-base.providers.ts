import { User } from 'src/user/user.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'appnest.mysql.tools',
        port: 3306,
        username: 'appnest_test',
        password: 'njCn(3;35Z',
        database: 'appnest_test',
        entities: [User],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
