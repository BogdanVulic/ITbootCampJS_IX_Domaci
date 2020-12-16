function divisibleByFive(arr){
    let byFive = [];
    for(let i=0; i<arr.length; i++) if(arr[i] % 5 == 0) byFive.push(arr[i]);
    console.log(byFive);
}
divisibleByFive([1,4,5,6,7,45, 43,80,8,9,10,15])