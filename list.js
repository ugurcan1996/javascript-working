
let listem = [
    {id: 1, title: "Teknoloji", parent_id: 0},
    {id: 2, title: "Giyim", parent_id: 0},
    {id: 3, title: "Pet", parent_id: 0},
    {id: 4, title: "Bilgisayar", parent_id: 1},
    {id: 5, title: "Telefon", parent_id: 1},
    {id: 6, title: "Erkek", parent_id: 2},
    {id: 7, title: "Kadın", parent_id: 2},
    {id: 8, title: "Kedi", parent_id: 3},
    {id: 9, title: "Köpek", parent_id: 3},
    {id: 10, title: "Ayakkabı", parent_id: 6},
    {id: 11, title: "Siyah", parent_id: 10}
]

yeniList = [
    {
        id: 1,
        title: "Teknoloji",
        parent_id: 0,
        children: [
            {id: 4, title: "Bilgisayar", parent_id: 1, children: []},
            {id: 5, title: "Telefon", parent_id: 1, children: []},
        ]
    },
    {
        id: 2,
        title: "Giyim",
        parent_id: 0,
        children: [
            {
                id: 6,
                title: "Erkek",
                parent_id: 2,
                children: [
                    {id: 10, title: "Ayakkabı", parent_id: 6, children: []}
                ]
            },
            {id: 7, title: "Kadın", parent_id: 2, children: []},
        ]
    },
    {
        id: 3,
        title: "Pet",
        parent_id: 0,
        children: [
            {id: 8, title: "Kedi", parent_id: 3, children: []},
            {id: 9, title: "Köpek", parent_id: 3, children: []},
        ]
    },
]


// function category(arr,id=0){
//     let sonListe = [];
//     arr.forEach(val=>{
//         if (val.parent_id === id){
//             let children = category(listem,val.id)
//             if (children.length){
//                 val.children = children
//             }else {
//                 val.children = [];
//             }
//             sonListe.push(val)
//         }
//     })
//     return sonListe;
// }
//
// console.log(category(listem))



// faktoriyel bulma
// 5! = 5.4.3.2.1 = 120
// let sonuc = 1;
// let sayi = prompt("faktoriyel giiniz")
// for (let i = sayi; i > 0 ; i--) {
//     sonuc = sonuc * i
// }
// console.log("sonuc",sonuc)



// recursive function
// let sayi = prompt("sayi girin")
// Number(sayi);
// function faktoriyel(sayi){
//     if (sayi === 1 || sayi === 0){
//         return 1
//     }else{
//         return sayi * faktoriyel(sayi - 1)
//     }
// }
// console.log(faktoriyel(sayi));
//




// 1 de n 10 a kadar recursive function
// let sayi = 1;
// function yazdir(sayi){
//     if (sayi < 10){
//         console.log(sayi)
//         return yazdir(sayi +1)
//     }else{
//         return sayi
//     }
// }
// console.log(yazdir(sayi))
















