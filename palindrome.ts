class Palindrome {
  static isPalindrome(arg: any) {
    // Your code here
    let str: string = arg.toString();
    str = str.toLowerCase();

    const len: number = str.length - 1;
    for (let idx: number = 0; idx < str.length / 2; ++idx) {
      if (str[idx] !== str[len - idx]) {
        return false;
      }
    }
    return true;
  }
}

export default Palindrome;
