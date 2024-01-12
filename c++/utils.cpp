#include "utils.h"
#include <cstdlib>
#include <algorithm>
#include <iostream>
#include <vector>
#include <cstdlib>
#include <ctime>
#include <unordered_map>

std::vector<int> randomArray(int length, int max) {
    std::vector<int> array;
    array.reserve(length);

    // Инициализация генератора случайных чисел
    std::srand(std::time(0));

    for (int i = 0; i < length; ++i) {
        array.push_back(std::rand() % (max + 1));
    }

    return array;
}

int* getArraySorted(int length, int max) {
    std::vector<int> vectorArray = randomArray(length, max);

    // Создание массива из вектора
    int* array = new int[length];
    std::copy(vectorArray.begin(), vectorArray.end(), array);

    // Сортировка массива
    std::sort(array, array + length);

    return array;
}

std::unordered_map<char, std::vector<char>> getGraph() {
    std::unordered_map<char, std::vector<char>> graph = {
        {'a', {'b', 'e'}},
        {'b', {'e', 'f'}},
        {'c', {'d', 'a'}},
        {'d', {'a'}},
        {'e', {'e'}},
        {'f', {'b'}}
    };

    return graph;
}