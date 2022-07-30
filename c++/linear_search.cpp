#include <iostream>
using namespace std;

int countIteration = 0;

// Алгоритм линейнего поиска, сложность O(n)
int search(int arr[], int arrayLength, int x)
{
    int i;
    for (i = 0; i < arrayLength; i++)
    {
        countIteration++;
        if (arr[i] == x)
            return i;
    }
    return -1;
}

int main(void)
{
    int arr[3000] = { 2, 3, 4, 40 };
    int searchValue = 10;
    int length = 3000;
    int i;
    for (i = 4; i < 3000; i++)
    {
        if (i == length - 1)
        {
            arr[i] = 10;
        }
        else {
            arr[i] = rand();
        }
    }

    int result = search(arr, length, searchValue);

    cout << result;
    cout << "\ncount: " << countIteration;

    return 0;
}