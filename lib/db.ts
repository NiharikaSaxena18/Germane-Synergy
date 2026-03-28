import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

export function readData<T>(file: string): T[] {
  const filePath = path.join(dataDir, `${file}.json`);
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

export function writeData<T>(file: string, data: T[]): void {
  const filePath = path.join(dataDir, `${file}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}