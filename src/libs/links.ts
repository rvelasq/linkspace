import yaml from 'js-yaml';
import type { LinksConfig } from '../types/config';


export async function loadLinksConfig(baseUrl: URL): Promise<LinksConfig> {
    const target = new URL('/links.yaml', baseUrl);
    const links = await fetch(target);
    const configFile = await links.text();
    return yaml.load(configFile) as LinksConfig;
}