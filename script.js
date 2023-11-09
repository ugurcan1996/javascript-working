// const buttons = document.querySelectorAll('.btn')
//
// buttons.forEach(button => {
//
//     const content = document.querySelector(button.dataset.target)
//     button.innerText = button.dataset.hide
//
//     button.addEventListener('click', () => {
//
//         if (content.classList.contains('hide')) {
//             button.innerText = button.dataset.hide
//             content.classList.remove('hide')
//         } else {
//             button.innerText = button.dataset.show
//             content.classList.add('hide')
//         }
//
//
//
//
//         // if (
//         // 	content.style.display === "" ||
//         // 	content.style.display === "block"
//         // ) {
//         // 	//console.log('content sayfada gorunur')
//         // 	content.style.display = "none"
//         //
//         // 	// butonun text'ini goster olarak ayarlamam gerekiyor!
//         // 	button.innerText = button.dataset.show
//         //
//         // } else {
//         // 	// console.log('content sayfada gizli')
//         // 	content.style.display = "block"
//         // 	button.innerText = button.dataset.hide
//         // }
//     })
//
// })


let list = [
    {
        "name": "ugur",
        "age": 27,
        "email": "ugr@gmail.com",
        "gender": "erkek",
        "telefonList": [
            {
                "telNo": 25252525,
                "varsayilanTel": "EVET"
            },
        ]
    },
    {
        "name": "AHMET",
        "age": 28,
        "email": "ahm@gmail.com",
        "gender": "erkek",
        "telefonList": [
            {
                "telNo": 25252525,
                "varsayilanTel": "HAYIR"
            }
        ]
    },
    {
        "name": "fatma",
        "age": 24,
        "email": "ftm@gmail.com",
        "gender": "kadın",
        "telefonList": [
            {
                "telNo": 25252525,
                "varsayilanTel": "EVET"
            }
        ]
    },
    {
        "name": "ayşe",
        "age": 20,
        "email": "ays@gmail.com",
        "gender": "kadın",
        "telefonList": [
            {
                "telNo": 25252525,
                "varsayilanTel": "HAYIR"
            }
        ]
    },
    {
        "name": "ali",
        "age": 37,
        "email": "ali@gmail.com",
        "gender": "erkek",
        "telefonList": [
            {
                "telNo": 25252525,
                "varsayilanTel": "EVET"
            }
        ]
    }]

// cinsiyeti kadın olanların sayısı
// let sayac = 0;
// list.forEach(val=>{
//     if (val.gender == "kadın"){
//         sayac ++;
//         console.log(sayac)
//     }
// })


// yaşı 24 den küçük
// list.forEach(val=>{
//     if (val.age < 24){
//         console.log(val.name)
//     }
// })

// YAŞ < 24 tel evet gelecek
// list.forEach(val=>{
//     if (val.age < 24){
//         val.telefonList.forEach(elem=>{
//             if (elem.varsayilanTel === "HAYIR"){
//                 console.log(elem)
//             }
//         })
//     }
// })


//list dizimin içindeki erkek olan elemanlara askerlik bilgisi eklenecek
// dizinin içindeki erkeklere ulaşmamız gerekiyor.
// val objectimizi değiştireceğiz değişen objemizi yeni bir listeye ekleyeceğiz
// objenin sonuna askerlik bilgisi eklenecek


//
// let yeniListe=[];
//
// list.forEach(val=>{
//   if (val.gender === "erkek"){
//     let obj={};
//     // obj={
//     //     "name":val.name,
//     //     "age":val.age,
//     //     "email":val.email,
//     //     "gender":val.gender,
//     //     "askerlikDurum":""
//     // }
//       obj={
//           ...val,
//           "askerlikDurum":"EVET"
//       }
//     yeniListe.push(obj)
//   }else{
//       yeniListe.push(val)
//   }
// })
// console.log(yeniListe)


//
//
// let kadinSayisi=0;
// let erkekSayisi=0;
//
// let erkekToplam = 0;
// let kadinToplam = 0;
//
// let erkekOrt = 0;
// let kadinOrt = 0;
//
// list.forEach(val =>{
//     if (val.gender === "erkek"){
//         erkekSayisi ++;
//         erkekToplam = erkekToplam + val.age
//         erkekOrt = (erkekToplam / erkekSayisi)
//     }else{
//         kadinSayisi ++;
//         kadinToplam = kadinToplam + val.age
//         kadinOrt = (kadinToplam / kadinSayisi)
//     }
// } )
//
// console.log(erkekSayisi)
// console.log(kadinSayisi)
//
// console.log(erkekToplam)
// console.log(kadinToplam)
//
// console.log(erkekOrt)
// console.log(kadinOrt)
//


