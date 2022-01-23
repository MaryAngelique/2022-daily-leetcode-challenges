/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(n, trust) {
    let count = new Array(n + 1).fill(0)
    
    for (let [i, j] of trust) {
        count[i]--
        count[j]++
    }
    
    for (let i = 1; i < count.length; i++) {
        if (count[i] == n -1)
            return i
    }
    
    return -1
};