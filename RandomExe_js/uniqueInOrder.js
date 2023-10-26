
function uniqueInOrder(a) {
    if (a.length === 0) {
        return [];
    }
    let ar = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== a[i + 1]) {
            ar.push(a[i]);
        }
    }
    console.log(ar);
}
//test
let j = [1, 2, 2, 2,"ha","ha", 6, 6, 8, 8]
uniqueInOrder(j);

// example uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
