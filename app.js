//------JavaScript Assignment task from chap 21 - 40-------------------------//
//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//-------------------------Chapter 21-25----------------------------------------//
//-------------------------Chapter 21-25 task 01--------------------------------//
// 1. Write a program that takes two user inputs for first and
//  last name using prompt and merge them in a new variable titled fullName. 
// Greet the user using his full name?
//---------------------------------------------------------------------------//
//--------------------------solution-----------------------------------------//
//----------------------------------------------------------------------------//
// var fName = prompt('Enter your first name:');
// var lName = prompt('Enter your last name:');
// var fullName = fName+lName;
// alert(`Welcome ${fullName}`);
//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//-------------------------Chapter 21-25 task 02--------------------------------//
//2.Write a program to take a user input about his favorite mobile phone model. 
//Find and display the length of user input in your browser?
//---------------------------------------------------------------------------//
//--------------------------solution-----------------------------------------//
//----------------------------------------------------------------------------//
// var userInput = prompt('Enter your favrouite mobile phone model?');
// var lengthInput = userInput.length;
// document.write(`${userInput} <br> Length:${lengthInput}`);
//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//-------------------------Chapter 21-25 task 03--------------------------------//
// Write a program to find the index of letter “n” in the word “Pakistani”
// and display the result in your browser ?
//---------------------------------------------------------------------------//
//--------------------------solution-----------------------------------------//
//--------------------------------------------------------------------------//
// var countryName = 'Pakistan';
// var indexNumber = countryName.indexOf('n');
// console.log(`Index of n is : ${indexNumber}`);
//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//-------------------------Chapter 21-25 task 04--------------------------------//
// 4. Write a program to find the last index of letter “l” in the
//  word “Hello World” and display the result in your browser?
//---------------------------------------------------------------------------//
//--------------------------solution-----------------------------------------//
//--------------------------------------------------------------------------//
// var word = 'Hello World';
// var lastIndex = word.lastIndexOf('l');
// console.log(`In ${word} the last l is at index: ${lastIndex}`);
//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//-------------------------Chapter 21-25 task 05--------------------------------//
// Write a program to find the character at 3rd index in the word “Pakistani”
//  and display the result in your browser.
//---------------------------------------------------------------------------//
//--------------------------solution-----------------------------------------//
//--------------------------------------------------------------------------//
// var country = 'Pakistan';
// var indexFinde = country.charAt(3);
// console.log(`In ${country} at 3rd index there is a character : ${indexFinde}`);
//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//-------------------------Chapter 21-25 task 06--------------------------------//
//6. Repeat Q1 using string concat() method.?
//---------------------------------------------------------------------------//
//--------------------------solution-----------------------------------------//
//--------------------------------------------------------------------------//
// var fName = prompt('Enter your first name:');
// var lName = prompt('Enter your last name:');
// var fullName = fName.concat(lName)
// alert(`Welcome ${fullName}`);
//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//-------------------------Chapter 21-25 task 07--------------------------------//
// Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad”
//  and display the result in your browser?
//---------------------------------------------------------------------------//
//--------------------------solution-----------------------------------------//
//--------------------------------------------------------------------------//
// var cityName = 'Hyderabad';
// var replaceCity = cityName.replace('Hyder','Islam');
// console.log(`${cityName} has been change to ${replaceCity}`);

//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//-------------------------Chapter 21-25 task 08--------------------------------//
// 8. Write a program to replace all occurrences of
//  “and” in the string with “&” and display the result in your browser.
//  var message = “Ali and Sami are best friends. They play cricket and football together.”;
//---------------------------------------------------------------------------//
//--------------------------solution-----------------------------------------//
//--------------------------------------------------------------------------//
//  var message = 'Ali and Sami are best friends. They play cricket and football together';
// var replaceMessage = message.replace(/and/g,'&');
// console.log(replaceMessage);

//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//-------------------------Chapter 21-25 task 09--------------------------------//
// 9. Write a program that converts a string “472” to a number 472. 
// Display the values & types in your browser.
//---------------------------------------------------------------------------//
//--------------------------solution-----------------------------------------//
//--------------------------------------------------------------------------//
// var stringValue = '472';
// var numValue = parseInt(stringValue);
// console.log(`Type of ${stringValue} is ${typeof(stringValue)}`);
// console.log(`Type of ${numValue} is ${typeof(numValue)}`);

//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//-------------------------Chapter 21-25 task 10--------------------------------//
// 10. Write a program that takes user input. Convert and show the input in capital letters.?
//---------------------------------------------------------------------------//
//--------------------------solution-----------------------------------------//
//--------------------------------------------------------------------------//

// var nameInput = 'yasir';
// var changeCase = nameInput.toUpperCase();
// console.log(nameInput);
// console.log(changeCase);
//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//-------------------------Chapter 21-25 task 11--------------------------------//
// 10. Write a program that takes user input. Convert and show the input in title.?
//---------------------------------------------------------------------------//
//--------------------------solution-----------------------------------------//
//--------------------------------------------------------------------------//

