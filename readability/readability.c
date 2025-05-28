#include <cs50.h>
#include <ctype.h>
#include <math.h>
#include <stdio.h>
#include <string.h>

int count_letters(string text);
int count_sentences(string text);
int count_words(string text);

/**
 * main - calculates the overall reading level
 */

int main(void)
{
    // get input from user
    string text = get_string("Input Text: ");
    // count the number of letters, words & sentences
    float lettersNum = count_letters(text);
    float wordsNum = count_words(text);
    float sentencesNum = count_sentences(text);
    // calculate the Coleman-Liau index
    float index =
        0.0588 * (lettersNum / wordsNum * 100) - 0.296 * (sentencesNum / wordsNum * 100) - 15.8;
    index = round(index);
    // Print the grade level
    if (index < 1)
    {
        printf("Before Grade 1\n");
    }
    else if (index > 0 && index < 16)
    {
        printf("Grade %i\n", (int) index);
    }
    else
    {
        printf("Grade 16+\n");
    }
}

/**
 * count_letters: counts the number of letters in the text
 * text: the text or sentence
 */
int count_letters(string text)
{
    int let_counter = 0;
    int length = strlen(text);
    for (int i = 0; i < length; i++)
    {
        if (isupper(text[i]) || islower(text[i]))
        {
            let_counter++;
        }
    }
    return let_counter;
}

/**
 * count_words: counts the number of words
 * text: sentence or text
 */
int count_words(string text)
{
    int word_counter = 0;
    int length = strlen(text);
    for (int i = 0; i < length; i++)
    {
        if (text[i] == ' ')
        {
            word_counter++;
        }
    }
    return (word_counter + 1);
}

/**
 * count_sentences: count the number of sentences
 * text: sentence or text
 */
int count_sentences(string text)
{
    int sent_counter = 0;
    int length = strlen(text);
    for (int i = 0; i < length; i++)
    {
        if (text[i] == '!' || text[i] == '.' || text[i] == '?')
        {
            sent_counter++;
        }
    }
    return sent_counter;
}
