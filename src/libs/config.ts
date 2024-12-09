import yaml from 'js-yaml';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import type { LinksConfig } from '../types/config';


export function getConfig(): LinksConfig {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const configPath = join(__dirname, '../config/links.yaml');
    const configFile = readFileSync(configPath, 'utf8');
    return yaml.load(configFile) as LinksConfig;
}