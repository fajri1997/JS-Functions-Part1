/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName(name) {
  console.log(`hello my name is  ${name} `);
}
printName("aziz");

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(birthYear) {
  currentYear = 2024;
  age = currentYear - birthYear;
  console.log(`my age is  ${age} years old.`);
}
printAge(1997);

/**
 * Task 3:
 * Create a function named `printAgeAndName`
 * - that takes a birth year and your name as parameters,
 * - and prints 'Hello NAME you are AGE years old' on the screen.
 * - Age = current year - birth
 */

function printAgeAndName(age, name) {
  console.log(`Hello ${name} you are  ${age} years old `);
}
printAgeAndName(27, "fajri");

/**
 * Task 4:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello(name, language) {
  if (language === "en") {
    console.log(`hello   ${name} `);
  } else if (language === "es") {
    console.log(`Hola   ${name} `);
  } else if (language === "fr") {
    console.log(`Bonjour   ${name} `);
  } else if (language === "tr") {
    console.log(`Merhaba   ${name} `);
  } else {
    console.log(`sorry we dont have this language   ${name} `);
  }
}
printHello("fajri ", "en");

//this will print "sorry we dont have this language"
printHello("fajri ", "asasas");

// task 4.2 try use switch case as aziz recomnded and we what happend

function printHelloCase(name, language) {
  let greeting;

  switch (language) {
    case "en ":
      greeting = ` Hello ${name}`;
      break;

    case "es ":
      greeting = ` Hola  ${name}`;
      break;

    case "fr ":
      greeting = ` Bonjour ${name}`;
      break;

    case "tr ":
      greeting = ` Merhaba ${name}`;
      break;
    default:
      console.log(`sorry we dont have this language   ${name} `);
      break;
  }
  console.log(greeting);
}

/**
 * Task 5:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(firstNumber, seceondNumber) {
  if (firstNumber > seceondNumber) {
    console.log(`the biggest is ${firstNumber}`);
  } else if (firstNumber === seceondNumber) {
    console.log(`both number are equile `);
  } else if (firstNumber < seceondNumber) {
    console.log(`the biggest is ${seceondNumber} `);
  } else {
    console.log(`please chose number  `);
  }
}
printMax(99, 3);
