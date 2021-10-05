function sortByLength(strs) {
  return strs.sort((a, b) => a.length - b.length);
}

const strs = ['abc', '', 'aaa', 'a', 'zz'];
// console.log('result: ', result);
// expect(result).toEqual(["", "a", "zz", "abc", "aaa"]);
console.log(sortByLength(strs));

//without using array sort method
// Javascript program to sort an Array of
// Strings according to their lengths

// Function to print the sorted array of string
// void printArraystring(string,int);

// Function to Sort the array of string
// according to lengths. This function
// implements Insertion Sort.
// function sort(s, n)
// {
//     for (let i = 1 ; i < n; i++)
//     {
//         let temp = s[i];

// Insert s[j] at its correct position
//         let j = i - 1;
//         while (j >= 0 && temp.length < s[j].length)
//         {
//             s[j + 1] = s[j];
//             j--;
//         }
//         s[j + 1] = temp;
//     }
// }

// Function to print the sorted array of string
// function printArraystring(str, n)
// {
//     for (let i = 0; i < n; i++)
//         document.write(str[i]+" ");
// }

// let arr = ["GeeksforGeeks", "I", "from", "am"];
// let n = arr.length;

// Function to perform sorting
// sort(arr,n);
// Calling the function to print result
// printArraystring(arr, n);
