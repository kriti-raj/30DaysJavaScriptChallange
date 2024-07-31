// Activity 1: Sorting Algorithms

// Task 1:

const Task1 = () => {
    const bubbleSort = (array) => {
        let n = array.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                }
            }
        }
        return array;
    }
    let array = [5, 2, 9, 1, 5, 6];
    console.log(bubbleSort(array));
}
Task1();

// Task 2:

const Task2 = () => {
    const selectionSort = (array) => {
        let n = array.length;
        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < n; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                [array[i], array[minIndex]] = [array[minIndex], array[i]];
            }
        }
        return array;
    }
    let array = [5, 2, 9, 1, 5, 6];
    console.log(selectionSort(array));
}
Task2();

// Task 3:

const Task3 = () => {
    const quickSort = (array) => {
        if (array.length <= 1) return array;
        let pivot = array[Math.floor(array.length / 2)];
        let left = [];
        let right = [];
        let equal = [];
        for (let num of array) {
            if (num < pivot) {
                left.push(num);
            } else if (num > pivot) {
                right.push(num);
            } else {
                equal.push(num);
            }
        }
        return [...quickSort(left), ...equal, ...quickSort(right)];
    }
    let array = [5, 2, 9, 1, 5, 6];
    console.log(quickSort(array));
}
Task3();

// Activity 2: Searching Algorithms

// Task 4:

const Task4 = () => {
    const linearSearch = (array, target) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === target) {
                return i;
            }
        }
        return -1;
    }
    let array = [5, 2, 9, 1, 5, 6];
    let target = 9;
    console.log(linearSearch(array, target));
}
Task4();

// Task 5:

const Task5 = () => {
    const binarySearch = (array, target) => {
        let left = 0;
        let right = array.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (array[mid] === target) {
                return mid;
            } else if (array[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
    let array = [1, 2, 5, 5, 6, 9];
    let target = 5;
    console.log(binarySearch(array, target));
}
Task5();

// Activity 3: String Algorithms

// Task 6:

const Task6 = () => {
    const countCharacters = (str) => {
        let charCount = {};
        for (let char of str) {
            charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
        }
        return charCount;
    }
    let str = "hello world";
    console.log(countCharacters(str));
}
Task6();

// Task 7:

const Task7 = () => {
    const lengthOfLongestSubstring = (str) => {
        let maxLength = 0;
        let start = 0;
        let charIndex = {};
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (charIndex[char] >= start) {
                start = charIndex[char] + 1;
            }
            charIndex[char] = i;
            maxLength = Math.max(maxLength, i - start + 1);
        }
        return maxLength;
    }
    let str = "abcabcbb";
    console.log(lengthOfLongestSubstring(str));
}
Task7();

// Activity 4: Array Algorithms

// Task 8:

const Task8 = () => {
    const rotateArray = (array, k) => {
        k = k % array.length;
        return array.slice(-k).concat(array.slice(0, -k));
    }
    let array = [1, 2, 3, 4, 5, 6];
    let k = 2;
    console.log(rotateArray(array, k));
}
Task8();

// Task 9:

const Task9 = () => {
    const mergeSortedArrays = (array1, array2) => {
        let mergedArray = [];
        let i = 0, j = 0;
        while (i < array1.length && j < array2.length) {
            if (array1[i] < array2[j]) {
                mergedArray.push(array1[i]);
                i++;
            } else {
                mergedArray.push(array2[j]);
                j++;
            }
        }
        while (i < array1.length) {
            mergedArray.push(array1[i]);
            i++;
        }
        while (j < array2.length) {
            mergedArray.push(array2[j]);
            j++;
        }
        return mergedArray;
    }
    let array1 = [1, 3, 5];
    let array2 = [2, 4, 6];
    console.log(mergeSortedArrays(array1, array2));
}
Task9();

// Activity 5: Dynamic Programming(Optional)

// Task 10:

const Task10 = () => {
    const fibonacci = (n) => {
        if (n <= 1) return n;
        let fib = [0, 1];
        for (let i = 2; i <= n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib;
    }
    let n = 10;
    console.log(fibonacci(n));
}
Task10();

// Task 11:

const Task11 = () => {
    const knapsack = (weights, values, capacity) => {
        let n = weights.length;
        let dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
        for (let i = 1; i <= n; i++) {
            for (let w = 0; w <= capacity; w++) {
                if (weights[i - 1] <= w) {
                    dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
                } else {
                    dp[i][w] = dp[i - 1][w];
                }
            }
        }
        return dp[n][capacity];
    }
    let weights = [2, 3, 4, 5];
    let values = [3, 4, 5, 6];
    let capacity = 5;
    console.log(knapsack(weights, values, capacity));
}
Task11();
