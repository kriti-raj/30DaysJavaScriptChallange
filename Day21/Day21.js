// Activity 1: Two Sum

// Task 1:

const twoSum = function (nums, target) {
    const newMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let res = target - nums[i];
        if (newMap.has(res)) {
            return [newMap.get(res), i];
        }
        newMap.set(nums[i], i);
    }
    return null;
};

// Task 2:

const reverse = function (x) {
    const isNegative = (x < 0);
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    if (reversed > 2 ** 31 - 1) return 0;
    return isNegative ? -reversed : reversed;
};

// Task 3:

const isPalindrome = function (x) {
    if (x < 0) return false;
    const reversed = parseInt(x.toString().split('').reverse().join(''));
    return x === reversed;
};

// Task 4:

const mergeTwoLists = function (list1, list2) {
    let result = null;
    let current = null;
    while (list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            if (result == null) {
                result = list1;
                current = list1;
            }
            else {
                current.next = list1;
                current = list1;
            }
            list1 = list1.next;
        }
        else {
            if (result == null) {
                result = list2;
                current = list2;
            }
            else {
                current.next = list2;
                current = list2;
            }
            list2 = list2.next;
        }
    }
    while (list1 != null) {
        if (result == null) {
            result = list1;
            current = list1;
        }
        else {
            current.next = list1;
            current = list1;
        }
        list1 = list1.next;
    }
    while (list2 != null) {
        if (result == null) {
            result = list2;
            current = list2;
        }
        else {
            current.next = list2;
            current = list2;
        }
        list2 = list2.next;
    }
    return result;
};

// Task 5:

var isValid = function (s) {
    let stack = [];
    let map = { ')': '(', '}': '{', ']': '[' };
    for (let char of s) {
        if (char in map) {
            let topElement = stack.length === 0 ? '#' : stack.pop();
            if (map[char] !== topElement) return false;
        }
        else stack.push(char);
    }
    return stack.length === 0;
};