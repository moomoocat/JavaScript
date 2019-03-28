//1. Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.

//var yourName = prompt('What is your name?');
//
//alert(yourName + ' is = ' + yourName.length + ' characters.');


//2. Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.

//var yourName = prompt('What is your name?');
//
//var yourNum = prompt('Give me a number between 0 and 4:');
//
//alert('Your number is letter number ' + yourNum + ' in your name.');


//3. Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation 

//var yourFirstName = prompt('What is your first name?');
//
//var yourLastName = prompt('What is your last name');
//
//alert('Your name is: ' + yourFirstName + ' ' + yourLastName);



//4.Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.

//var text = 'The quick brown fox jumps over the lazy dog';
//
//var word = 'fox';
//
//var firstWord = text.indexOf(word);
//
//alert('The index of the word fox is ' + firstWord + ' in the sentence "The quick brown fox jumps over the lazy dog.');



//5. Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.

//var text = 'The quick brown fox jumps over the lazy fox';
//
//var word = 'fox';
//
////var secondWord = text.lastIndexOf(word);
//
//alert('The index of the second occurance of "fox" is ' + text.lastIndexOf(word));


//6. Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.

//var text = 'The quick brown fox jumped over the lazy dog';
//
//var yourFullName = prompt('What is your full name?');
//
//var newText = text.replace('the lazy dog', yourFullName);
//
//alert('The quick brown fox jumped over ' + yourFullName + '!');


//7.Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.

//var text = 'The quick brown fox jumps over the lazy dog';
//
//var randomWord = prompt('Type any word, please.');
//
//var randomWord = text.indexOf(randomWord);
//
//alert(randomWord);

//8. Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.
//
//var old_string = 'The quick brown fox jumps over the lazy dog';
//
//var new_string = old_string.slice(31, 43).toUpperCase();
//
//alert(new_string);


//9.Create an application that stores the text “        THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.

//var text = '   THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG   ';
//
//var newText = text.toLowerCase();
//
//alert(newText);

//10.Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.

//const TEXT = 'the quick brown fox jumps over the lazy dog';
//
//const CAPITAL = TEXT.charAt(0).toUpperCase() + TEXT.slice(1)
//
//alert(CAPITAL);
