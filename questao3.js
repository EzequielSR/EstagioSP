// Exemplo de dados de faturamento em JSON
const faturamentoMensal = [
    { "dia": 1, "valor": 1000 },
      { "dia": 2, "valor": 1500 },
      { "dia": 3, "valor": 0 },
      { "dia": 4, "valor": 1200 },
      { "dia": 5, "valor": 1800 },
      { "dia": 6, "valor": 0},
      { "dia": 7, "valor": 0 },
      { "dia": 8, "valor": 100 },
      { "dia": 9, "valor": 2000 },
      { "dia": 10, "valor": 400 },
      { "dia": 11, "valor": 600 },
      { "dia": 12, "valor": 100 },
      { "dia": 13, "valor": 0},
      { "dia": 14, "valor": 0 },
      { "dia": 15, "valor": 1000 },
      { "dia": 16, "valor": 550 },
      { "dia": 17, "valor": 900 },
      { "dia": 18, "valor": 100 },
      { "dia": 19, "valor": 1000 },
      { "dia": 20, "valor": 0 },
      { "dia": 21, "valor": 0 },
      { "dia": 22, "valor": 100 },
      { "dia": 23, "valor": 500 },
      { "dia": 24, "valor": 400 },
      { "dia": 25, "valor": 700 },
      { "dia": 26, "valor": 1000 },
      { "dia": 27, "valor": 0 },
      { "dia": 28, "valor": 0 },
      { "dia": 29, "valor": 400 },
      { "dia": 30, "valor": 0 },
      { "dia": 31, "valor": 700 }
];
//Filtra os dias com faturamento
const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0);

// Calcula o menor e maior valor de faturamento
const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));

// Calcula a média mensal considerando apenas os dias com faturamento
const totalFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
const mediaMensal = totalFaturamento / diasComFaturamento.length;

const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

//Resultados
console.log(`Menor faturamento: R$${menorFaturamento}`);
console.log(`Maior faturamento: R$${maiorFaturamento}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
