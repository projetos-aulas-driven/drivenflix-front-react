export default function Topo() {
    // const nome = prompt("Qual é o seu nome?");
    const nome = "Letícia";
    const imagemUsario = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDexwez6fwjsz-N3lcR3P5xcQH5enbLr9Og&usqp=CAU";

    return (
        <div class="topo">
            <h1>DrivenFlix</h1>

            <div>
                <button>Inserir Nome</button>
                <p>{!nome ? "Seja bem-vindo(a) ao site!" : `Seja bem vindo(a), ${nome}!`}</p>
                <img src={imagemUsario} />
            </div>
        </div>
    )
}