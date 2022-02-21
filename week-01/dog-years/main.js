let myAge = 21; // initialized a variable to store my age.

let earlyYears = 2; // initialized a variable to store 2 years which would be later used for multiplication.
earlyYears *= 10.5;

let laterYears = myAge - 2; // initialized a variable to store the number of years I have been alive after I was 2 years old.
laterYears *= 4; // multiply the laterYears variable by 4 to get the number of dog years after 2 years.

let myAgeInDogYears = earlyYears + laterYears; // initialized a variable to store the total number of years I have been alive in dog years.

let myName = "Salik".toLowerCase(); // initialized a variable to store my name.

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
