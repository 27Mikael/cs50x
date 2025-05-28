#include <stdio.h>
#include <cs50.h>

int main (void){
    int cash, count=0;
    // get the user input (remaining change)
    do{
        cash = get_int("change owed: ");
    }
    while ( cash <= 0 );
    // determine the cents needed
    while (cash >= 25){
        cash = cash - 25;
        count++;
    }
        while (cash >= 10){
        cash = cash - 10;
        count++;
    }    while (cash >= 5){
        cash = cash - 5;
        count++;
    }    while (cash >= 1){
        cash = cash - 1;
        count++;
    }
    printf("%d\n", count);
    return 0;
}
