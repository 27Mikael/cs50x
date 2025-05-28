#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>

void caesar(int key, string plaintext);

/**
 * main - function that applies caesars cypher
 * to command line arguments
 */

// get caeser key
int main(int argc, char *argv[])
{
    // get string input
    if (argc != 2)
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }

    // if key is not int
    for (int i = 0; argv[1][i] != '\0'; i++)
    {
        if (!isdigit(argv[1][i]))
        {
            printf("Usage: ./caesar key\n");
            return 1;
        }
    }
    int key = atoi(argv[1]);
    string plaintext = get_string("plaintext: ");
    caesar(key, plaintext);
    return 0;
}

// encrypt using caesars cypher
void caesar(int key, string plaintext)
{
    printf("ciphertext: ");

    // loop through the string and shift letters
    for (int i = 0; plaintext[i] != '\0'; i++)
    {
        // check if i is alpha numeric
        if (!isalpha(plaintext[i]))
        {
            // print the current element of the array
            printf("%c", plaintext[i]);
            continue;
        }
        // checking if the current element it's uppercase
        int offset = isupper(plaintext[i]) ? 65 : 97;
        // calculating how far the current element is from lowercase "a" or uppercase "A"
        int pi = plaintext[i] - offset;
        // index of the letter cyphering
        int ci = (pi + key) % 26;

        // printing the new character cyphered
        printf("%c", ci + offset);
    }
    printf("\n");
}
