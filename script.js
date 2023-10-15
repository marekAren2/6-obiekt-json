
const jsonPracownicy = {
  "pracownicy": [
    { "firstName": "Krystian", "lastName": "Dziopa" },
    { "firstName": "Anna", "lastName": "Szapiel" },
    { "firstName": "Piotr", "lastName": "Żmuda" }
  ]
}
// console.log(pracownicy) nie zdfiniowany
console.log(jsonPracownicy;

jsonPracownicy.forEarch(function(pracownik) {
  // console.log(pracownik.firstName + ' ' + pracownik.lastName)
  console.log(pracownik);
})


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