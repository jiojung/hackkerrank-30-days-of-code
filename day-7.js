function main() {
    const n = parseInt(readLine(), 10);
    
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    let newarr = [];
    for(let i=1; i<n+1; i++){
        newarr.push(arr[arr.length-i])
    }
    console.log(newarr.join(" "));
}