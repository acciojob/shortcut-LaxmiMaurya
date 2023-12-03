function shortcut(s1, s2) {
  // your code here
	function shortcut(str1, str2) {
    // Check if either input string is empty
    if (str1.length === 0 || str2.length === 0) {
        return '';
    }

    // Get the initial letters of the input strings
    const initialLetters = str1.charAt(0).toUpperCase() + str2.charAt(0).toLowerCase();

    return initialLetters;
}
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
