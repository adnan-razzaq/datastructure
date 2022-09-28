// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }

    size(heap = this.heap) {
        return heap.length - 1;
    }

    getLeftChildIdx(parentIdx) {
        return 2 * parentIdx + 1;
    }
    getRightChildIdx(parentIdx) {
        return 2 * parentIdx + 2;
    }

    getParentIdx(childIdx) {
        return Math.floor((childIdx - 1) / 2);
    }

    swap(i, j, heap = this.heap) {
        const temp = heap[j];
        heap[j] = heap[i];
        heap[i] = temp;
    }

    buildHeap(array) {
        // Write your code here.
        let firstParentIdx = this.getParentIdx(array.length - 1);

        for (let index = firstParentIdx; index >= 0; index--) {
            this.siftDown(index, array.length - 1, array);
        }
        return array;
    }

    siftDown(idx = 0, endIdx = this.size(), heap = this.heap) {
        // Write your code here.
        let childOneIdx = this.getLeftChildIdx(idx);

        while (childOneIdx <= endIdx) {
            let childTwoIdx =
                this.getRightChildIdx(idx) <= endIdx
                    ? this.getRightChildIdx(idx)
                    : -1;
            let idxToSwap;
            if (childTwoIdx != -1 && heap[childTwoIdx] < heap[childOneIdx]) {
                idxToSwap = childTwoIdx;
            } else {
                idxToSwap = childOneIdx;
            }
            if (heap[idxToSwap] < heap[idx]) {
                this.swap(idx, idxToSwap, heap);
                idx = idxToSwap;
                childOneIdx = this.getLeftChildIdx(idx);
            } else {
                return;
            }
        }
    }

    siftUp(idx = this.size(), heap = this.heap) {
        // Write your code here.
        let parentIdx = this.getParentIdx(idx);
        while (idx > 0 && heap[idx] < heap[parentIdx]) {
            this.swap(idx, parentIdx, heap);
            idx = parentIdx;
            parentIdx = this.getParentIdx(idx);
        }
    }

    peek() {
        // Write your code here.
        return this.heap[0];
    }

    // remove root
    remove() {
        // Write your code here.
        this.swap(0, this.size());
        let nodeToRemove = this.heap.pop();
        this.siftDown();
        return nodeToRemove;
    }

    /* 
     1 Add value at end of array
     2 siftUp to satisfy the complete binary tree
     */
    insert(value) {
        // Write your code here.
        this.heap.push(value);
        this.siftUp();
    }
}

// Do not edit the line below.
exports.MinHeap = MinHeap;
