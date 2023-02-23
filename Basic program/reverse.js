function reverseNumber(num) {
    let reversedNum = 0;
    let remainder = 0;
  
    while (num >0) {
      remainder = num % 10;
      reversedNum = (reversedNum * 10) + remainder;
      num = Math.floor(num / 10);
    }
  
    return reversedNum;
  }
  

  var num=1001;
  var a=reverseNumber(num);
  console.log(a);
