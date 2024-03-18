import ReactDOM from "react-dom";

function Lista() {
    return (
        <ul>
            <li>Senhor dos aneis: a sociedade do anel</li>
            <li>Senhor dos aneis: as duas torres</li>
            <li>Senhor dos aneis: o retorno do rei</li>
        </ul>
    );
}

const listaReact = Lista();
const elemento = document.querySelector(".root");
ReactDOM.render(listaReact, elemento);