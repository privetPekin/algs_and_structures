#include <stdio.h>
#include <stdlib.h>
#include "utils.h"

int count = 0; // Глобальная переменная count

/**
 * @description - Алгоритм рекурсивного бинарного поиска, сложность O(log2n)
 * @param {int*} array 
 * @param {int} item 
 * @param {int} start 
 * @param {int} end 
 * @returns 
 */
int recursiveBinarySearch(const int* array, int item, int start, int end) {
    try {
        int middle = (start + end) / 2;
        count += 1;
        if (item == array[middle]) {
            return middle;
        }
        if (item < array[middle]) {
            return recursiveBinarySearch(array, item, start, middle - 1);
        } else {
            return recursiveBinarySearch(array, item, middle + 1, end);
        }
    } catch (...) {
        return -1;
    }
}

int main() {
    int* array = getArraySorted(10000, 1000);
    int count = 0;

    int result = recursiveBinarySearch(array, 333, 0, 9999);
    printf("%d\n", result);
    printf("count: %d\n", count);

    free(array);

    return 0;
}