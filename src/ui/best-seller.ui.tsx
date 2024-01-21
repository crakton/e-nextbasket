"use client";
import { Box, Divider, Stack } from "@mui/material";
import { ProductCard } from "./product-card.ui";
import { useCallback, useEffect, useState, useTransition } from "react";
import { getProducts } from "@/actions/products.action";
import { IProduct } from "@/interfaces";

export const BestSeller = () => {
  const [pendingProduct, productFectching] = useTransition();
  const [productData, setProductData] = useState<IProduct[]>([]);
  const [skipCount, setSkipCount] = useState(10);
  useEffect(() => {
    productFectching(async () => {
      const { products }: { products: IProduct[] } = await getProducts();
      setProductData(products);
    });
  }, []);

  const getMoreProducts = useCallback(async () => {
    const { products }: { products: IProduct[] } = await getProducts(
      10,
      skipCount
    );
    setSkipCount((prevCount) => prevCount + 10);
    const newProducts: IProduct[] = [...productData, ...products];
    setProductData(newProducts);
  }, [productData, skipCount]);

  return (
    <div className="text-mist-dark w-full py-20 flex flex-col gap-3">
      <h1 className="text-misty">BESTSELLER PRODUCTS</h1>
      <Divider />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
        {!pendingProduct ? (
          productData.length > 0 ? (
            productData.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          ) : null
        ) : (
          <>...</>
        )}
      </div>
    </div>
  );
};
