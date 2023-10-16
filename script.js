
let jsonPracownicy = {
  "pracownicy": [
    { "firstName": "Krystian", "lastName": "Dziopa" },
    { "firstName": "Anna", "lastName": "Szapiel" },
    { "firstName": "Piotr", "lastName": "Żmuda" }
  ]
}
// console.log(pracownicy) nie zdfiniowany
console.log(jsonPracownicy);
console.log(jsonPracownicy.pracownicy);

jsonPracownicy.pracownicy.forEach((prac) => console.log(prac));
jsonPracownicy.pracownicy.forEach((wiersz, lp) => console.log(lp, wiersz.firstName, wiersz.lastName));
// jsonPracownicy.pracownicy.forEach((record) => console.log(record));
/*
Pobierz do zmiennej jsonPracownicy poniższy obiekt:

{
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}

Wyświetl go w konsoli, a następnie za pomocą pętli forEach przeiteruj po każdym pracowniku, oraz wyświetl w konsoli index elementu tablicy oraz imie i nazwisko pracownika.

Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it
 */