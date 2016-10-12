// setting up some variables to use for our examples. no need to mess with this:
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Rhonda', teaches : 'iOS'},
    { firstname : 'Gil', teaches : 'Java'},
    { firstname : 'Ben', teaches : 'UI'},
    { firstname : 'Jess', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

///////////////////////////////////////////////////////////////////////////////
//                                                      Explorer Mode                                                                    //
///////////////////////////////////////////////////////////////////////////////

// Write a function called `sum` that takes two parameters and returns the sum
// of those 2 numbers.
// write your code here:
function sum (a, b) {
  c = a + b;
  return c;
}
// write your console.log/asserts here:
// i've already written some console.logs and console.asserts for you.
// follow this pattern as you work on the rest of these problems.
console.log('sum of 2 and 3 is ', sum(2,3));
console.assert(sum(2,3) === 5);
console.log('sum of 1 and 0 is ', sum(1,0));
console.assert(sum(1,0) === 1);
console.log('sum of -48 and 5 is ', sum(-48,5));
console.assert(sum(-48,5) === -43);

// -------------------
// Write a function named `avg` that takes 3 parameters and returns the average
// of those 3 numbers.
// write your code here:
function avg (a, b, c) {
  d = (a+b+c)/3;
  return d;
}
// write your console.log/asserts here:
console.log('average of 4, 5, and 6 is ', avg(4, 5, 6));
console.assert(avg(4, 5, 6) === 5);
console.log('average of 20, 25, and 30 is ', avg(20, 25, 30));
console.assert(avg(20, 25, 30) === 25);
console.log('average of 10, 28, and 46 is ', avg(10, 28, 46));
console.assert(avg(10, 28, 46) === 28);
// -------------------
// Write a function called `getLength` that takes one parameter (a string) and
// returns the number of characters in that string
// write your code here:
function getLength (word) {
  return word.length;
}
// write your console.log/asserts here:
console.log('the length of fantastic is ', getLength('fantastic'));
console.assert(getLength('fantastic') === 9);
console.log('the length of cool is ', getLength('cool'));
console.assert(getLength('cool') === 4);
console.log('the length of bananas is ', getLength('bananas'));
console.assert(getLength('bananas') === 7);

// -------------------
// Write a function called `greaterThan` that takes two parameters and
// returns true if the second parameter is greater than the first. Otherwise
// the function should return false.
// write your code here:
function greaterThan(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}
// write your console.log/asserts here:
console.log('4 is greater than 2', greaterThan(2, 4));
console.assert(greaterThan(2, 4) === true);
console.log('21 is greater than 20', greaterThan(20, 21));
console.assert(greaterThan(20, 21) === true);
console.log('50 is greater than 18', greaterThan(18, 50));
console.assert(greaterThan(18, 50) === true);

// -------------------
// Write a function called `greet` that takes a single parameter and returns a
// string that is formated like "Hello, Name!" where *Name* is the parameter
// that was passed in.
// write your code here:
function greet(name){
  return 'Hello, ' + name + '!';
}

// write your console.log/asserts here:
console.log(greet('Jeff'));
console.assert(greet('Jeff') === 'Hello, Jeff!');
console.log(greet('Jess'));
console.assert(greet('Jess') === 'Hello, Jess!');
console.log(greet('Bob'));
console.assert(greet('Bob') === 'Hello, Bob!');

// -------------------
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence. Finally the
// function should return that sentence.
// write your code here:
function madlib(a, b, c, d) {
  sentence = a+' went into a bar with '+b+', they met with '+c+' to talk about '+d;
  return sentence;
}
// write your console.log/asserts here:
console.log(madlib('bob', 'steve', 'jim', 'rico'));
console.assert(madlib('bob', 'steve', 'jim', 'rico') === 'bob went into a bar with steve, they met with jim to talk about rico');

// -------------------
// Write a function called `max` that returns the larger of two numbers
// write your code here:
function max(a, b) {
  if (a>b) {
    return a;
  } else {
    return b;
  }
}
// write your console.log/asserts here:
console.log('the larger between 5 and 9 is ', max(5, 9));
console.assert(max(5, 9) === 9);
console.log('the larger between 10 and 50 is ', max(10, 50));
console.assert(max(10, 50) === 50);
console.log('the larger between 34 and 9 is ', max(34, 9));
console.assert(max(34, 9) === 34);
// -------------------
// Write a function called `maxOfThree` that returns the largest of three
// numbers
// write your code here:
function maxOfThree (a, b, c) {
  if (a>b && a>c) {
    return a;
  } else if (b>a && b>c) {
    return b;
  } else {
    return c;
  }
}
// write your console.log/asserts here:
console.log('the biggest of 11, 18, and 10 is ', maxOfThree(11, 18, 10));
console.assert(maxOfThree(11, 18, 10) === 18);
console.log('the biggest of 40, 18, and 10 is ', maxOfThree(40, 18, 10));
console.assert(maxOfThree(40, 18, 10) === 40);
console.log('the biggest of 11, 18, and 80 is ', maxOfThree(11, 18, 80));
console.assert(maxOfThree(11, 18, 80) === 80);

// ---------------------
// Write a function called `isVowel` that receives a single character as a
// parameter and returns true if it is a vowel, false otherwise.
// write your code here:
function isVowel(letter) {
  if (letter === 'a' || letter ==='e' ||letter === 'i' ||letter === 'o' ||letter === 'u') {
    return true;
  } else {
    return false;
  }
}
// write your console.log/asserts here:
console.log('u is a vowel ', isVowel('u'));
console.assert(isVowel('u') === true);
console.log('i is a vowel ', isVowel('i'));
console.assert(isVowel('i') === true);
console.log('f is not a vowel ', isVowel('f'));
console.assert(isVowel('f') === false);


// ---------------------
// Write a function called `translate` that will translate a text into
// "Rovarspraket". That is, double every consonant and place an occurrence of
// "o" in between. For example, translate("this is fun") should return the
// string "tothohisos isos fofunon".
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `reverse` that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
// write your code here:
function reverse(string) {
  stringArray = string.split('').reverse();
  revString = stringArray.join('');
  return revString;
}
// write your console.log/asserts here:
console.log('the reverse of jackwagon is ', reverse('jackwagon'));
console.assert(reverse('jackwagon') === 'nogawkcaj');
console.log('the reverse of pandas is ', reverse('pandas'));
console.assert(reverse('pandas') === 'sadnap');
console.log('the reverse of people is ', reverse('people'));
console.assert(reverse('people') === 'elpoep');


// ---------------------
// Write a function called `largest` that takes an array of numbers and returns
// the largest number in the array.
// write your code here:
var bigNumber = 0;

function largest(numbers) {
for (var i = 0; i < numbers.length; i++)

  if (numbers[i] > bigNumber){
    bigNumber = numbers[i];
  }
  return bigNumber;
}


// write your console.log/asserts here:
console.log('the largest number in the `numbers` array is ', largest([4, 8, 15, 16, 101]));
console.assert(largest([4, 8, 15, 16, 101]) === 101);


// ---------------------
// Write a function called `longest` that takes an array of strings and returns
// the longest string in the array.
// write your code here:
var longOne = '';

function longest(word) {
  for (var i = 0; i < word.length; i++) {
  {
    if (word[i].length > longOne.length) {
      longOne = word[i];
    }
  }
}

  return longOne;
}
// write your console.log/asserts here:
console.log(longest(['dork', 'badger', 'thing']));
console.assert(longest(['dork', 'badger', 'thing'] === 'badger'));

// ---------------------
// Write a function called `getEvens` that takes an array of numbers and returns
// a new array with only the even numbers from the original array
// write your code here:
myArray = [];
function getEvens (numbers) {
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 ) {
      myArray.push(numbers[i]);
    }
  }
  return myArray;
}

