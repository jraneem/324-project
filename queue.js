* first Queue
 * @author Raneem
 */



public class FirstQueue {

    private int[] queue;
    private int MaxSize;
    private int Front;
    private int NumItems;

 
        public FirstQueue(int Size) {
        MaxSize = Size;            
        queue = new int[MaxSize];   
        Front = 0;                
        NumItems = 0;          
    }

    
        public boolean isFull() {
        return (NumItems == MaxSize);
    }


        public boolean isEmpty() {
        return (NumItems == 0);
    }

   
        public int size() {
        return NumItems;
    }


    /* add element to queue
     */
        public void enqueue(int value) {
        queue[(Front + NumItems) % MaxSize] = value;
        NumItems++;
    }


    /*remove the element */
        public int dequeue() {
        int temp = queue[Front];
        // update the location of front
        Front = (Front + 1) % MaxSize;
        // decrement numItems
        NumItems--;
        // return the previous front value
        return temp;
    }

    /*return the first value
     */
        public int peek() {
        return queue[Front];
    }


    /*
     * searching on a value 
     */
        public boolean search(int value) {
        for (int i = 0; i < NumItems; i++) {
            // if the value is found, return true
            if (queue[(Front + i) % MaxSize] == value) {
                return true;
            }
        }
        // If we make it till here, the value was not found in the array.
        return false;
    }

    
        public void PrintQueue() {
        for (int i = 0; i < NumItems; i++) {
            System.out.print(queue[(Front + i) % MaxSize] + ", ");
        }
        // print a newline
        System.out.println();
    }
}// End class FirstQueue 