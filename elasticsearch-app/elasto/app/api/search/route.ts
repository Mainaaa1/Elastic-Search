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
      ? { match: { name: q } }  
      : { match_all: {} },       
    size: 100, 
  });

  const hits = result.hits.hits.map((hit) => ({
    id: hit._id,
    ...(hit._source as Product),
  }));

  return NextResponse.json(hits);
}