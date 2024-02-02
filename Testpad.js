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

//console.log(isPalindrome("A man, a plan, a canal: Panama."))

/* 1/25 Daily Byte Problem. Vacuum Cleaner Route*/

let vacuumCleaner = function(route){
    let leftRight = 0;
    let upDown = 0;
    if(route.length % 2 !== 0){
        return false;
    }
    for(let i = 0; i < route.length; i++){
        if(route.charAt(i) === "L" || route.charAt(i) === "R"){
            leftRight++;
        }
        else if(route.charAt(i) === "U" || route.charAt(i) === "D"){
            upDown++;
        }
    }
    if(leftRight % 2 === 0 && upDown % 2 === 0){
        return true;
    }
    else{
        return false;
    }

};

//console.log(vacuumCleaner("RUULLDRD"));

/* 1/26 Daily Byte Problem. Correct Capitalization*/

let correctCapital = function(cap){
    let correct = true;

    if(cap.charAt(0) === cap.charAt(0).toLowerCase()){
        for(let i = 0; i < cap.length; i++){
            if(cap.charAt(i) !== cap.charAt(i).toLowerCase()){
                correct = false;
                console.log("not all lower")
            }
        }
    }
    
    else if(cap.charAt(0) === cap.charAt(0).toUpperCase()){
        for(let i = 1; i < cap.length; i++){
            if(cap.charAt(i) !== cap.charAt(i).toUpperCase()){
                correct = false;
                console.log("Not all caps")
            }
        }
        correct = true;
        for(let i = 1; i < cap.length; i++){
            if(cap.charAt(i) !== cap.charAt(i).toLowerCase()){
                correct = false;
                console.log("Not sentence")
            }
        }
    }
    
    return correct;
}

//console.log(correctCapital("Computer"));

/* 2/1/24 Daily Byte Problem. Longest Common Prefix (Incomplete)*/

let longestPrefix = function(s) {
    let longest = "";
    let prefix = [];
    s.sort((a,b) => b.length - a.length)
    for(let i = 0; i < s.length; i++){
        for(let j = 0; j < s[0].length; j++){
            prefix.push(s[i].charAt(0))
            break;
        }
    }
    
    return prefix;
}

//console.log(longestPrefix(["color", "colorado", "cold"]));
//console.log(longestPrefix(["spot", "spotty", "spotted"]));
//console.log(longestPrefix(["a", "b", "c"]));

/* 2/2/24 Daily Byte Problem. Two Sum */

let twoSum = function(a, sum){
    let isSum = false;

    for(let i = 0; i < a.length; i++){
        for(let j = 1; j < a.length; j++){
            if(a[i] + a[j] === sum){
                isSum = true;
            }
        }
    }

    return isSum;
}

/*let k = 10;
console.log(twoSum([1, 3, 8, 2], k))
let kk = 8;
console.log(twoSum([3, 9, 13, 7], kk))*/