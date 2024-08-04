// Activity 1: Two Sum

// Task 1:

var addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode(0);
    let tail = dummyHead;
    let carry = 0;
    while (l1 != null || l2 != null || carry != 0) {
        let digit1 = (l1 != null) ? l1.val : 0;
        let digit2 = (l2 != null) ? l2.val : 0;
        let sum = digit1 + digit2 + carry;
        let digit = sum % 10;
        carry = Math.floor(sum / 10);
        const newNode = new ListNode(digit);
        tail.next = newNode;
        tail = tail.next;
        l1 = (l1 != null) ? l1.next : null;
        l2 = (l2 != null) ? l2.next : null;
    }
    const result = dummyHead.next;
    return result;
};

// Activity 2: Longest Substring Without Repeating Characters

// Task 2:

var lengthOfLongestSubstring = function (s) {
    let res = 0;
    const mpp = new Map();
    let i = 0, j = 0;
    while (j < s.length) {
        mpp.set(s[j], (mpp.get(s[j]) || 0) + 1);
        if (mpp.size === j - i + 1) {
            res = Math.max(res, j - i + 1);
        } else if (j - i + 1 > mpp.size) {
            while (j - i + 1 > mpp.size) {
                mpp.set(s[i], mpp.get(s[i]) - 1);
                if (mpp.get(s[i]) === 0) {
                    mpp.delete(s[i]);
                }
                i++;
            }
        }
        j++;
    }
    return res;
};

// Activity 3: Container With Most Water

// Task 3:

var maxArea = function (height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
};

// Activity 4: 3Sum

// Task 4:

var threeSum = function (nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let total = nums[i] + nums[j] + nums[k];
            if (total > 0) {
                k--;
            } else if (total < 0) {
                j++;
            } else {
                res.push([nums[i], nums[j], nums[k]]);
                j++;
                while (nums[j] === nums[j - 1] && j < k) {
                    j++;
                }
            }
        }
    }
    return res;
};

// Activity 5: Group Anagrams

// Task 5:

var groupAnagrams = function (strs) {
    const result = [];
    const groups = new Map();
    for (let s of strs) {
        const signature = getSignature(s);
        if (!groups.has(signature)) {
            groups.set(signature, []);
        }
        groups.get(signature).push(s);
    }
    for (let group of groups.values()) {
        result.push(group);
    }
    return result;
};
function getSignature(s) {
    const count = new Array(26).fill(0);
    for (let c of s) {
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    let signature = '';
    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) {
            signature += String.fromCharCode('a'.charCodeAt(0) + i) + count[i];
        }
    }
    return signature;
};