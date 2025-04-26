// FilaCircular.js
class FilaCircular{
    // atributos privados
    #inicio;   // início da fila (índice do primeiro elemento)
    #fim;      // fim da fila (índice do último elemento)
    #qtd;      // quantidade de elementos na fila
    #elementos; // vetor que armazena os dados da fila

    constructor(tamanho = 10) { 
        // inicializa o início, fim, quantidade e vetor
        this.#inicio = 0;
        this.#fim = -1;
        this.#qtd = 0;
        this.#elementos = new Array(tamanho);
    }

    // verifica se a fila está cheia
    isFull() {
        return this.#qtd === this.#elementos.length;            
    }

    // verifica se a fila está vazia
    isEmpty() {
        return this.#qtd === 0; 
    }

    // insere um novo elemento na fila
    enqueue(dado) {
        if (!this.isFull()) {
            // move o fim para a próxima posição (usando o operador % para circular)
            this.#fim = (this.#fim + 1) % this.#elementos.length;
            this.#elementos[this.#fim] = dado; // adiciona o elemento
            this.#qtd++; // aumenta a quantidade de elementos
            return true; // inserção foi feita com sucesso
        } else
            return false; // se estiver cheia, não insere
    }

    // remove o elemento que está no início da fila
    dequeue() {
        if (!this.isEmpty()) {
            const dado = this.#elementos[this.#inicio]; // guarda o elemento para retornar
            this.#inicio = (this.#inicio + 1) % this.#elementos.length; // move o início para a próxima posição
            this.#qtd--; // diminui a quantidade de elementos
            return dado; // retorna o elemento removido
        } else
            return null; // se a fila estiver vazia
    }

    // gera uma string com todos os elementos da fila
    toString() {
        let filaString = ""; // vai acumular a representação da fila
        let i = this.#inicio; // começa do início da fila
        for (let ii = 0; ii < this.#qtd; ii++) { 
            filaString += this.#elementos[i] + " | "; // adiciona o elemento atual à string
            i = (i + 1) % this.#elementos.length; // avança para a próxima posição circularmente
        }
        console.log(filaString); // imprime a fila no console
        return filaString; // retorna a string completa
    }
}
// fim da classe
