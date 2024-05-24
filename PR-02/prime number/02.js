    function isPrime(num) {
      if (num <= 1) return false;
      if (num <= 3) return true;

      if (num % 2 === 0 || num % 3 === 0) return false;

      let i = 5;
      while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
      }

      return true;
    }

    function findPrimes() {
      const inputN = document.getElementById('inputN').value;
      const primeNumbers = [];

      for (let i = 1; i <= inputN; i++) {
        if (isPrime(i)) {
          primeNumbers.push(i);
        }
      }

      const primeNumbersText = primeNumbers.join(', ');
      document.getElementById('primeNumbers').textContent = "Prime Numbers: " + primeNumbersText;
    }