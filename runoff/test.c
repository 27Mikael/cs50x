#include <stdio.h>
#include <string.h>

int main() {
  char a[] = "apple";
  char b[] = "banana";
  char c[] = "apple";

  // Compare a and b
  int result1 = strcmp(a, b);
  if (result1 == 0)
    printf("%s and %s are equal\n", a, b);
  else if (result1 < 0)
    printf("%s comes before %s\n", a, b);
  else
    printf("%s comes after %s\n", a, b);

  // Compare a and c
  int result2 = strcmp(a, c);
  if (result2 == 0)
    printf("%s and %s are equal\n", a, c);

  return 0;
}

// get_int used to collect int input
int get_int() {}
// get char used to collect char input
char get_char() {}
