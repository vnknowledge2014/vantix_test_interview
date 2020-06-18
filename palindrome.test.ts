import Palindrome from "./palindrome";

describe("Palindrome Check", () => {
  it("an empty string", () => {
    expect(Palindrome.isPalindrome("")).toBeTruthy();
  });

  it("a word not palindrome", () => {
    expect(Palindrome.isPalindrome("canoe")).toBeFalsy();
  });

  it("a word", () => {
    expect(Palindrome.isPalindrome("MADAM")).toBeTruthy();
  });

  it("a word with a character is lower case", () => {
    expect(Palindrome.isPalindrome("MaDAM")).toBeTruthy();
  });

  it("empty with space", () => {
    expect(Palindrome.isPalindrome("   ")).toBeTruthy();
  });

  it("empty with space and a number", () => {
    expect(Palindrome.isPalindrome("  2  ")).toBeTruthy();
  });

  it("a number", () => {
    expect(Palindrome.isPalindrome("121")).toBeTruthy();
  });

  it("a nagative number", () => {
    expect(Palindrome.isPalindrome("-121")).toBeFalsy();
  });

  it("a palindrome integer number", () => {
    expect(Palindrome.isPalindrome("10501")).toBeTruthy();
  });

  it("a super palindrome integer number", () => {
    expect(Palindrome.isPalindrome("111.191.111")).toBeTruthy();
  });
});
