function x(arr) {
    let sArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] === arr[j] && sArr.indexOf(arr[i]) === -1) {
                process.stdout.write(`${arr[i]} `)
                sArr.push(arr[i]);
            }
        }
    }
}

function findDuplicates_2(arr) {
    let count = new Array(Math.max(...arr) + 1).fill(0)
    for (let i = 0; i < arr.length; i++) {
        if (count[arr[i]] === 1) {
            process.stdout.write(`${arr[i]} `)
        }
        count[arr[i]]++
    }
}

function findDuplicates_3(arr) {
    let count = {}
    for (let i = 0; i < arr.length; i++) {
        console.log(count);
        if (!(arr[i] in count)) {
            count[arr[i]] = 0
        }
        if (count[arr[i]] === 1) {
            process.stdout.write(`${arr[i]} `)
        }
        count[arr[i]]++
    }
}

function main() {
    arr = [0, 4, 3, 2, 7, 8, 2, 3, 0, 1, 2, 3]
    // process.stdout.write('Algorithm 1 => ')
    findDuplicates_3(arr)
    console.log()
}

main()