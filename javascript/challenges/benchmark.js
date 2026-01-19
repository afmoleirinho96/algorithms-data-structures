
/**
 * Utility method to run benchmarks.
 * @param testFunction
 * @param testStockProfit
 * @param testTarget
 */
export class Benchmark {

    runTest(testFunction, ...args) {
        console.log('|------- Benchmark -------|');
        console.log('Running function: ', testFunction.name);
        let start = performance.now();
        let result  = testFunction(...args)
        let end = performance.now();
        console.log('Duration in (ms) : ', end - start);
        console.log(`${testFunction.name} Return: ${result}`);
    }
}


/*

export const testBenchmark = () => {
    runTest(testFunction, ...args) {
        console.log('|------- Benchmark -------|');
        console.log('Running function: ', testFunction.name);
        let start = performance.now();
        let result  = testFunction(...args)
        let end = performance.now();
        console.log('Duration in (ms) : ', end - start);
        console.log(`${testFunction.name} Return: ${result}`);
    }
}*/
