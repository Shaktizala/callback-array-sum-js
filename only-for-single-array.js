const input = [
    // [1, 2, 3, 4],
    // [1, 2],
    [4, 2, 1, 6, 8, 7],
    // [5,8,3,4,6,1,7,0]
]
// Working for single array only.
function sum(n1, n2, cb) {
    setTimeout(function () {
        cb(n1 + n2)
    }, 2000)
}

function multiply(n1, n2, cb) {
    setTimeout(function () {
        cb(n1 * n2)
    }, 2000)
}

let result = 0
function storeSum(res) {
    result += res
}

for (let arrayIn = 0; arrayIn < input.length; arrayIn++) {
    let ele = 0
    if (input[arrayIn].length >= 2) {
        multiply(input[arrayIn][0], input[arrayIn][1], storeSum)
        ele = 2
    }
    for (; ele < input[arrayIn].length; ele += 2) {
        if (ele + 2 >= input[arrayIn].length) {
            
            multiply(input[arrayIn][ele], input[arrayIn][ele + 1], function (answer) {
                sum(result, answer, function (ans) {
                    console.log(ans)
                    result = 0
                })
            })
        } else {
            multiply(input[arrayIn][ele], input[arrayIn][ele + 1], storeSum)
        }
    }
}
