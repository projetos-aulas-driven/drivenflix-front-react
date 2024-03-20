import React from "react";

export default function Topo() {
    const imagemInicial = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDexwez6fwjsz-N3lcR3P5xcQH5enbLr9Og&usqp=CAU";

    const [nome, setNome] = React.useState("");
    const [avatar, setAvatar] = React.useState(imagemInicial);

    function inserirNome() {
        const nomeDigitado = prompt("Qual é o seu nome?");
        setNome(nomeDigitado);
    }

    function mudaImagem() {
        const linkDigitado = prompt("Digite o link da sua imagem");
        setAvatar(linkDigitado);
    }

    return (
        <div className="topo">
            <h1>DrivenFlix</h1>

            <div>
                <button onClick={inserirNome}>Inserir Nome</button>
                <p>{!nome ? "Seja bem-vindo(a) ao site!" : `Seja bem vindo(a), ${nome}!`}</p>
                <img onClick={mudaImagem} src={avatar} />
            </div>
        </div>
    )
}