import { Link } from "react-router-dom"
import "./Acesso.css"

function Acesso() {
    return (

        <section className="login">
            <div className="left">
                <div className="left-button">

                    <button>
                    <Link to={"/"}>Voltar</Link>
                        </button>
                </div>
                <div className="right">
                    <div className="right-button">
                    <button>
                    <Link to={"/Cadastrar"}>Cadastrar</Link>
                    </button>
                    </div>

                    <div className="right-content">
                        <h1>Acessar</h1>
                        <div className="login-access">
                            <input type="name" name="name" id="name" placeholder="Usuário" />
                            <div className="usuario-img">
                                <img src="./img/usuario.svg" alt="" className="img-fixed" />
                            </div>
                            <input type="password" name="password" id="senha" placeholder="Senha" />
                            <div className="senha-img">
                                <img src="./img/senha.svg" alt="" className="img-fixed" />
                            </div>
                            <button>Acessar</button>
                        </div>
                        
                    </div>
                    
                    
                </div>
            </div>
        </section>
    )
}

export default Acesso