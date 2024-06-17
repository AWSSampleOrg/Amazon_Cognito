/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USER_POOL_ID: string;
  readonly VITE_APP_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
