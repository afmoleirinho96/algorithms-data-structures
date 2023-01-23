import {Benchmark} from "../benchmark.js";

// Time: O(n), Space: O(n)
const degreeOfArray = (numbers) => {
    let degree = 0;
    let minimumLength = numbers.length;

    let numberFrequency = new Map();
    let numberIndexes = {}

    numbers.forEach((number, index) => {
        degree = getDegree(numberFrequency, number, degree);

        // Update first index and last index that the current number appears.
        updateIndexes(numberIndexes, number, index);
    });

    numberFrequency.forEach((frequency, number) => {

        // Update minimum sub array size. +1 at the end, to return size instead of index based.
        // Eg: [1,0,1] -> last index (2) - first index (0) + 1 = subarray with size 3
        if (frequency === degree) {
            minimumLength = Math.min(minimumLength, (numberIndexes[number].lastIndex - numberIndexes[number].firstIndex) + 1)
        }
    })

    return minimumLength;
};

function getDegree(numberFrequency, number, degree) {
    numberFrequency.set(number, numberFrequency.get(number) + 1 || 1);
    const currentNumberOccurrence = numberFrequency.get(number);

    if (currentNumberOccurrence > degree) {
        degree = currentNumberOccurrence;
    }
    return degree;
}

function updateIndexes(numberIndexes, number, index) {
    if (!numberIndexes[number]) {
        numberIndexes[number] = {firstIndex: index, lastIndex: index};
    } else {
        numberIndexes[number].lastIndex = index;
    }
}


let numbers = [1, 2, 1, 3, 2];


console.log(degreeOfArray(numbers));


/* Or run benchmark */
const benchmark = new Benchmark();
benchmark.runTest(degreeOfArray, numbers);