export default function Topo() {
    let nome = "";
    const imagemUsario = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDexwez6fwjsz-N3lcR3P5xcQH5enbLr9Og&usqp=CAU";

    function inserirNome() {
        nome = prompt("Qual é o seu nome?");
    }

    return (
        <div class="topo">
            <h1>DrivenFlix</h1>

            <div>
                <button onClick={inserirNome}>Inserir Nome</button>
                <p>{!nome ? "Seja bem-vindo(a) ao site!" : `Seja bem vindo(a), ${nome}!`}</p>
                <img onClick={() => alert("CLicou na imagem")} src={imagemUsario} />
            </div>
        </div>
    )
}