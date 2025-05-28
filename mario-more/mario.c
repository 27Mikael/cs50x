#include <stdio.h>
#include <cs50.h>

int main (void){
    int height, row, column, space, dots;
    do
    {
        height = get_int("enter height here: ");
    }
    while (height < 1 || height > 8);

    for (row = 0; row < height; row++) {
        for (space = 0; space < height - row - 1; space++){
            printf(" ");
        }
        for (column = 0; column < row + 1;  column++) {
            printf("#");
        }
        for ( dots = 0; dots < 2; dots++){
            printf(" ");
        }
        for (column = 0; column < row + 1; column++){
            printf("#");
        }
        printf("\n");
    }
}