// verdiğim sayının karesi
// let sayi = prompt("sayı giriniz");
// let sonuc= 0;
// sonuc = sayi * sayi;
// console.log(sonuc)


// verdiğim sayi kadar üssü
// promt dan girdiğimiz sayıyı girilen sayı kadar 3 ** 3
// let sayi = prompt("üs alma");
// let sonuc = 1;
// let ussunSonucu = 0;
// for (let i = 0; i < sayi; i++) {
//     sonuc = sonuc * sayi
// }
// console.log(sonuc)


//
// faktoriyel bulma
// 5! = 5.4.3.2.1 = 120
// let sonuc = 1;
// let sayi = prompt("faktoriyel giiniz")
// for (let i = sayi; i > 0 ; i--) {
//     sonuc = sonuc * i
// }
// console.log("sonuc",sonuc)


// 0,1,1,2,3,5,8,13,21,34
// let istenilenFibonacci = prompt("istenilen fibonacci sayısını girin")
// let sayi1 = 0;
// let sayi2= 1;
// let toplam= 0;
//
// console.log(sayi1)
// console.log(sayi2)
// for (let i = 0; i < istenilenFibonacci-2; i++) {
//     toplam = sayi1 + sayi2;
//     sayi1 = sayi2;
//     sayi2 = toplam;
// }
// console.log(toplam)

// 0,1,1,2,3,5,8,13,21,34
// let baslangicDegeri = prompt("başlangıç değeri giriniz")
// let istenilenFibonacci = prompt("istenilen fibonacci sayısını girin")
//
// let valBasDeg = Number(baslangicDegeri);
// let valIstenilenFib = Number(istenilenFibonacci);
//
// let toplam = 0;
//
// for (let i = valBasDeg; i < valIstenilenFib; i++) {
//     toplam = valBasDeg + toplam;
//     valBasDeg = toplam;
//
//     console.log(toplam)
// }


// recursive fonskyonu ile kendi kedine çağırıp, modunu alan ...
// function getir() {
//     let sonuc;
//     let sayi = prompt("sayı giriniz");
//     sonuc = sayi
//     console.log(sonuc %= 2)
//     if (sayi != 0) {
//         console.log("sayı 0 a eşit olamaz")
//         getir();
//     }
// }
//
// getir();


// sayı girilecek ve girilen sayıyı 5 kere birer bire artıracak , bu sayıların ortalaması alınacak.
// let toplam = 0;
// let ortalama;
// let sayi = prompt("Başlangıç sayısı girin")
// sayi = Number(sayi)
// for (let i = 0; i < 5; i++) {
//     if (i === 0) {
//         toplam = sayi;
//     } else {
//         sayi++;
//         toplam = toplam + sayi
//     }
//     console.log(toplam)
// }
// ortalama = toplam / 5
// console.log("ortalama", ortalama)


// sayı girilecek ve girilen sayıyı 5 kere girilen sayı kadar artıracak , bu sayıların ortalaması alınacak.
// let toplam = 0;
// let ortalama;
// let sonuc = 0;
// let sayi = prompt("Başlangıç sayısı girin")
// sayi = Number(sayi)
//
// for (let i = 0; i < 5; i++) {
//     if (i === 0) {
//         sonuc = sayi;
//         toplam = sonuc;
//     } else {
//         sonuc = sonuc + sayi
//         toplam = toplam + sonuc
//     }
//     console.log(sonuc)
// }
// ortalama = toplam / 5
// console.log("ortalama", ortalama)


// tekrarını girdiğim sayı kadar yapsın
// let toplam = 0;
// let ortalama;
// let sonuc = 0;
// let sayi = prompt("Başlangıç sayısı girin")
// sayi = Number(sayi)
//
// for (let i = 0; i < sayi; i++) {
//     if (i === 0) {
//         sonuc = sayi;
//         toplam = sonuc;
//     } else {
//         sonuc = sonuc + sayi
//         toplam = toplam + sonuc
//     }
//     console.log(sonuc)
// }
// ortalama = toplam / sayi
// console.log("ortalama", ortalama)


// dizi içindeki elemanları parmatre olarak geçmek
// let list2 = [3, 6, 12, 24]
// for (let i = 0; i < list2.length; i++) {
//     bol(list2[i]);
// }
//
// function bol(x) {
//     let sonuc = x / 3
//     console.log(sonuc)
// }

