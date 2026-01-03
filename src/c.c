#include <stdio.h>

int main()
{
  // 1. Create an array of 5 integers
  int arr[5] = {10, 20, 30, 40, 50};

  // 2. Create a pointer to an array of 5 integers
  // Note: You must use &arr to get the address of the entire array
  int (*ptr)[5] = &arr;

  printf("Accessing elements using pointer to array:\n");

  // 3. Loop through the array using the pointer
  for (int i = 0; i < 5; i++)
  {
    // (*ptr) gets the array, then [i] accesses the index
    printf("Element %d: %d\n", i, (*ptr)[i]);
  }

  return 0;
}