import { client } from '@/app/lib/elastic';
import { NextResponse } from 'next/server';

type Product = {
  name: string;
  category: string;
  price: number;
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q')?.trim();

  const result = await client.search({
    index: 'products',
    query: q
      ? { match: { name: q } }  // search by name if query exists
      : { match_all: {} },       // list all products if query is empty
    size: 100, // increase if you have more than 10 products
  });

  const hits = result.hits.hits.map((hit) => ({
    id: hit._id,
    ...(hit._source as Product),
  }));

  return NextResponse.json(hits);
}