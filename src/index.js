import { createRoot } from 'react-dom/client';

function Topo() {
    return (
        <div class="topo">
            <h1>DrivenFlix</h1>

            <div>
                <button>Inserir Nome</button>
                <p>Bem-vindo(a), FULANA!</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDexwez6fwjsz-N3lcR3P5xcQH5enbLr9Og&usqp=CAU" />
            </div>
        </div>
    )
}

function Menu() {
    return (
        <ul class="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Favoritos</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    )
}

function Conteudo() {
    return (
        <ul class="conteudo">
            <li>Senhor dos anéis: a sociedade do anel</li>
            <li>Senhor dos anéis: as duas torres</li>
            <li>Senhor dos anéis: o retorno do rei</li>
        </ul>
    )
}

function App() { 
    return (
        <div>
            <Topo />
            <div class="row">
                <Menu />
                <Conteudo />
            </div>
        </div>
    );
}

const root = createRoot(document.querySelector(".root"));
root.render(<App />);