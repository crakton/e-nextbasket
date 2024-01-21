export function getRandomArrayElement(array: any[]) {
  // Check if the array is not empty
  if (Array.isArray(array) && array.length > 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  } else {
    throw new Error("Input array is empty or not valid.");
  }
}
