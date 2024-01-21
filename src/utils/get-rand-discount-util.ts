export function calculateRandomDiscount(originalPrice: number) {
  // Ensure the price is a positive number
  if (typeof originalPrice !== "number" || originalPrice <= 0) {
    throw new Error("Invalid price. Please provide a positive number.");
  }

  // Generate a random discount percentage between 5% and 25%
  const minDiscountPercentage = 5;
  const maxDiscountPercentage = 25;
  const randomDiscountPercentage =
    Math.random() * (maxDiscountPercentage - minDiscountPercentage) +
    minDiscountPercentage;

  // Calculate the discounted price
  const discountAmount = (randomDiscountPercentage / 100) * originalPrice;
  const discountedPrice = originalPrice - discountAmount;

  return discountedPrice.toFixed(2);

  // Return an object with the discount details
  // return {
  //     originalPrice: originalPrice,
  //     discountPercentage: randomDiscountPercentage,
  //     discountedPrice: discountedPrice,
  // };
}
