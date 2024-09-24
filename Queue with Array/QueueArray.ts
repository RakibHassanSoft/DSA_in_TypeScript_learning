export default class QueueArray<T> {
    private valueArray: T[] = [];
    private size: number = 0;
    // complexity - O(1)
    push = (value: T) => {
        this.valueArray.push(value);
        this.size++;
    };
    // complexity - O(N)
    pop = (): T | null => {
        if(this.size === 0) return null;
        const value = this.valueArray[0];
        this.valueArray.shift();
        this.size--;
        return value;
    };
    // complexity - O(1)
    front = (): T | null => {
        if(this.size === 0) return null;
        const value = this.valueArray[0];
        return value;
    };
    // complexity - O(1)
    isEmpty = (): boolean => {
        return this.size === 0;
    };
    // complexity - O(1)
    getSize = () => {
        return this.size;
    };
}