// var nameInput = 'yasir';
// var firstIndex = nameInput.slice(0,1);
// firstIndex = firstIndex.toUpperCase();
// var otherIndex = nameInput.slice(1);
// console.log(nameInput);
// console.log(firstIndex+otherIndex);

//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//-------------------------Chapter 21-25 task 12--------------------------------//
// 12. Write a program that converts the variable num to string. var num = 35.36 ;
//  Remove the dot to display “3536” display in your browser.
//---------------------------------------------------------------------------//
//--------------------------solution-----------------------------------------//
//--------------------------------------------------------------------------//
// var num = 35.36;
// var numString = num + '';
// var numReplace = numString.replace('.','');
// var numInt = parseInt(numReplace);
// console.log(num);
// console.log(numInt);
//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//-------------------------Chapter 21-25 task 13--------------------------------//
// 13. Write a program to take user input and store username in a variable.
//  If the username contains any special symbol among [@ . , !],
//  prompt the user to enter a valid username. For character codes of [@ 
// var userName = prompt('Enter your Name');
// var arrayValue = userName.split('');

// asciiKeys = [];
// for (var i = 0; i < arrayValue.length; i ++){
//   asciiKeys.push(arrayValue[i].charCodeAt(0));
//   if( asciiKeys[i] == 44 || asciiKeys[i] == 46 || asciiKeys[i] == 33 || asciiKeys[i] == 64){
//     alert('Username can not contain the special character');
// }
// }
// // console.log(asciiKeys);

//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//-------------------------Chapter 21-25 task 14--------------------------------/
// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//  Write a program to enable “search by user input” in an array. After searching,
//   prompt the user whether the given item is found in the list or not. 
//   Note: Perform case insensitive search. Whether the user enters cookie,
//  Cookie, COOKIE or coOkIE, program should inform about its availability. Example:
//---------------------------------------------------------------------------//
//--------------------------solution-----------------------------------------//
//--------------------------------------------------------------------------//
// var listItems = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// var userSearch = prompt('Enter the product name');


// var listItems = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// var userSearch = prompt('Enter the product name');
// userSearch = userSearch.toLowerCase();
// if (listItems.indexOf(userSearch) >= 0){
//   console.log('Match');
// }
// else{
//   console.log('not match');
// }

//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//-------------------------Chapter 21-25 task 14--------------------------------/
// 15. Write a program to take password as an input from user.
//  The password must qualify these requirements: 
//    a.  It should contain alphabets and numbers 
//    b.  It should not start with a number
//    c.  It must at least 6 characters long 
//        If the password does not meet above requirements,
//      prompt the user to enter a valid password.
//      For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
//---------------------------------------------------------------------------//
//--------------------------solution-----------------------------------------//
//--------------------------------------------------------------------------//

// var userPassword = prompt('Enter your password');
// var arrayValue = userPassword.split('');
// console.log(arrayValue);

// asciiKeys = [];
// for (var i = 0; i < arrayValue.length; i++){
//    asciiKeys.push(arrayValue[i].charCodeAt(0));


// }
// console.log(asciiKeys);
// if(asciiKeys == ''){
//     alert( 'Please write the password');

// }
// else if(asciiKeys[i] > 47 && asciiKeys[i] < 58){
//     alert('Password contain numbers ');
//     // break;
// }


// console.log(asciiKeys[2]);

//    if(asciiKeys[i] < 58 && asciiKeys[i] > 47){
//     alert('Password  contain numbers');
//     continue;
//  }
//  else if(asciiKeys[i] < 65 && asciiKeys[i] > 90){
//      alert('Password contain the Uppercase letter')
//    continue;
//  }
//  else if(asciiKeys[i] < 97 && asciiKeys[i] > 122){
//     alert('Password contain the lowercase letter');
//     continue
// }
// else{
//     alert('Password should contain upperCase,lowerCase and number');
//     break;
// }
 
// }











//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//-------------------------Chapter 21-25 task 16--------------------------------/
// 16. Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”; Display the elements of array in your browser
//---------------------------------------------------------------------------//
//--------------------------solution-----------------------------------------//
//--------------------------------------------------------------------------//
// var university = 'University of karachi';
// var newArray = university.split('');
// for(var i = 0 ; i < newArray.length ; i++ ){
//     document.write(newArray[i]+ '<br>')
// }

//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//-------------------------Chapter 21-25 task 17--------------------------------//
// 17. Write a program to display the last character of a user input.?
//---------------------------------------------------------------------------//
//--------------------------solution-----------------------------------------//
//--------------------------------------------------------------------------//

// var userInput = prompt('Enter the name');
// var lastIndex = userInput.charAt(userInput.length - 1);
// console.log(`Last Index of name ${userInput} is : ${lastIndex}`);

