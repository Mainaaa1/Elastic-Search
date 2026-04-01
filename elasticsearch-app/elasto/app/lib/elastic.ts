import { Client } from '@elastic/elasticsearch';

const url = process.env.ELASTIC_URL;
const username = process.env.ELASTIC_USERNAME;
const password = process.env.ELASTIC_PASSWORD;

if (!url || !username || !password) {
  throw new Error('Elasticsearch environment variables are not set');
}

export const client = new Client({
  node: url,
  auth: {
    username,
    password,
  },
});