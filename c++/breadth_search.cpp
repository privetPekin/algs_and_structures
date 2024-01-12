#include <iostream>
#include <unordered_map>
#include <unordered_set>
#include <queue>
#include <vector>
#include "utils.h"

bool breathSearch(const std::unordered_map<char, std::vector<char>>& graph, char start, char end) {
    std::queue<char> queue;
    std::unordered_set<char> visited;

    queue.push(start);

    while (!queue.empty()) {
        char current = queue.front();
        queue.pop();

        if (visited.find(current) == visited.end()) {
            visited.insert(current);

            if (graph.find(current) != graph.end()) {
                for (char neighbor : graph.at(current)) {
                    if (neighbor == end) {
                        return true;
                    }
                    queue.push(neighbor);
                }
            }
        }
    }

    return false;
}

int main() {
    std::unordered_map<char, std::vector<char>> graph = getGraph();
    
    if (breathSearch(graph, 'a', 'e')) {
        std::cout << "Path found" << std::endl;
    } else {
        std::cout << "Path not found" << std::endl;
    }

    return 0;
}