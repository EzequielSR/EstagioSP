const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
}
//Calcula o valor total
const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

//Calcula o percentual de cada estado
const percentualPorEstado = {}
for(const estado in faturamentoPorEstado){
    percentualPorEstado[estado] = ((faturamentoPorEstado[estado] / faturamentoTotal) * 100).toFixed(2)
}
//Exibe os percentuais de cada estado
for(const estado in percentualPorEstado){
    console.log(`${estado}: ${percentualPorEstado[estado]}%`)
}