interface Config {
  host?: string;
  port?: number;
  ssl?: boolean;
  timeout?: number;
}

type CompleteConfig = Required<Config>;
// 결과: { host: string; port: number; ssl: boolean; timeout: number }

function initializeConfig(config: Config): CompleteConfig {
  return {
    host: config.host ?? "localhost",
    port: config.port ?? 3000,
    ssl: config.ssl ?? false,
    timeout: config.timeout ?? 5000,
  };
}

console.log(initializeConfig({ port: 4000 }));
// 출력: { host: 'localhost', port: 4000, ssl: false, timeout: 5000 }
