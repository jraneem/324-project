/*
 * an interface class  
 */
  
   public interface PriorityQueuez<T> {
    
    abstract void insert(T v, double p);

    /*
     delete the min Vertex and return it 
     */
    abstract Vertex deleteMin();

    /*
      v an obeject ofton Vertex
      p the value of Priority
     */
    abstract void decreaseKey(T v,int  p);
}