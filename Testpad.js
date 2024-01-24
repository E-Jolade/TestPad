/* 1/23 Daily Byte Problem. Reverse String */ 

let reverseString = function(s) {
    let reverse = [];
    for(let i = s.length; i >= 0; i--){
        reverse.push(s.charAt(i))
    }
    reverse = reverse.toString();
    reverse = reverse.replace(/,*/g, "");
    return reverse;
};

//console.log(reverseString("The Daily Byte"));


/* 1/24 Daily Byte Problem. Valid Palindrome */

let isPalindrome = function(s) {
    const regex = new RegExp(/[\W_]*/g);
    let palindrome = s.toLowerCase().replace(regex, '');

    for(let i = 0; i < s.length / 2; i++){
        if(palindrome[i] !== palindrome[palindrome.length - i - 1]){
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama."))