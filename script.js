 let jsonPracownicy = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}

console.log(jsonPracownicy); // nie zdefiniowany

console.log(jsonPracownicy.pracownicy);

// jsonPracownicy.pracownicy.forEarch(function(pracownik) {
// // console.log(pracownik.firstName + ' ' + pracownik.lastName)
// console.log(pracownik);
//  })

jsonPracownicy.pracownicy.forEach((record) => console.log(record));
jsonPracownicy.pracownicy.forEach(
    (record,index) => 
    console.log(index,record.firstName,record.lastName))
/*
Pobierz do zmiennej jsonPracownicy poniższy obiekt:

{
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}

Wyświetl go w konsoli, a następnie za pomocą pętli forEach przeiteruj
 po każdym pracowniku, oraz wyświetl 
 w konsoli index elementu tablicy oraz imie i nazwisko pracownika.

Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it
 */
