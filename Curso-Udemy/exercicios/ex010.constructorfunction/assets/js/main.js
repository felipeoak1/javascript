// This code below was written by Otavio Miranda

function CriaCalculadora() {
    let display = document.querySelector('.display')

    this.inicia = () => {
      this.cliqueBotoes();
      this.pressionaBackSpace();
      this.pressionaEnter();
    }

    this.pressionaBackSpace = () => {
      display.addEventListener('keydown', e => {
        if (e.keyCode === 8) {
          e.preventDefault();
          this.clearDisplay();
        }
      });
    }

    this.pressionaEnter = () => {
      display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    }

    this.realizaConta = () => {
      let conta = display.value;

      try {
        // Eval não é recomendado.
        conta = eval(conta);

        if(!conta) {
          alert('Conta inválida');
          return;
        }

        display.value = String(conta);
      } catch(e) {
        alert('Conta inválida');
        return;
      }
    }

    this.clearDisplay = () => {
      display.value = '';
    }

    this.apagaUm = ()=>{
      display.value = display.value.slice(0, -1);
    }

    this.cliqueBotoes = () => {
      document.addEventListener('click', e => {
        const el = e.target;

        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if(el.classList.contains('btn-eq')) {
          this.realizaConta();
        }

        display.focus();
      });
    }

    this.btnParaDisplay = (valor) => {
      display.value += valor;
    }

  };

const calculadora = new CriaCalculadora();
calculadora.inicia();
