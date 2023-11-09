// return , bundan sonra bi işlem yapma demek
function hello(){
    let msg = 'hello word'
    return msg
}
console.log(hello())

// let sayi = prompt("sayı gir")
// function kare(x){
//     return x * x
// }
// console.log(kare(sayi))





// fonksyona parametre gönderme
// function topla(sayi1,sayi2){
//     return sayi1 * sayi2
// }
// console.log(topla(5,2))

// function topla(sayi1,sayi2){
//     let sonuc = sayi1 * sayi2
//     return sonuc
// }
// console.log(topla(5,2))

// function topla(sayi1,sayi2){
//     let sonuc = sayi1 * sayi2
//     return sonuc
// }
// let sayi1 = 5, sayi2=2
// console.log(topla(sayi1,sayi2))





// diziyi parametre olarak gönderme
// let dizi=[2,4,5,3,2,4,56,];
// function arrayValue(arr){
//     console.log(arr)
// }
// arrayValue(dizi)

// let dizi=[2,4,5,3,2,4,56,];
// function arrayTotal(arr){
//     let toplam= 0;
//     for (let i = 0; i <arr.length ; i++) {
//         toplam += arr[i]
//     }
//     return toplam
// }
// console.log(arrayTotal(dizi))





// anonymous function kullanımı
// const sayHeloo = function (name){
//     return name
// }
// console.log(sayHeloo('Ugur'))





// fonksyon parametre girip bu parametre yi göndermediysek static olarak parametre verebilriiz.
// function carpim(sayi1,sayi2 = 5){
//     return sayi1 * sayi2
// }
// console.log(carpim(10))





// dizideki son elemanı alma
// let array = ['a','b','c'];
// let goster = array.at(-1)
// console.log(goster)





// üs alma **2 not:// **1 karesi, **2 küp ?
// const fonksiyon = number => number ** 2
// function cube(cb,number){
//     return cb(number) * number
// }
// console.log(cube(fonksiyon,3))





// filter kullanımı basit örnek
// let numbers = [12,5,8,2,8,0,5]
// let sonuc = numbers.filter(val =>{
//     return val > 5
// })
// console.log(sonuc)

// let users = [
//     {
//         id: 1,
//         name: "uğur",
//         surname: "can",
//         age: 27
//     },
//     {
//         id: 2,
//         name: "ahmet",
//         surname: "tan",
//         age: 23
//     },
//     {
//         id: 3,
//         name: "mehmet",
//         surname: "gün",
//         age: 29
//     },
// ]
// function getir(){
//     users.filter(val=>{
//         if (val.age > 26){
//             console.log(val.name)
//         }
//     })
// }
// getir()

// içinde e geçenleri getir
// function getir(){
//     users.filter(val=>{
//         if (val.name.includes('e')){
//             console.log(val.name)
//         }
//     })
// }
// getir()


// find methodu, koşulu sağlayan ilk değeri getirir
// let goster = users.find(item => item.age>24)
// console.log(goster)

//findindex() ise index numarasını getirir
// let goster = users.findIndex(item => item.id === 3)
// console.log(goster)





// map() methodu, şarta uyanları bir liste iiçinde getirir
// let goster = users.map(item => item.age)
// console.log(goster)

// örnek
//  let goster = users.map(item =>{
//      return{
//          ad:item.name, yaş:item.age
//      }
//  })
// console.log(goster)

// örnek 2
//  let goster = users.map(item =>{
//      return `${item.name} ${item.surname} [${item.age}]`
//  })
// console.log(goster)





// foreach in yaptığını map ile yapablme
// let filtered = []
// users.forEach(item=>{
//     filtered.push({
//         adı:item.name,
//         yaş:item.age
//     })
// })
// console.log(filtered)

// let filtered = users.map(item => {
//     return {
//         adı: item.name,
//         yaş: item.age
//     }
// })
// console.log(filtered)


// let list = [
//     {
//         id: 1,
//         name: "uğur",
//         surname: "can",
//         age: 27,
//         friends: [
//             {
//                 name: "arif",
//                 surname: "koş",
//                 gender: "erkek",
//             }]
//     },
//     {
//         id: 2,
//         name: "ahmet",
//         surname: "tan",
//         age: 23,
//         friends: [
//             {
//                 name: "hamdi",
//                 surname: "gel",
//                 gender: "erkek",
//             }]
//     },
//     {
//         id: 3,
//         name: "mehmet",
//         surname: "gün",
//         age: 29,
//         friends: [
//             {
//                 name: "ayşe",
//                 surname: "git",
//                 gender: "kadın",
//             }]
//     }
// ]

// iç içe map()
// let willSaveData = list.filter(i => i.age > 24).map(item => {
//         return {
//             name: item.name,
//             surname: item.surname,
//             friends: item.friends.map(f => f.name)
//         }
//     })
// console.log(willSaveData)





// reduce () , yaş toplamını kısa yoldan bulmak
// let ageSum = list.reduce((sum, item) => sum + item.age, 0)
// console.log("Yaş toplam",ageSum)




// let person=[
//     {
//         name:"ugur",
//         fv_1:"field 1",
//         fv_2:"field 2",
//         fv_3:"field 3",
//     },
//     {
//         name:"ahmet",
//         fv_1:"field 11",
//         fv_2:"field 21",
//         fv_3:"field 31",
//     },
//     {
//         name:"mehmet",
//         fv_1:"field 12",
//         fv_2:"field 22",
//         fv_3:"field 32",
//     },
// ]

// liste içindeki nameleri silme , keyleri "fv_" ile başlamayanları sil dedik
// let goster = person.map(item => {
//     Object.keys(item).forEach(key=>{
//         if (!key.startsWith("fv_")){
//             delete item[key]
//         }
//     })
//     return item
// })
// console.log(goster)





































































