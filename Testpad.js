/* 1/23 Daily Byte Problem. Reverse String */ 

var reverseString = function(s) {
    let reverse = [];
    for(let i = s.length; i >= 0; i--){
        reverse.push(s.charAt(i))
    }
    reverse = reverse.toString();
    reverse = reverse.replace(/,*/g, "");
    return reverse;
};

//console.log(reverseString("The Daily Byte"));
