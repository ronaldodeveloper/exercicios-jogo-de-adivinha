const form= document.querySelector('.form')
const input= document.querySelector('.form-control')
const res= document.querySelector('.resultado')
const aviso= document.querySelector('.aviso')
const tentativas= document.querySelector('.tentativas')
const jogar= document.querySelector('.jogar')
const numeroAleatorio= Math.floor(Math.random() * 100)
const data= []
input.focus()

const refresh= ()=>{
    return document.location.reload(true);
}

jogar.style.display= 'none'
jogar.addEventListener('click', ()=>{refresh()})

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(numeroAleatorio)
    
    let valor= input.value
    data.push(valor)

    if(valor == numeroAleatorio){
        res.innerHTML = `Parabéns você acertou: O número é <strong>${valor}</strong>`;
        aviso.innerHTML= `acertou na ${data.length}° tentativa`
        jogar.style.display= 'block'
        
    }if(valor > numeroAleatorio){
        aviso.innerHTML= `Número <strong>Menor</strong> que ${valor}`;

    }if(valor < numeroAleatorio){
        aviso.innerHTML= `Número <strong>Maior</strong> que ${valor}`;

    }if(data.length >= 10){
        aviso.innerHTML= "<strong class='bg-danger'>OPS! Suas chances Acabaram... Começar denovo</strong>"

        setTimeout(()=>{
            refresh()
        },3000)
    } 

    tentativas.innerHTML= `${data.join(' - ')}`;
    input.value= ''
})