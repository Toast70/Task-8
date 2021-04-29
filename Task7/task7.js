function ReverseString(stringR) {

    const reverse = []; // empty array that will be joined in the end
    const length = stringR.length;

    for (let i = length - 1; 1 >= 0; i--) {
        reverse.push(stringR[i]) // push the contents of the first string into the reverse counting from the end
    }
    reverse.join('');
    console.log(reverse);
    return reverse;
}

function SwapCase(CharArr) {
    const newChar = "";
    for (var i = 0; i < CharArr.length; i++) {
        if (CharArr[i] === CharArr[i].toLowerCase()) {
            newChar += CharArr[i].toUpperCase();
        } else {
            newChar += CharArr[i].toLowerCase();
        }
    }
    console.log(newChar);
    return newChar;
}

function toCelcius(array) {
    const Carray = [];
    for (let i = 0; i <= array.length; i++) {
        Carray[i] = (array[i] - 32) * 5 / 9;
    }
    console.log(Carray)
    return Carray
}

function passOrFail(scores) {
    const result = scores.map(
        x => {
            if (x >= 75) {
                return true;
            }
            else {
                return false;
            }
        }
    )
    console.log(result);
    return result;
}

function germanNumbers() {
    const cardinalNumbers = [2, 3, 4, 5, 6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    const combine = [];
    for (let i = 0; i <= cardinalNumbers.length; i++) {
        combine[i] = cardinalNumbers[i] + ' is ' + germanNumbers[i];
    }
    console.log(combine);
}

function returnPrimeNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const primeNums = numbers.filter
        (x => {
            for (let i = 2; i <= Math.sqrt(x); i++) {
                if (x % i == 0) {
                    return false;
                }
            }
            return true;
        }
        )

}

function javaRocks()
{
    const numArray = [];
    for ( let i = 1; i <= 100; i ++)
    {
        numArray[i] = i;
    }

    const newArray = numArray.map(
        x=>
        {
            if(x%3 == 0 && x%5 == 0)
            {
                return 'CSC225 RULES I LOVE JAVASCRIPT'
            }
            else if (x%3 == 0)
            {
                return 'CSC225 RULES'
            }
            else{
                return 'I LOVE JAVASCRIPT'
            }
        }
    )
}