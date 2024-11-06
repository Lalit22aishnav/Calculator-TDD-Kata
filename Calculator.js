
//BY LALIT VAISHNAV
function add(stringVal, delimiter = ",") {

    let sumOfNumber = 0, 
        sumNumberConcat = '', 
        stringValueArr = [], 
        getMinusSymble = false, 
        minusNumberConcat = '', 
        negativeNumberArr = [];

    if (stringVal.length === 0) {
        return 0;
    }

    stringValueArr = stringVal.split(delimiter);

    for (let index = 0; index < stringValueArr.length; index++) {
        const element = stringValueArr[index];

        for (let i = 0; i < element.length; i++) {

            // MINUS VALUE VERIFICATion
            getMinusSymble = element[i] == '-' ? true : getMinusSymble;


            if (getMinusSymble && !isNaN(element[i + 1])) {
                minusNumberConcat += element[i];
            } else {
                if (minusNumberConcat.length > 0) {
                    minusNumberConcat += element[i];
                    negativeNumberArr.push(minusNumberConcat);
                }
                minusNumberConcat = '';
                getMinusSymble = false;
            }

            // IF ALL RIGHT THEN SUM THE VALUES
            if (!getMinusSymble && minusNumberConcat.length == 0 && !isNaN(element[i])) {
                sumNumberConcat = sumNumberConcat + element[i];
                if (isNaN(element[i + 1])) {
                    sumOfNumber = sumOfNumber + parseInt(sumNumberConcat);
                    sumNumberConcat = '';
                }
            }
        }
    }

    if (negativeNumberArr.length == 1) {
        return `negative numbers not allowed ${negativeNumberArr[0]}`
    } else if (negativeNumberArr.length > 1) {
        return `negative numbers not allowed ${negativeNumberArr.join(',')}`
    } else {
        return sumOfNumber;
    }
}

//TEST CASES
console.log(add(""))
console.log(add("0,0,-0,0*0*0"))
console.log(add("1"))
console.log(add("1,"))
console.log(add("1,1"))
console.log(add("1//1"))
console.log(add("1//1A2"))
console.log(add("1//12"))
console.log(add("//,\n1;*&&*25;1", ";"));
console.log(add("1,//*12asdf7=12//3"))
console.log(add("-365"))
console.log(add("-375A-65"))
console.log(add("365-365*165"))
console.log(add("123,:-25,-*98;-124:1"));


//RESULT
// 0
// negative numbers not allowed -0
// 1
// 1
// 2
// 2
// 4
// 13
// 27
// 35
// negative numbers not allowed -365
// negative numbers not allowed -375,-65
// negative numbers not allowed -365
// negative numbers not allowed -25,-124



