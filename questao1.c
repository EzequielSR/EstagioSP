#include <stdio.h>

int main(){
    int INDICE = 13;
    int SOMA = 0;
    int K = 0;
    while(K < INDICE){
        K = K + 1;
        SOMA = SOMA + K;
    }
    printf("%d", SOMA);
    return 0;
}
//Resultado: 91