// var vardas = 'Bilas';

// console.log(vardas.length)
// console.log(vardas[3])
// console.log(vardas.indexOf('las'))
// console.log(vardas.slice(0,2))

















// //----------------------------------------------------------------------------------------------------------
// /*
// Mokomes JavaScript
// */

// // Primityvus duomenu tipai
// let firstName = "Jonas";
// let lastName = "Jonaitis";
// let itemPrice = 12.56;
// let userAge = 25;
// let userOnline = true;

// //Inteligentiski duomenu tipai

// let productCart = ['Computer', 'Phone', 'Pencil']

// //Objektas
// let product ={
//     title: 'Apple Macbook Pro',
//     price: 23366.12,
//     location: 'Kaunas'
// }

// //Masyve objektai
// let products = [
//     {
//         title: 'Apple Macbook Pro',
//          price: 23366.12,
//         location: 'Kaunas'
//     },
//     {
//         title: 'Pencil',
//          price: 23366.12,
//         location: 'Kaunas'
//     },
//     {
//         title: 'Table',
//          price: 23366.12,
//         location: 'Kaunas'
//     }
// ]


// //console.log isvedimas
// console.log("man patinka Js"+firstName);
// console.log(`vartotojo vardas: ${lastName}vartotojo pavarde yra ${lastName}`);

// //Konstantos deklaravimas
// const userRole = "admin";
// // userRole = "sale"; netinkamas perrasymas
// console.log(`Vartotojo role yra ${userRole}`)

// console.log(typeof(firstname))
// console.log(typeof(itemPrice))
// console.log(typeof(userAge))
// console.log(typeof(userOnline))
// console.log(typeof(productCart))
// console.log(typeof(product))
// console.log(productCart)

// //----------------------------------------------------------------------------------------------------------

// const language = 'lt';  //cia keiciam kalba pagal apatinius pavyzdzius

// switch(language){
//     case 'lt':
//         console.log("Sveiki")
//         break;
//     case 'en':
//         console.log('Hello')
//         break;
//     default:
//         console.log('Nesupratau kalbos')
// }



//------Conditional(ternary) operator------------------------------------------------------------------------------------------
// let weather = 20;

// let userName = weather>19 ? 'Andrius':'Karolis';

// console.log(userName)


//---Antra pamoka-----------------------------------------------------------------------------------
// let items = ['Phone,', 'Pencil', 'Box', 'Table']


// let user = {
//     id:1,
//     name:"Jonas",
//     email:'jonux123@gmail.com',
//     role:"Admin"
// }


// // console.log([0])
// // console.log([1])
// // console.log([2])
// // console.log([3])

// //parasykite cikla kuris artspausdina elementu reiksmes

// // console.log('For ciklas:')

// // for(let i=0,i<items.length;i++){
// //     console.log(items[i])
// // }


// //-------------------------------------------------------------
// //issisaugo masyva ir ji iteruoja
// // for(let item in items){
// //     console.log(items[item])
// // }

// //------------------------------------------------------------------
// // negali vaziuoti per objekta
// // for(let item of items){
// //     console.log(item)
// // }

// for(let userData in user){
//     console.log(`${userData}:${user[userData]}`)
// }





