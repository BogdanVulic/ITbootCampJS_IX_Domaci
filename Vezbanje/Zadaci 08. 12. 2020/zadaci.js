// 10. Пребројати колико има бројева између N и M, тако да они садрже цифру 6.
{
    let n = -346; m = 122;  counter = 0;
    if(n > m){
        let tmp = m;
        m = n;
        n = tmp;
    }
    let NzaPrikaz = n;  MzaPrikaz = m;
    while(n <= m){
        let x = n<0? -n:n
        while(x > 0){
            if(x%10 == 6){
                counter++;
                x = n;
                break;
            }
            else x = Math.floor(x/10);
        }
        n++;
    }
    console.log('Between',NzaPrikaz,'and',MzaPrikaz,'there are',counter,'numbers that contain number 6.');
}
//console.log('-----------------------------------');
//11. Исписати да ли је број прост.
//    Број је прост ако је дељив само сам са собом и јединицом.
// {
//     let counter = 2;
//     let x = 17;
//         while(counter < x){
//             if(x%counter == 0){
//                 console.log(x,'nije prost broj.');
//                 break;
//             }else if(counter == x-1){
//                 console.log(x,'jeste prost broj.');
//                 break;
//             }else{
//             counter++;
//             }
//         }
// }
// console.log('-----------------------------------');
// //12. Исписати све просте бројеве до N (Не уносите превелико N).
// {
//     let checker = 200;
//     for(let i=1; i<checker; i++){
//         if(i<=2){
//             process.stdout.write(`${i},`);
//         }else{
//             let counter = 2;
//             while(counter < i){
//                 if(i%counter == 0){
//                     break;
//                 }else if(counter == i-1){
//                     process.stdout.write(`${i},`);
//                     break;
//                     }else{
//                         counter++;
//                     }
//             }
//         }
//     }
// }
// console.log('-----------------------------------');
// //14. Исписати просечну вредност бројева од N до M 
// {
//     let min = 2348;
//     let max = 34598;
//     console.log('Prosečna vrednost brojeva',min,'i',max,'je',(min+max)/2);
// }
// console.log('-----------------------------------');
// //15. *Исписати првих N чланова Фибоначијевог низа
// {   
//     let N = 11;
//     let fib = [];
//     fib[0] = 1;
//     fib[1] = 1;
//     for (let i = 2; i < N; i++) {
//         if(i == 2){
//             console.log(fib[0]);
//             console.log(fib[1]);
//         }
//         fib[i] = fib[i - 2] + fib[i - 1];
//         console.log(fib[i]);
//     }
// }
// console.log('-----------------------------------');
// //16. Написати програм који на основу унетог N прави квадрат тих димензија.
//     // Нпр N = 5          N = 4

//     //     *****          ****
//     //     *****          ****
//     //     *****          ****
//     //     *****          ****
//     //     *****
// {
//     let N = 9;
//     for(let i=0; i<N; i++){
//         for(let j=0; j<N; j++){
//             process.stdout.write('*  ');
//         }
//         console.log('');
//     }
// }
// console.log('-----------------------------------');
// //17. Написати програм који на основу унетог N прави квадрат тих димензија.
//     // Нпр N = 5          N = 4

//     //     *****          ****
//     //     *   *          *  *
//     //     *   *          *  *
//     //     *   *          ****
//     //     *****
// {
//     let N = 5;
//     for(let i=0; i<N; i++){
//         for(let j=0; j<N; j++){
//             if(i == 0 || i == N-1){
//             process.stdout.write('*  ');
//             }else if(j == 0 || j == N-1){
//                 process.stdout.write('*  ');
//                 }else{
//                     process.stdout.write('   ');
//                 }
//         }
//         console.log('');
//     }
// }
// console.log('-----------------------------------');
// //18. Написати програм који на основу унетог N и M прави правоугаоник тих димензија.
//     // Нпр N = 5,M = 3          N = 4, M = 7

//     //     ***                 *******
//     //     * *                 *     *
//     //     * *                 *     *
//     //     * *                 *******
//     //     ***

// {
//     let N = 8;
//     let M = 3;
//     for(let i=0; i<N; i++){
//         for(let j=0; j<M; j++){
//             if(i == 0 || i == N-1){
//             process.stdout.write('*  ');
//             }else if(j == 0 || j == M-1){
//                 process.stdout.write('*  ');
//                 }else{
//                     process.stdout.write('   ');
//                 }
//         }
//         console.log('');
//     }
// }