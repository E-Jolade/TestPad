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

/* 2/6/24 Daily Byte Problem. Jewels and Stones*/

let stonesJewels = function(jewels, stones){
    let common = 0;

    for(let i = 0; i < jewels.length; i++){
        for(let j = 0; j < stones.length; j++){
            if(stones.charAt(j) === jewels.charAt(i)){
                common++;
                break;
            }
        }
    }

    return common;
}

//console.log(stonesJewels("Af", "AaaddfFf"));
//console.log(stonesJewels("AYOPD", "ayopd"));

/* 2/7/24 Daily Byte Problem. Valid Anagram*/

let isAnagram = function(s, t){
    let anagram = []
    for(let i = 0; i < t.length; i++){
        anagram.push(t[i]);
    }

    for(let i = 0; i < s.length; i++){
        for(let j = 0; j < anagram.length; j++){
            if(s.charAt(i) === anagram[j]){
                anagram.splice(j)
            }
        }
    }

    if (anagram.length === 0){
        return true;
    }
    else{
        return false;
    }
}

/*console.log(isAnagram("cat", "tac"))
console.log(isAnagram("program", "function"))*/

/* 2/8/24 Daily Byte Problem. Spot the Difference*/

let spotDifference = function(s, t){
    let diff = '';

    if(s.length === t.length){
        return diff;
    }

    for(let i = 0; i < t.length; i++){
        for(let j = 0; j < s.length; j++){
            if(t[i] !== s[j]){
                diff = t[i];
            }
        }
    }

    return diff;
}

/*console.log(spotDifference("foobar", "barfoot"))
console.log(spotDifference("coding", "ingcod"))
console.log(spotDifference("ide", "idea"))*/

/* 2/9/24 Daily Byte Problem. Intersection of Numbers*/

let interSect = function(nums1, nums2){
    let section = [];
    let pass = false;

    for(let i = 0; i < nums1.length; i++){
        for(let j = 0; j < nums2.length; j++){
            pass = false;
            if(nums2[j] === nums1[i]){
                for(let k = 0; k < section.length; k++){
                    if(section[k] === nums2[j]){
                        pass = true;
                    }
                }
                if(pass !== true){
                    section.push(nums2[j]);
                    break;
                }
            }
        }
    }

    return section;
}

/*console.log(interSect([2,4,4,2], [2,4]));
console.log(interSect([1,2,3,3], [3,3]));
console.log(interSect([2,4,6,8], [1,3,5,7]));*/

/* 2/13 Daily Byte Problem. Validate Characters*/

let validateChars = function(s){
    let isValid = false;

    let leftSide = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            leftSide.push(s[i]);
        }
        if(s[i] === ')' || s[i] === '}' || s[i] === ']'){
            if(leftSide[leftSide.length - 1] === '(' && s[i] === ')'){
                leftSide.pop();
            }
            if(leftSide[leftSide.length - 1] === '{' && s[i] === '}'){
                leftSide.pop();
            }
            if(leftSide[leftSide.length - 1] === '[' && s[i] === ']'){
                leftSide.pop();
            }
        }
    }

    if(leftSide.length === 0){
        isValid = true;
    }

    return isValid;
    
}

/*console.log(validateChars("(){}[]"));
console.log(validateChars("(({[]}))"));
console.log(validateChars("{(})"));*/

/* 2/14 Daily Byte Problem. Compare Keystrokes */

let compareKeystrokes = function(s, t){
    let firstString = '';
    let secondString = '';

    for(let i = 0; i < s.length; i++){
        firstString += s[i];
        if(s[i] === "#"){
            firstString = firstString.replace(/.#/, '');
        }
    }
    for(let i = 0; i < t.length; i++){
        secondString += t[i];
        if(t[i] === "#"){
            secondString = secondString.replace(/.#/, '');
        }
    }

    console.log(firstString)
    console.log(secondString)

    if(firstString === secondString){
        return true;
    }
    else{
        return false;
    }
}

/*console.log(compareKeystrokes("ABC#", "CD##AB"))
console.log(compareKeystrokes("como#pur#ter", "computer"))
console.log(compareKeystrokes("cof#dim#ng", "code")) */

/* 2/15 Daily Byte Problem. Remove Adjacent Duplicates */

let removeAdDupes = function(s){
    let hasDupes = false;
    let counter = 0;

    while(counter !== s.length){
        counter++;
        if(s[counter - 1] === s[counter]){
            s = s.replace(s[counter - 1], '');
            s = s.replace(s[counter - 1], '');
            counter = 0;
        }
    }

    return s;
}

/*console.log(removeAdDupes("abccba"))
console.log(removeAdDupes("foobar"))
console.log(removeAdDupes("abccbefggfe"))*/