//-------------------------------------------------------------------------
// let students =[
//     {
//         id:1,
//         firstName:"Tadas",
//         lastName:"Tadauskas",
//         email:"tadas.tadauskas@stud.kitm.lt",
//         group:"students",
//         marks:[
//             {
//                 subject: 'Programming',
//                 mark:7
//             },
//             {
//                 subject: 'IT',
//                 mark:4
//             },
//             {
//                 subject: 'Math',
//                 mark:5
//             }
//         ]
//     },
//     {
//         id:2,
//         firstName:"Ieva",
//         lastName:"Ievaite",
//         email:"ieva.ievaite@stud.kitm.lt",
//         group:"students",
//         marks:[
//             {
//                 subject: 'Programming',
//                 mark:8
//             },
//             {
//                 subject: 'IT',
//                 mark:8
//             },
//             {
//                 subject: 'Math',
//                 mark:8
//             }
//         ]
//     },
//     {
//         id:3,
//         firstName:"Migle",
//         lastName:"Tadauskaite",
//         email:"tadas.tadauskas@stud.kitm.lt",
//         group:"students",
//         marks:[
//             {
//                 subject: 'Programming',
//                 mark:7
//             },
//             {
//                 subject: 'IT',
//                 mark:7
//             },
//             {
//                 subject: 'Math',
//                 mark:7
//             }
//         ]
//     },
//     {
//         id:4,
//         firstName:"Vardenis",
//         lastName:"Tadauskas",
//         email:"vardenis.tadauskas@stud.kitm.lt",
//         group:"students",
//         marks:[
//             {
//                 subject: 'Programming',
//                 mark:4
//             },
//             {
//                 subject: 'IT',
//                 mark:4
//             },
//             {
//                 subject: 'Math',
//                 mark:5
//             }
//         ]
//     },
//     {
//         id:5,
//         firstName:"Rokas",
//         lastName:"Rokauskas",
//         email:"rokas.rokauskas@stud.kitm.lt",
//         group:"students",
//         marks:[
//             {
//                 subject: 'Programming',
//                 mark:7
//             },
//             {
//                 subject: 'IT',
//                 mark:5
//             },
//             {
//                 subject: 'Math',
//                 mark:6
//             }
//         ]
//     }
// ]

/*
* isvesti studentus tokiu budu.

Studentai:
Rokas
Rakauskas
rokas.rakauskas@stud.kitm.lt
Grupe: students
---------------------------------
.....(kitas studentas)
*/


// for(let userData in students){
//     console.log(`${userData}:${students[userData]}`)
// }

// console.log('Studentu sarasas')
// for(let student of students){
//     console.log('----------------')
//     for(let studentData in student)
//         if(studentData == 'group'){
//             console.log(`Grupe: ${student[studentData]}`)
//         }
//         else{
//             if(studentData=='marks'){
//                 console.log('Ivertinimai:')
//                 for(marks of student[studentData]){
//                     console.log(`${marks.subject}:${marks.mark}`)
//                 }
//             }
//             // console.log(student[studentData])
//         }
// }

/* Parasykite programa kurios pagalba galime atlikti paieska studentu pagal varda.
Issokusiam prompt lange ivedamas studento vardas.
Jeigu studentas surandamas , console ivedami jo duomenys.
Jeigu nerandamas , isvedamas uzrasas : Tokio studento nera.
Paieskai realizuoti galite naudoti Js funkcija includes.
*/

// let studentName = prompt('Iveskite studento varda:')
// let found = false
// for(const student of students) {
//     if (student.firstName == studentName)
//     {
//         found = true
//         studentInfo(student)
//         break;
//     }
// }

// if (found == false) {
// //     alert ('Studentas nerastas')
// }

//---------------------------------------------------------------------------------------------
// let names = ['Jonas', 'Andrius', 'Ieva', 'Karolis']; //masyvas
// names = names.join(','); //names tampa stringu

// names = names.split(',');

// names.push('Giedrius');//priverstinai ideda papildoma reiksme i masyvo gala

// names.unshift('Kristina')//ideda i prieki reiksme

// names.shift('Kristina')//pasalina is priekio

// names.pop() //numeta paskutine reiksme prideta

// names.splice(3, 0, 'Gintaras' )

// console.log(names); // isvedimas


//-------------------------------------------------------------------------------------------
// let user = prompt('Ivesk vartotojo varda');

// console.log(user)

/*
Reikia sukurti sveciu saraso aplikacija.
Paleidus programa issoka langas ir paklausia kiek sveciu bus sventeje.
Ivedus skaicius - rodomas kitas langas kuriame turime ivesti svecio varda.
Sis langas kartojamas tiek kartu kiek reikia pakviesti sveciu.
Pabaigus duomenu ivedima isvedamas sveciu sarasas.
Bonus uzduotis:
Sukurti masyva blacklist. Jeigu svecias yra blackliste i sarasa jo netraukiame.
*/



