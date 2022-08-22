import mongoose, { Connection } from 'mongoose';

export const MongooseHelper = {
  client: null as any,
  async connect(uri: string) {
    this.client = await mongoose.connect(uri);
    return this.client;
  },
  async getConnection(): Promise<Connection> {
    return mongoose.connection;
  },

  disconnect() {
    this.client = null;
    mongoose.connection.close();
  }
};
