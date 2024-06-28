
// 1-masala
// function anitopish(str){
//      let res = 0;
//      for(let i of str){
//           if(i == 'a'){
//                res++
//           }
//      }
//      return res;
// }
// console.log(anitopish('salom alleykum assaaalom'))

// 2-misol

// function juftsonlar(n) {
//     let res = [];
//     for (let i = 2; i <= n; i += 2){
//           res.push(i)
//     }
//      return res
// }

// console.log(juftsonlar(23));

// 3-masala
// function boshjoy(str){
//      let res = ''
//      for(let bosh of str){
//           if (bosh != ' '){
//                res += bosh; 
//           }
//      }
//      return res
// }
// console.log(boshjoy('men Shern iyo z'))

// 4-masala

// function ochirish(str){
//      let res = ''
//      for(let i = 0; i < str.length; i++){
//           if(i != 0){
//                res += str[i]
//           }
//      }
//      return res;
// }
// console.log(ochirish('asb12'))

// 5-masala
// function kichikElement(mas){
//      let kichik = mas[0];

//      mas.forEach(function(value) {
//           if(kichik > value){
//               kichik = value
//           }
//      });
//      return kichik.toString().charCodeAt();
// }
// console.log(kichikElement([2, 7, 1, 9]))

// 6-masala


// function ozgaruvchi(str){
//      return str.toLowerCase();
// }
// console.log(ozgaruvchi('AsaGulloXWelkEsA'))

// 7-masala

// function sonlar(arr){
//      let res = 0;
//      arr.forEach(function(value) {
//         res = res + value;
//      });
//      return res;
// }
// console.log(sonlar([1, 2, 12, 23, 42]))

// 8-masala

// function bnitopish(str){
//      let res = 0;
//      for( let aylanish of str){
//           if(aylanish == 'b'){
//                res = res + 1
//           }
//      }
//      return res;
// }
// console.log(bnitopish('absbdjbwkdbbgt'))

// 9-masala

// function sonlarKvadrati(arr){
//      let res = [];
//      for(let i = 1; i <= arr; i++){
//           res.push(i**2)
//      }
//      return res;
// }
// console.log(sonlarKvadrati([10]))

// 10-masala

// function oxirgiElementi(str){
//      return str.substring(0, str.length - 1)
// }
// console.log(oxirgiElementi('asadbek'))

// qo`shimcha`
// function oxirgiElementi(str){
//      let res = '';
//      for(let ochir of str){
//           if(ochir != str[str.length - 1]){
//                res += ochir
//           }
//      }
//      return res;
// }
// console.log(oxirgiElementi('asadbek'))


// 11-masala

// function olibtawlash(arr){
//      let res = [];
//      arr.forEach(function(value){
//           if(value > 0){
//                res.push(value)
//           }
//      })
//      return res;
// }
// console.log(olibtawlash([12, -7, 23, 15, -3]))

// 12-masala

// function raqamolibtashlash(str){
//      return str.replace(/\d/g, '');
// }
// console.log(raqamolibtashlash('jq12jdswj3nsdw80sj'))

// 13-masala


// function almashish(str){
//       let res = [];
//       for(let i = 0; i <= str.length; i++){
//           if(i > 0){
//                res.unshift(str[i])
//           }else{
//                res.push(str[i])
//           }
//       }
//       let result = res.toString().replaceAll(',', '')
//       return result;
// }
// console.log(almashish('salom'))

// 14-masala

// function ikkibaravar(arr){
//      let res = [];
//      arr.forEach(function(value){
//           res.push(value * 2)
//      })
//      return res;
// }
// console.log(ikkibaravar([2, 3, 45, 81, 6]))

// 15-masala

// function birinchivaoxirgi(str){
//      let arr = str.split('');
//      let bir = arr[0];
//      let oxir = arr[arr.length - 1];
//      arr[0] = oxir
//      arr[arr.length - 1] = bir
//      // let a = oraliq.push(str.length);
//      // let b = a.unshift(str[0])
//      return arr.join('');
// }
// console.log(birinchivaoxirgi('salom'))

// 16-masala

// function yigindi(arr){
//      let res = 0;
//      arr.forEach(function(value){
//           if(value % 2 == 0){
//                res = res + value;
//           }
//      })
//      return res;
// }
// console.log(yigindi([2, 3, 4, 9, 12]))

// 17-masala
// function kotta(str){
//      return str.toUpperCase()
// }
// console.log(kotta('ajsjdjAJgDHkjsdj'));

// 18-masala
// const str= 'salom'
// function alphabit(str){
//      let res=str.split('')
// return res.sort().join('')

// }
// console.log(alphabit(str));

// 19-masala
// const str = 'assalomu aleykum domla'

// function kotta(str){

//     let arr = str.split(' ').map(function(value){
//         return value[0].toUpperCase()+value.slice(1)
//     })
//     return arr.join(' ')
// }
// console.log(kotta(str));
// 20-masala

// function juftsonlar(arr){
//      let res = [];
//      arr.forEach(function(value){
//           if(value % 2 == 0){
//                res.push(value)
//           }
//      })
//      return res;
// }
// console.log(juftsonlar([2, 15, 32, 21, 9, 85, 78]))

