interface EnvWindow extends Window {
  env: {
    API_URL: string;
  };
}

declare const window: EnvWindow;

export const endpoint = window.env.API_URL || 'http://localhost:3000';
