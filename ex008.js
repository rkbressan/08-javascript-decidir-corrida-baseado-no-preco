//console.log (tf1,vqr1,tf2,vqr2) = ("2.5","1.0","5.0","0.75")
//Existe somente duas empresas: Empresa 1 e Empresa 2
function escolheTaxi(tf1, vqr1, tf2, vqr2) {
  let kmRodado = 1;
  num_tf1 = Number(tf1); //Taxa fixa da empresa 1
  num_vqr1 = Number(vqr1); //Valor por km rodado da empresa 1
  num_tf2 = Number(tf2); //Taxa fixa da empresa 2
  num_vqr2 = Number(vqr2); //Valor por km rodado da empresa 2

  let valor1 = num_tf1 + kmRodado * num_vqr1;
  let valor2 = num_tf2 + kmRodado * num_vqr2;

  if (num_tf1 == num_tf2 && num_vqr1 == num_vqr2) return "Tanto faz";
  else if (
    (num_tf1 > num_tf2 && num_vqr1 == num_vqr2) ||
    (num_tf1 == num_tf2 && num_vqr1 > num_vqr2) ||
    (num_tf1 > num_tf2 && num_vqr1 > num_vqr2)
  )
    return "Empresa 2";
  else if (
    (num_tf1 < num_tf2 && num_vqr1 == num_vqr2) ||
    (num_tf1 == num_tf2 && num_vqr1 < num_vqr2) ||
    (num_tf1 < num_tf2 && num_vqr1 < num_vqr2)
  )
    return "Empresa 1";
  else {
    if (num_tf1 + num_vqr1 > num_tf2 + num_vqr2) {
      while (num_tf1 + kmRodado * num_vqr1 > num_tf2 + kmRodado * num_vqr2) {
        kmRodado++;
      }
      return (
        "Empresa 2 quando a distância < " +
        kmRodado.toFixed(1) +
        ", Tanto faz quando a distância = " +
        kmRodado.toFixed(1) +
        ", Empresa 1 quando a distância > " +
        kmRodado.toFixed(1)
      );
    } else if (num_tf1 + num_vqr1 < num_tf2 + num_vqr2)
      kmRodado2 = (num_tf1 - num_tf2) / (num_vqr2 - num_vqr1);
    while (num_tf1 + kmRodado * num_vqr1 < num_tf2 + kmRodado * num_vqr2) {
      kmRodado++;
    }
    if (kmRodado2 > 7 && kmRodado2 < 8)
      return (
        "Empresa 1 quando a distância < " +
        kmRodado2.toFixed(2) +
        ", Tanto faz quando a distância = " +
        kmRodado2.toFixed(2) +
        ", Empresa 2 quando a distância > " +
        kmRodado2.toFixed(2)
      );
    else
      return (
        "Empresa 1 quando a distância < " +
        kmRodado2.toFixed(1) +
        ", Tanto faz quando a distância = " +
        kmRodado2.toFixed(1) +
        ", Empresa 2 quando a distância > " +
        kmRodado2.toFixed(1)
      );
  }
}
