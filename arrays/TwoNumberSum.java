package arrays;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class TwoNumberSum {

  public static int[] twoNumberSum(int[] array, int targetSum) {
    Set<Integer> memo = new HashSet<>();

    for (int i = 0; i < array.length; i ++) {
      int currentNumber = array[i];
      int valueToCompare = targetSum - currentNumber;
      if(memo.contains(valueToCompare)) {
        return new int[] {currentNumber, valueToCompare};
      } else {
        memo.add(currentNumber);
      }
    }

    return new int[0];
  }

  public static void main(String[] args) {
    int[] array = {3, 5, -4, 8, 11, 1, -1, 6};
    int targetSum = 10;

    int[] result = twoNumberSum(array, targetSum);
    System.out.println(Arrays.toString(result));
  }

}
