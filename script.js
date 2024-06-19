document.getElementById("calcular").addEventListener("click", calcular);
document.getElementById("limpiar").addEventListener("click", limpiar);

function calcular(){
    const billeteDeAs5 = parseInt( document.getElementById("b5").value)|| 0 ;
    const billeteDeAs10 = parseInt( document.getElementById("b10").value) || 0;
    const billeteDeAs50 = parseInt( document.getElementById("b50").value) || 0;
    const billeteDeAs100 = parseInt( document.getElementById("b100").value) || 0;
    const total =( billeteDeAs5 *5) + (billeteDeAs10 * 10) + (billeteDeAs50 * 50) + (billeteDeAs100 * 100);
    document.getElementById("resultado").textContent = "Resultado: $ " + total;

    if(billeteDeAs5 < 0 || billeteDeAs10 < 0 || billeteDeAs50 < 0 || billeteDeAs100 < 0 ){
        alert("Por favor ingrese un numero positivo");
        return ;
    }  
}

function limpiar(){
  const inputs = document.querySelectorAll("[data-id]");
  inputs.forEach( input => {
    input.value = 0 ;
  })


document.getElementById("resultado").textContent = "Resultado $ 0";
}