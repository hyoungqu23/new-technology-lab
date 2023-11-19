import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
  const productList = [
    { id: 'a', name: 'Monitor', price: 100 },
    { id: 'b', name: 'iPad', price: 450 },
    { id: 'c', name: 'Keyboard', price: 30 },
    { id: 'd', name: 'Cable', price: 10 },
  ];

  return NextResponse.json(productList);
};
