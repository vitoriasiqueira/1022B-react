
import './MeuComponente.css'
//Criar nosso primeiro componente
//Esse componente será o componente do nosso HEADER.
//No header temos 200px de altura ele é do tamanho da tela
//Ele tem uma borade amarela de 2px solida
//Dentro da tag header nos temos uma div com o texto "logo" de
//      tamanho 200 x 200px centralizada na vertical a 30px da lateral esquerda 
function MeuComponente(){
    let variavel="Logo";
    return (
     <header className='header'>
        <div className='logo'>
            {variavel}</div>
     </header>
    )
}
export default MeuComponente;

