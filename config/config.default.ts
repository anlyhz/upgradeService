'use strict';

import { EggAppConfig, PowerPartial } from 'egg';

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

// app special config scheme
export interface BizConfig {
  sourceUrl: string;
  news: {
    pageSize: number;
    serverUrl: string;
  };
}

export default (appInfo: EggAppConfig) => {
  const config = {} as PowerPartial<EggAppConfig> & BizConfig;

  config.keys = appInfo.name + '123456';

  config.io = {
    init: { }, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: ['auth'],
        packetMiddleware: [],
      },
    }
  };

  config.cluster = {
    listen: {
      port: 7001
    }
  }

  return config;
};
