package arrays;

import java.util.Arrays;
import java.util.List;

/**
 * ValidateSubsequence
 */
public class ValidateSubsequence {

 public static boolean isValidSubsequence(
    List<Integer> array, List<Integer> sequence
  ) {
    int seqIdx = 0;
    
    for (int i = 0; i < array.size(); i ++) {
      int arrValue = array.get(i);
      int seqValue = sequence.get(seqIdx);

      if (arrValue == seqValue) {
        seqIdx++;
      } 
      if (seqIdx == sequence.size()) {
        return true;
      } 
    }
    return false;
  }

  public static void main(String[] args) {
      List<Integer> array = Arrays.asList(5, 1, 22, 25, 6, -1, 8, 10);
      List<Integer> sequence = Arrays.asList(1, 6, -1, 10);

      System.out.println("Test 1: " + isValidSubsequence(array, sequence)); // Expected true

      List<Integer> sequence2 = Arrays.asList(1, 6, 0);
      System.out.println("Test 2: " + isValidSubsequence(array, sequence2)); // Expected false
  }
}