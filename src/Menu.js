export default function Menu() {

    const menu = [
		{ texto: "Home", link: "./home.html", imagem: "https://i.ibb.co/Zm7LR4j/silhueta-negra-em-casa.png" },
		{ texto: "Favoritos", link: "./favoritos.html", imagem: "https://icon-library.com/images/white-heart-icon-png/white-heart-icon-png-11.jpg" },
		{ texto: "Contatos", link: "./contatos.html", imagem: "https://i.im.ge/2022/09/15/1X4f74.envelope.png" }
    ]

    return (
        <ul class="menu">
            {menu.map(m => <MenuItem texto={m.texto} imagem={m.imagem} link={m.link}/>)}
        </ul>
    )
}

function MenuItem(props) {
    return (
        <li>
            <img src={props.imagem} />
            <a href={props.link}>{props.texto}</a>
        </li>
    )
}