//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//-------------------------Chapter 21-25 task 18--------------------------------//
// 18. You have a string “The quick brown fox jumps over the lazy dog”.
//  Write a program to count number of occurrences of word “the” in given string.
//---------------------------------------------------------------------------//
//--------------------------solution-----------------------------------------//
//--------------------------------------------------------------------------//
// var string = 'The quick brown fox jumps over the lazy dog';
// string = string.toLowerCase(); 
// var stringFind = string.match(/the/g);
// stringFind = stringFind.length;
// console.log(`The word The occur at ${stringFind} times`);
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//-------------------------Chapter 26-30-------------------------------------------------------
//-------------------------Chapter 26-30 task 01 ----------------------------------------------
// 1. Write a program that takes a positive integer from user &
//     display the following in your browser.
//  a. number 
//  b. round off value of the number
//  c. floor value of the number
//  d. ceil value of the number
//---------------------------------------------------------------------------------------------
//--------------------------solution-----------------------------------------------------------
//---------------------------------------------------------------------------------------------
// var userNumber = +prompt("Enter a decimal number like 3.454");
// console.log(userNumber);
// var roundNumber = Math.round(userNumber);
// console.log(roundNumber);
// var floorValue = Math.floor(userNumber);
// console.log(floorValue);
// var ceilValue = Math.ceil(userNumber);
// console.log(ceilValue);
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//-------------------------------Chapter 26-30 task 02-----------------------------------------
// 2. Write a program that takes a negative floating point number from user
//    & display the following in your browser.
//   a. number
//   b. round off value of the number 
//   c. floor value of the number
//   d. ceil value of the number

//---------------------------------------------------------------------------------------------
//--------------------------solution-----------------------------------------------------------
//---------------------------------------------------------------------------------------------

// var userNumber = +prompt("Enter a negative decimal number like -3.454");
// console.log(userNumber);
// var roundNumber = Math.round(userNumber);
// console.log(roundNumber);
// var floorValue = Math.floor(userNumber);
// console.log(floorValue);
// var ceilValue = Math.ceil(userNumber);
// console.log(ceilValue);

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//-------------------------------Chapter 26-30 task 03-----------------------------------------
// 3. Write a program that displays the absolute value of a number. 
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

//---------------------------------------------------------------------------------------------
//--------------------------solution-----------------------------------------------------------
//---------------------------------------------------------------------------------------------

// var userInput = +prompt('Enter a number for absolute value');
// console.log(Math.abs(userInput))

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//-------------------------------Chapter 26-30 task 04-----------------------------------------
// 4. Write a program that simulates a dice using random() method of JS Math class.
//  Display the value of dice in your browser.:
//---------------------------------------------------------------------------------------------
//--------------------------solution-----------------------------------------------------------
//---------------------------------------------------------------------------------------------
// var randomDice = Math.floor(6*Math.random())+1;
// console.log(`random dice value is : ${randomDice}`)

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//-------------------------------Chapter 26-30 task 05-----------------------------------------

// 5. Write a program that simulates a coin toss using random() method of JS Math class. 
// Display the value of coin in your browser.

//---------------------------------------------------------------------------------------------
//--------------------------solution-----------------------------------------------------------
//---------------------------------------------------------------------------------------------
// var randomDice = Math.floor(2*Math.random())+1;
// console.log(`${randomDice}  random coin value : ${ randomDice == 1 ? 'HEAD' : 'TAIL'}`)

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//-------------------------------Chapter 26-30 task 06-----------------------------------------
// 6. Write a program that shows a random number between 1 and 100 in your browser
//---------------------------------------------------------------------------------------------
//--------------------------solution-----------------------------------------------------------
//---------------------------------------------------------------------------------------------

// var randomNum = Math.floor(100*Math.random())+1;
// console.log(`Random number between 1 and 100 is  : ${randomNum}`);

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//-------------------------------Chapter 26-30 task 07-----------------------------------------

// 7. Write a program that asks the user about his weight.
//  Parse the user input and display his weight in your browser. Possible user inputs can be:
//  a. 50 
//  b. 50kgs 
//  c. 50.2kgs 
//  d. 50.2kilograms
//---------------------------------------------------------------------------------------------
//--------------------------solution-----------------------------------------------------------
//---------------------------------------------------------------------------------------------

        //    var userInput = prompt('Enter your weight like  78 kg'); 
        //     var matches = userInput.match(/(\d+)/); 
              
        //     if (matches) { 
        //                  console.log(` Your weigth is ${matches[0]} killogram`); 
        //     }
           
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//-------------------------------Chapter 26-30 task 08----------------------------------------
//  8. Write a program that stores a random secret number from 1 to 10 in a variable.
//  Ask the user to input a number between 1 and 10.
//  If the user input equals the secret number, congratulate the user

// var randomNumber = Math.floor(10*Math.random()+1);
// // console.log(randomNumber);
// var userInput = +prompt('Enter a number between 1 and 10');
// if(userInput == randomNumber){
//     console.log('Congratulation you enter the guessed number');
// }
// else{
//     console.log('Try again');
// }