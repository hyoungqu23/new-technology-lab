'use client';

import React, { useEffect } from 'react';
import { z } from 'zod';

const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number().positive(),
});

const productsSchema = z.array(productSchema);

const ProductPage = () => {
  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((products) => {
        const validatedProducts = productsSchema.safeParse(products);

        if (!validatedProducts) {
          console.error(validatedProducts);
        }
      });
  }, []);

  return <div>ProductPage</div>;
};

export default ProductPage;
