import { envConfig } from "../config/env-config";

export function getFullApiUrl() {
  return `${envConfig.apiUrl}/${envConfig.apiVersion}`;
}
