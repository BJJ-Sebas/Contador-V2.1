  // estado da minha aplicação
  let numero = 0

  // alterador de estado da aplicação
  function MaisUm() {
      numero = numero + 1
      update()
  }
  function MaisCinco() {
      numero = numero + 5
      update()
  }
  function MaisDez() {
      numero = numero + 10
      update()
  }
  function MaisCem() {
      numero = numero + 100
      update()
  }
  function MaisMil() {
      numero = numero + 1000
      update()
  }
  function Zerar() {
      numero = 0
      update()
  }
  function MenosUm() {
      numero = numero - 1
      update()
  }
  function MenosCinco() {
      numero = numero - 5
      update()
  }
  function MenosDez() {
      numero = numero - 10
      update()
  }
  function MenosCem() {
      numero = numero - 100
      update()
  }
  function MenosMil() {
      numero = numero - 1000
      update()
  }

  //mudar o estado da aplicação 
  function update() {
      const p = document.querySelector("#resultado")
      p.innerText = numero
  }
