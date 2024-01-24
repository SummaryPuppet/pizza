/// <reference path="../types/types.d.ts" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      HOST: string;
      JWT_KEY: string;
    }
  }
  namespace Express {
    interface User {
      id: number;
    }
  }
}
