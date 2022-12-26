
//even - Check if even
const even = num => {
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }
}


//odd - Check if odd
const odd = num => {
    if (num % 2 == 1) {
        return true
    } else {
        return false
    }
  }


// How many even numbers? - Check how many evens in an array
const howManyEvens = arr => {
    let output = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0 || arr[i] % -2 == 0) {
            output.push(arr[i])
        }
    }
    return output.length;
}


//How many odd numbers? - Check how many odd numbers there are in the array
const howManyOdds = arr => {
    let output = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1 || arr[i] % -2 == -1) {
            output.push(arr[i])
        }
    }
    return output.length;
}


//Capitalize
const capitalize = (word) => {
    let lowerCase = word.toLowerCase();
    let split = lowerCase.split("");
    split[0] = split[0].toUpperCase();
    return split.join("");
}


//Swapcase
const swapcase = (word) => {
    let arr = word.split("");
    let output = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            output.push(arr[i].toLowerCase())
        } else if (arr[i] === arr[i].toLowerCase()) {
            output.push(arr[i].toUpperCase())
        } else {
            //pass
        }
    }
    output.join("")
    return output
  }


//Swapcase (alternative) - Swap Cases using the map() method
const swapcase2 = word => {
    word = word.split("")
    let newWord = word.map(x => x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase())
    return newWord.join("")
}


//Camelcase - Swap underscore for camelcase
const camelCase = str => {
    //Getting everything lower case first, then splitting the two words at the underscore
    str = str.toLowerCase();
    let twoWords = str.split("_");
    //Convert the first letter of the second word to upper case then rejoin word
    let camelCased = twoWords[1].split("");
    camelCased[0] = camelCased[0].toUpperCase();
    camelCased = camelCased.join("");
    //Join both words together
    return [twoWords[0], camelCased].join("");
  }


//Snakecase - Swap CamelCase for underscore
const snakeCase = str => {
    //Split the words into an array of letters
    let arr = str.split("");
    let output = [];
    //For loop to find upper case letter, then insert an underscore behind it and convert it to lower case
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toLowerCase()) {
            output.push(arr[i])
        } else if (arr[i] === arr[i].toUpperCase()) {
            arr[i] = "_" + arr[i]
            output.push(arr[i].toLowerCase())
        } else {
            //pass
        }
    }
    //Join the new array of letters together
    return output.join("");
  }


  //Snakecase (alternative) - Swap CamelCase for underscore using the .map() method and ternary operator
  const snakeCase2 = str => {
    //Split the string into an array
    let arr = str.split("");
    //Using the .map() method to convert upper case letter to lower case letter and insert underscore
    const output = arr.map(x => x === x.toUpperCase() ? x = "_" + x.toLowerCase() : x.toLowerCase())
    return output.join("")
  }


//Swap 2 - Take in a word that returns an object with original string and string with swapped cases
const swap2 = (word) => {
    const new_word = word.split("").map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join("");
    const obj = {
        original: word,
        swapcased: new_word
    }
    return obj
  }

//Capit2 - Take in a string and returns capitalised string
const capit2 = (word) => {
    let lowerCaseWord = word.toLowerCase();
    let upperCaseLetter = lowerCaseWord[0].toUpperCase();
    let new_word = upperCaseLetter + lowerCaseWord.slice(1, lowerCaseWord.length)
    const object = {
        original: word,
        capitalised: new_word
    }
    return object
}

//Capit2 (alternative) - Take in a string and returns capitalised string
const capit3 = (word) => {
    let new_word = word.toLowerCase().split("");
    new_word[0] = new_word[0].toUpperCase();
    const object = {
        original: word,
        capitalised: new_word.join("")
    };
    return object
}


//sum - A function that takes in an array and returns the sum of its elements
const sum = (arr) => {
    let output = 0;
    for (let i = 0; i < arr.length; i++) {
        output += arr[i];
    }
    return output;
}

//sum (alternative using the reduce method)
const sum2 = (arr) => {
    const output = arr.reduce((acc, val) => acc + val);
    return output;
}

//average - Take in an array and return average of the integers
const avg = (arr) => {
    let sumOfNums = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOfNums += arr[i];
    }
    let output = (sumOfNums / arr.length).toFixed(2);
    return output;
}

//average (alternative) - Using the reduce method
const avg2 = (arr) => {
    const sumOfNums = arr.reduce((acc, val) => acc + val);
    const output = (sumOfNums / arr.length).toFixed(2);
    return output;
}


//about_you
const object = {
    name: Mark,
    age: 22,
    favouriteHobby: running,
    eyeColour: blue,
    hairColour: brown,
    favouriteFood: roastMeal
};

//array_info
const info = (arr) => {
    const array = arr
    const length = arr.length;
    const average = arr.reduce((acc, val) => acc * val) / length;
    const sum = arr.reduce((acc, val) => acc + val);
    const even = (arr.filter(x => x % 2 === 0)).length;
    const odd = (arr.filter(x => x % 2 !== 0)).length;
    const object = {
        content: array,
        elements: length,
        average: average,
        sum: sum,
        howManyEvenNumbers: even,
        howManyOddNumbers: odd,
    }
    return object
}

//bonus - functio that returns an abject with the number of primitive types in the array
const diffTypes = (arr) => {
    const string = arr.filter(x => typeof x === "string").length;
    const array = arr.filter(x => typeof x === "object" && x instanceof Array).length;
    const boolean = arr.filter(x => typeof x === "boolean").length;
    const object = arr.filter(x => typeof x === "object" && !(x instanceof Array)).length;
    const number = arr.filter(x => typeof x === "number").length;
    const output = {
        string: string,
        array: array,
        boolean: boolean,
        object: object,
        number: number,
    }
    return output;
}
