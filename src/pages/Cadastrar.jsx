import { Link } from "react-router-dom"
import "./Cadastrar.css"
import voltarLogin from "../../img/voltar-login.svg"

function Cadastro() {
    return (
        <section className="cadastrar">
            <div className="left">
                <div className="left-button">
                    <button>
                        <Link to={"/"}>
                            <img src={voltarLogin} alt="" />Voltar
                        </Link>
                    </button>
                </div>

                <div className="left-content">
                    <h1>dono</h1>
                    <div className="inputs-dono">
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Usuario" />
                        <input type="tel" placeholder="Telefone" />
                        <input type="password" placeholder="Senha" />
                        <input type="text" placeholder="CEP" />
                    </div>
                </div>
            </div>

            <div className="right">
                <div className="right-button">
                    <Link to={"/acesso"}>Entrar</Link>
                </div>
            </div>

            <div className="right-content">
                <h1>cachorro</h1>
                <div className="inputs-dono">
                    <input type="text" placeholder="Nome do cachorro" />
                    <input type="text" placeholder="Nome do dono" />
                    <input type="text" placeholder="Raça" />
                    <input type="number" placeholder="Idade" />
                </div>
                <button>Cadastrar</button>
            </div>

        </section>
    )
}

export default Cadastro