#include <iostream>
#include <vector>
#include "utils.h"


void selectionSort(std::vector<int>& arr) {
    int n = arr.size();
    int count = 0;

    for (int i = 0; i < n; i++) {
        int min = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
            count += 1;
        }
        if (min != i) {
            std::swap(arr[i], arr[min]);
        }
    }

    for (const auto& element : arr) {
        std::cout << element << " ";
    }
    std::cout << std::endl;

    std::cout << "count: " << count << std::endl;
}

int main() {
    std::vector<int> array = randomArray(10000, 1000);

    selectionSort(array);

    return 0;
}