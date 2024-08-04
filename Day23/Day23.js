// Activity 1: Median of Two Sorted Arrays

// Task 1:

var findMedianSortedArrays = function (nums1, nums2) {
    let i = 0, j = 0, k = 0;
    const m = nums1.length;
    const n = nums2.length;
    const nums = new Array(m + n);
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            nums[k++] = nums1[i++];
        } else {
            nums[k++] = nums2[j++];
        }
    }
    while (i < m) {
        nums[k++] = nums1[i++];
    }
    while (j < n) {
        nums[k++] = nums2[j++];
    }
    const x = nums.length;
    if (x % 2 === 0) {
        return (nums[x / 2] + nums[(x / 2) - 1]) / 2;
    } else {
        return nums[Math.floor(x / 2)];
    }
};

// Activity 2: Merge k Sorted Lists

// Task 2:

mergeKLists = (a, $ = x => x ? [x, ...$(x.next)] : []) => a.flatMap($).sort((a, b) => a.val - b.val).map(x => $ = $.next = x)[0] ?? null

// Activity 3: Trapping Rain Water

// Task 3:

var trap = function (height) {
    const n = height.length;
    if (n === 0) return 0;
    const left = new Array(n).fill(0);
    const right = new Array(n).fill(0);
    left[0] = height[0];
    for (let i = 1; i < n; i++) {
        left[i] = Math.max(left[i - 1], height[i]);
    }
    right[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        right[i] = Math.max(right[i + 1], height[i]);
    }
    let trappedWater = 0;
    for (let i = 0; i < n; i++) {
        trappedWater += Math.min(left[i], right[i]) - height[i];
    }
    return trappedWater;
};

// Activity 4: N - Queens

// Task 4:

var solveNQueens = function (n) {
    const ans = [];
    const board = Array.from({ length: n }, () => '.'.repeat(n));
    const leftRow = Array(n).fill(0);
    const upperDiagonal = Array(2 * n - 1).fill(0);
    const lowerDiagonal = Array(2 * n - 1).fill(0);
    function fn(col, board, ans, leftRow, upperDiagonal, lowerDiagonal, n) {
        if (col === n) {
            ans.push([...board]);
            return;
        }
        for (let row = 0; row < n; row++) {
            if (
                leftRow[row] === 0 &&
                lowerDiagonal[row + col] === 0 &&
                upperDiagonal[n - 1 + col - row] === 0
            ) {
                board[row] = board[row].substring(0, col) + 'Q' + board[row].substring(col + 1);
                leftRow[row] = 1;
                lowerDiagonal[row + col] = 1;
                upperDiagonal[n - 1 + col - row] = 1;
                fn(col + 1, board, ans, leftRow, upperDiagonal, lowerDiagonal, n);
                board[row] = board[row].substring(0, col) + '.' + board[row].substring(col + 1);
                leftRow[row] = 0;
                lowerDiagonal[row + col] = 0;
                upperDiagonal[n - 1 + col - row] = 0;
            }
        }
    }
    fn(0, board, ans, leftRow, upperDiagonal, lowerDiagonal, n);
    return ans;
};

// Activity 5: Word Ladder

// Task 5:

function ladderLength(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) {
        return 0;
    }
    const wordSet = new Set(wordList);
    const dp = {};
    dp[beginWord] = 1;
    const queue = [beginWord];
    while (queue.length > 0) {
        const currentWord = queue.shift();
        for (let i = 0; i < currentWord.length; i++) {
            const wordArray = currentWord.split('');
            for (let j = 0; j < 26; j++) {
                wordArray[i] = String.fromCharCode(97 + j);
                const newWord = wordArray.join('');
                if (wordSet.has(newWord) && !dp.hasOwnProperty(newWord)) {
                    dp[newWord] = dp[currentWord] + 1;
                    if (newWord === endWord) {
                        return dp[newWord];
                    }
                    queue.push(newWord);
                }
            }
        }
    }
    return 0;
}