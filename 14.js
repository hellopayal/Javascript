//Count Vowels in String


function counteVowel(s){
    let count = 0
    let vowel = new Set(['a', 'e', 'i', 'o', 'u'])

    for(let char of s.toLowerCase() ){
       if(vowel.has(char)){
        count++
       }

    }
    return count
}

console.log(counteVowel( "IceCreAm")) 


// reverse only vowels of String
function reverseVowel(s){
    let vowel = new Set(['a', 'e', 'i', 'o', 'u'])
    let arr = s.split("");
    let left = 0;
    let right = arr.length - 1;

   while(left < right){
    while(left < right && !vowel.has(arr[left].toLowerCase())){
        left++;
    }
     while(left < right && !vowel.has(arr[right].toLowerCase())){
        right--;
    }
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++;
    right--
   }
   return arr.join("")
}
console.log(reverseVowel("IceCreAm")); 