// write your console.log/asserts here:
console.log(getEvens([4, 5, 6, 7]));
console.assert(getEvens([4, 5, 6, 7]) === [4, 6]);

// ---------------------
// Write a function called `getOdds` that takes an array of numbers and returns
// a new array with only the odd numbers from the original array
// write your code here:
myArray = [];
function getOdds (numbers) {
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0 ) {
      myArray.push(numbers[i]);
    }
  }
  return myArray;
}

// write your console.log/asserts here:
console.log(getOdds([4, 5, 6, 7]));
console.assert(getOdds([4, 5, 6])=== [5]);

// ---------------------
// Write a function called `containsIs` that takes an array of strings and
// returns a new array with only the strings which contain the substring `is`
// write your code here:
var newArray = [];

function containsIs (words) {
  for (i = 0; i < words.length; i++) {
    if (words[i].includes('is')) {
      newArray.push(words[i]);
    }
  }
  return newArray;
}
// write your console.log/asserts here:
console.log(containsIs(['this is', 'poo', 'disc is']));

///////////////////////////////////////////////////////////////////////////////
//                                                      Adventurer Mode                                                              //
///////////////////////////////////////////////////////////////////////////////

// ---------------------
// Write a function called `contains` that takes an string AND an array of
// strings and returns a new array with only the strings which contain the
// substring specified string
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `teachersOf` that takes a subject returns only the
// teachers who teach the specified subject.
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `objectMatches` that takes 2 strings and an array of
// objects as parameters. The first string is the value to find inside an
// object. The second string string is the key where you want to look for the
// value inside the objects. The array is the array of objects through which to
// search. The function should return a new array of objects that have the
// specified value in the specified key.
// write your code here:

// write your console.log/asserts here:
console.log('the objects that match javascript teachers are', objectMatches('JavaScript', 'teaches', instructors));

///////////////////////////////////////////////////////////////////////////////
//                                                      Epic Mode                                                                            //
///////////////////////////////////////////////////////////////////////////////

// ---------------------
// Write a function called `getAge` that takes a string in one of these formats:
// '12-25-2016' OR '12/25/2016'. If the input is a valid format, it should
// return the years since the date (aka tell how old someone with that birthday
// would be). If the input is invalid OR if the date is after today's date,
// throw an error in the console that describes what the user did wrong when
// calling the function.
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `isValidPassword` that takes a string password. If
// the password meets the following criteria return true. otherwise return
// false.
    // at least 8 characters
    // contains at least one number
    // contains at least one of the following: . , ! $ &
    // contains at least one capital letter and one lowercase letter
// write your code here:

// write your console.log/asserts here:
