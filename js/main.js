let sentence1 = 'Uwielbiam JavaScript';
let sentence2 = 'Jestem świetnym programistą';




function findLongestSentence (str1, str2) {
    if (str1.length < str2.length) {
       return sentence2; 
  } else (str1.length > str2.length);
       return sentence1;
  } 
   console.log (findLongestSentence (sentence1, sentence2));