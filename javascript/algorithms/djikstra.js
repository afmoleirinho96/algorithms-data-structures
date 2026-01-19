// Dijkstra's algorithm in JavaScript (ES6)
// `graph` is expected to be an adjacency list like:
// {
//   A: [{ to: 'B', weight: 2 }, { to: 'C', weight: 5 }],
//   B: [{ to: 'C', weight: 1 }],
//   C: []
// }
// It returns an object with the minimum distance from `start` to every other node.

class MinPriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Push with priority (distance)
  push(node, priority) {
    this.heap.push({ node, priority });
    this._siftUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._siftDown(0);
    }
    return top;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  _siftUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.heap[parent].priority <= this.heap[index].priority) break;
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      index = parent;
    }
  }

  _siftDown(index) {
    const length = this.heap.length;
    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let smallest = index;

      if (left < length && this.heap[left].priority < this.heap[smallest].priority) {
        smallest = left;
      }
      if (right < length && this.heap[right].priority < this.heap[smallest].priority) {
        smallest = right;
      }
      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}

export function dijkstra(graph, start) {
  // Distances will hold the shortest distance from start to each node.
  const distances = {};
  // Keep track of visited nodes so we don't process them twice.
  const visited = new Set();
  // Init distances to Infinity.
  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;

  const pq = new MinPriorityQueue();
  pq.push(start, 0);

  while (!pq.isEmpty()) {
    const { node: current, priority: currentDist } = pq.pop();

    if (visited.has(current)) continue;
    visited.add(current);

    const neighbors = graph[current] || [];
    for (const { to, weight } of neighbors) {
      const newDist = currentDist + weight;
      if (newDist < distances[to]) {
        distances[to] = newDist;
        pq.push(to, newDist);
      }
    }
  }

  return distances;
}

// Example usage (uncomment to test):
// const graph = {
//   A: [ { to: 'B', weight: 4 }, { to: 'C', weight: 2 } ],
//   B: [ { to: 'C', weight: 5 }, { to: 'D', weight: 10 } ],
//   C: [ { to: 'E', weight: 3 } ],
//   D: [ { to: 'F', weight: 11 } ],
//   E: [ { to: 'D', weight: 4 } ],
//   F: []
// };
// console.log(dijkstra(graph, 'A')); // { A: 0, B: 4, C: 2, E: 5, D: 9, F: 20 }