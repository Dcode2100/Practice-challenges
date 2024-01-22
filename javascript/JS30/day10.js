// Write a function that takes a string as an argument and returns a new string with all the vowels removed.

function asb(str) {
  const vowels = ['a', 'e', 'i', 'o','u', 'A', 'E', 'I', 'O', 'U'];
  for (let index = 0; index < vowels.length; index++) {
        if(str[index] == vowels){
        str[index] = " ";
        }
  }
  console.log(str);
}

asb("asdfasdasdf");



