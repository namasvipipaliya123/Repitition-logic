    function isPalindrome(num) {
      const originalNum = num;
      let reversedNum = 0;
      while (num > 0) {
        const digit = num % 10;
        reversedNum = (reversedNum * 10) + digit;
        num = Math.floor(num / 10);
      }
      return originalNum === reversedNum;
    }

    function findPalindromes() {
      const inputN = document.getElementById('inputN').value;
      const palindromeNumbers = [];

      for (let i = 1; i <= inputN; i++) {
        if (isPalindrome(i)) {
          palindromeNumbers.push(i);
        }
      }

      const palindromeNumbersText = palindromeNumbers.join(', ');
      document.getElementById('palindromeNumbers').textContent = "Palindrome Numbers: " + palindromeNumbersText;
    }