export interface IRedisConfiguation {
  readonly prefix?: string;
  readonly connection: {
    host: string;
    port: number;
    name?: string;
    password?: string;
  };
}