//
//
// let listem = [
//     {id: 1, title: "Teknoloji", parent_id: 0},
//     {id: 2, title: "Giyim", parent_id: 0},
//     {id: 3, title: "Pet", parent_id: 0},
//     {id: 4, title: "Bilgisayar", parent_id: 1},
//     {id: 5, title: "Telefon", parent_id: 1},
//     {id: 6, title: "Erkek", parent_id: 2},
//     {id: 7, title: "Kadın", parent_id: 2},
//     {id: 8, title: "Kedi", parent_id: 3},
//     {id: 9, title: "Köpek", parent_id: 3},
//     {id: 10, title: "Ayakkabı", parent_id: 6},
//     {id: 11, title: "Siyah", parent_id: 10}
//
// ]
//
// yeniList = [
//     {
//         id: 1,
//         title: "Teknoloji",
//         parent_id: 0,
//         children: [
//             {id: 4, title: "Bilgisayar", parent_id: 1, children: []},
//             {id: 5, title: "Telefon", parent_id: 1, children: []},
//         ]
//     },
//     {
//         id: 2,
//         title: "Giyim",
//         parent_id: 0,
//         children: [
//             {
//                 id: 6,
//                 title: "Erkek",
//                 parent_id: 2,
//                 children: [
//                     {id: 10, title: "Ayakkabı", parent_id: 6, children: []}
//                 ]
//             },
//             {id: 7, title: "Kadın", parent_id: 2, children: []},
//         ]
//     },
//     {
//         id: 3,
//         title: "Pet",
//         parent_id: 0,
//         children: [
//             {id: 8, title: "Kedi", parent_id: 3, children: []},
//             {id: 9, title: "Köpek", parent_id: 3, children: []},
//         ]
//     },
// ]
//

// amacımız parentıd'si 0 olan 3 ana kategori belirlemek,
// bu kategorilerin altına parentıd'leri ile listemizdeki id leri eşit olanları aynı kategoriye eklemek,
// örneğin ; parent ıd si 3 olan kedi , listemizde id si 3 olan pet kategorisi altına gelmektedir.
// aşağıda ;
// listemizi parametre olarak fonksyonumuza gönderdik,
// ana kategorilerimizi sonliste de göstermek için yen liste oluşturduk
// listem'iniz içindeki objeleri dönerek, parentıd'si fonksyion içinde tanımladığımız ıd ye eşit ise ( ilk değer id=0) ; children listesi -
//   oluşturarak içine göndermeye çalıştık
// sonraki adımda listemiz içindeki ıd miz 1 olduğundan dolayı , parentıd mize eşitse(id == 1) bu objeyi children a gönderdik ve sonlistemize -
//   push ettik. tüm objeleri dönerek ilgileri kategorilerin altına parentıd ve listem deki id eşit ise ekle dedik.

//
// function category(arr,id=0){
//     let sonListe = [];
//     arr.forEach(val =>{
//         if (val.parent_id === id){
//             let children = category(listem,val.id)
//             if (children.length) {
//                 val.children = children
//             }else{
//                 val.children = [];
//             }
//             sonListe.push(val)
//         }
//     })
//     return sonListe
// }
// console.log(category(listem))


// -------

// let listem2=[
//     {id:1,title:"Teknoloji",visible:false,parent_id:0},
//     {id:2,title:"Giyim",visible:true,parent_id:0},
//     {id:3,title:"Pet",visible:false,parent_id:0},
//     {id:4,title:"Bilgisayar",visible:true,parent_id:1},
//     {id:5,title:"Telefon",visible:true,parent_id:1},
//     {id:6,title:"Erkek",visible:true,parent_id:2},
//     {id:7,title:"Kadın",visible:true,parent_id:2},
//     {id:8,title:"Kedi",visible:true,parent_id:3},
//     {id:9,title:"Köpek",visible:true,parent_id:3},
//     {id:10,title:"Ayakkabı",visible:false,parent_id:6}
// ]

// // visible:false olan kategoriyi getirmesin
// function category2(arr,id=0){
//     let sonListe = [];
//     arr.forEach(val =>{
//         if (val.parent_id === id && val.visible){
//             let children = category2(listem2,val.id)
//             if (children.length) {
//                 val.children = children
//             }else{
//                 val.children = [];
//             }
//             sonListe.push(val)
//         }
//     })
//     return sonListe
// }
// console.log(category2(listem2))
//

//
// let sayi = prompt("Lütfen sayı giriniz");
// sayi=15
// liste=[]
// sonsayi = 0;
// ilksayi = 0;
// toplam = 0
// for (let i = 0; i < sayi; i++) {
//     if(i == 0){
//         ilksayi = sonsayi = 0
//         liste.push(toplam)
//     }else if(i == 1){
//         toplam = sonsayi = 1
//         liste.push(toplam)
//     }else{
//         toplam = ilksayi + sonsayi
//         ilksayi = sonsayi
//         sonsayi = toplam
//         liste.push(toplam)
//     }
// }
// console.log(liste);















