// let userCount = prompt('Iveskite kiek sveciu bus sventeje:')
// console.log(userCount)


// let userName = prompt('Iveskite svecio varda')
// console.log(userName)



//--------------------------------------------------------------------------------------------

//Funkcijos deklaravimas
// function syHi(a){
//     return a*2;
// }

// //funkcijos callinimas(saukimas)

// console.log(syHi(5));

// //Anonimine
// // const calc = function(...numbers){
// //     return numbers.reduce((prev, current)=>prev*current);
// // }

// //Anonimine arrow funkcija
// const calc = (...numbers)=>{
//     return numbers.reduce((prev, current)=>prev*current);
// }


// console.log(calc(5,6,8,7,9,6,4,4))


let knygos = {
        fantastika:[
            {
                isbn:'ISBN: 9786094275968',
                leidimoMetai:2023,
                knygosPavadinimas: 'H.G.Wells - Laiko masina',
                puslapiuSkaicius:550,
            },
            {
                isbn:'ISBN: 9786090142486',
                leidimoMetai:2022,
                knygosPavadinimas: 'J.R.R. Tolkien - Hobitas,arba Ten ir atgal',
                puslapiuSkaicius:296,
            },
            {
                isbn:'ISBN: 9786090156094',
                leidimoMetai:2023,
                knygosPavadinimas: 'Stephen King Gyvuneliu kapines',
                puslapiuSkaicius:400,
            },
            {
                isbn:'ISBN: 9786094797583',
                leidimoMetai:2023,
                knygosPavadinimas: 'Sosuke Natsukawa - Apie katina,gelbejusi knygas',
                puslapiuSkaicius:210,
            },
            {
                isbn:'ISBN: 9786090149225',
                leidimoMetai:2022,
                knygosPavadinimas: 'Christopher Paolini - Miegoti juroje zvaigzdziu',
                puslapiuSkaicius:944,
            }
        ],
    
        klasika:[
            {
                isbn:'ISBN: 9789955139829',
                leidimoMetai:2021,
                knygosPavadinimas: 'George Orwell - 1984',
                puslapiuSkaicius:256,
            },
            {
                isbn:'ISBN: 9786094845499',
                leidimoMetai:2022,
                knygosPavadinimas: 'Charles Dickens - Deividas Koperfildas',
                puslapiuSkaicius:800,
            },
            {
                isbn:'ISBN: 9786094842559',
                leidimoMetai:2022,
                knygosPavadinimas: 'George Orwell - Gyvuliu ukis',
                puslapiuSkaicius:112,
            },
            {
                isbn:'ISBN: 9789986398356',
                leidimoMetai:2021,
                knygosPavadinimas: 'Aldous Huxley - Puikus naujasis pasaulis',
                puslapiuSkaicius:264,
            }
        ],
    
        pasakos:[
            {
                isbn:'ISBN: 9789955138433',
                leidimoMetai:2019,
                knygosPavadinimas: 'Kazys Boruta - Dangus griuva',
                puslapiuSkaicius:160,
            },
            {
                isbn:'ISBN: 9786099629575',
                leidimoMetai:2023,
                knygosPavadinimas: 'Marius Marcinkevicius - Peledziukas ir sapnu masina',
                puslapiuSkaicius:40,
            },
            {
                isbn:'ISBN: 9786094797941',
                leidimoMetai:2023,
                knygosPavadinimas: 'Reda Puidziuke - Zvaigzdininkas',
                puslapiuSkaicius:72,
            }
        ]
    }

    for (let kategorija in knygos){
        console.log(`${kategorija} (${knygos[kategorija].length} knygos)`);
        console.log('---------------')
        for(knyga of knygos[kategorija]){
            console.log(knyga.isbn);
            if (knyga.leidimoMetai == 2023) {
                console.log(knyga.leidimoMetai + " " + "Nauja knyga");
            }
            else{
                console.log(knyga.leidimoMetai);
            }
            console.log(knyga.knygosPavadinimas);
            console.log(knyga.puslapiuSkaicius);
            console.log("-------------------")
        }
    }




