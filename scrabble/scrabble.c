#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

// Points assigned to each letter of the alphabet
int POINTS[] = {1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10};

int compute_score(string word);

/**
 * main - determines which player won scrabble
 *
 */
int main(void)
{
    // get input(words) from players
    string player1_in = get_string("Player 1: ");
    string player2_in = get_string("Player 2: ");
    // determine max score
    int score1 = compute_score(player1_in);
    int score2 = compute_score(player2_in);
    // determine winner
    if (score1 > score2)
    {
        printf("Player 1 wins!\n");
    }
    else if (score1 < score2)
    {
        printf("Player 2 wins!\n");
    }
    else
    {
        printf("Tie\n");
    }
}

/**
 * compute_score - determine score of the word
 * word - the word whose score we determine
 */
int compute_score(string word)
{
    // keep track of score
    int score = 0;
    // determine the score of the word used
    for (int i = 0, len = strlen(word); i < len; i++)
    {
        if (isupper(word[i]))
        {
            score += POINTS[word[i] - 'A'];
        }
        else if (islower(word[i]))
        {
            score += POINTS[word[i] - 'a'];
        }
    }
    return score;
}
