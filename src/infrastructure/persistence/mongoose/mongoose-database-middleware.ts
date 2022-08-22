import { MongooseHelper } from './mongoose-helper';

export const MongooseDatabaseMiddleware = () => {
  return {
    before: async () => {
      const connection = await MongooseHelper.getConnection();
      if (connection.readyState) {
        return;
      }
      return await MongooseHelper.connect(process.env.MONGODB_URI as string)
        .then(() => {
          console.log('Database connected');
          return;
        })
        .catch((error: any) => {
          throw new Error(error);
        });
    }
  };
};
