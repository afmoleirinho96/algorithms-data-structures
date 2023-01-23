// Time: O(n), Space: O(n)
import {Benchmark} from "../benchmark.js";

const stockPairs = (stocks, target) => {

    // Early return if: Target is 0, we don't have valid stocks (null), stocks aren't array or there's no pair.
    if (target <= 0 || !Array.isArray(stocks) || stocks.length <= 1) {
        return 0;
    }

    let values = new Map();
    let distinctPairsCount = 0;
    let stocksVisited = new Set();

    stocks.forEach((stock) => {
        const complement = target - stock;

        // The complement exists and current stock hasn't been visited/added yet.
        if (values.has(complement) && !stocksVisited.has(stock)) {
            distinctPairsCount += 1;

            // It's important to add both, otherwise we might handle the case of duplicated (9, 3) but (3, 9) would still be added!
            stocksVisited.add(stock);
            stocksVisited.add(complement);
        }

        values.set(stock, stocks[stock])
    })

    return distinctPairsCount;
};


let stocksProfit = [5, 7, 9, 13, 11, 6, 6, 3, 3];
let target = 12;

console.log(stockPairs(stocksProfit, target));


/* Or run benchmark */
const benchmark = new Benchmark();
benchmark.runTest(stockPairs, stocksProfit, target);


