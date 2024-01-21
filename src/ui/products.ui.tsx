"use client";
import { Box, Stack } from "@mui/material";
import { ProductCard } from "./product-card.ui";
import { useCallback, useEffect, useState, useTransition } from "react";
import { getProducts } from "@/actions/products.action";
import { IProduct } from "@/interfaces";

export const Products = () => {
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
    <div className="text-mist-dark w-full px-20 flex flex-col justify-center gap-3 items-center">
      <h4>Featured Products</h4>
      <h1 className="text-misty">BESTSELLER PRODUCTS</h1>
      <p className="text-mist text-sm">
        Problems trying to resolve the conflict between
      </p>
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
      <button
        onClick={getMoreProducts}
        className="text-sky border text-sm font-semibold border-sky rounded-md p-3 my-10"
      >
        LOAD MORE PRODUCTS
      </button>
    </div>
  );
};
