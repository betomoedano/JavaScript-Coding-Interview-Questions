// time O(n^2) wors case

function bubbleSort(numbers) {
    let isSorted = false;
    let counter = 0;
  
    while (!isSorted) {
      isSorted = true;
      for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i + 1]) {
          swap(i, i + 1, numbers);
          isSorted = false;
        }
      }
      counter++;
      console.log(counter);
    }
    return numbers;
  }
  
  function swap(left, right, numbers) {
    const temp = numbers[left];
    numbers[left] = numbers[right];
    numbers[right] = temp;
    return;
  }
  
  const nums = [1, 3, 4, 5, 67, 4, 2];
  console.log(bubbleSort(nums));
  
  