import { Link } from "react-router-dom"
import "./Objetivo.css"

function Objetivo() {
    return (
        <>
            <header>
                <nav className="navigation">
                    <a href="./index.html#home" className="logo"><img src="file:///C:/Users/Bianca%20-%20PC/Downloads/c%20(1).png" alt="" /></a>
                    <ul className="nav-menu">
                        <Link to={"/"} className="nav-item">Equipamentos</Link>
                        <Link to={"/"} className="nav-item">QR Code </Link>
                        <Link to={"/Objetivo"} className="nav-item">Objetivo</Link>
                        <Link to={"/Treinamento"} className="nav-item">Adaptação</Link>
                        
                    </ul>
                    <div className="botoes">
                    <button>
                    <Link to={"/"}>Voltar</Link>
                    <img src="./voltar-login.svg" alt="" />
                    </button>
                    </div>

                    <div className="menu">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </nav>
            </header>

        <section className="objetivo">
        <div className="objetivo-top-content">
            <div className="obj-um-text">
                <p>
                    Programada por sistema arduino a Animal Collar tem como objetivo principal auxiliar na vida cotidiana de cachorros com deficiência visual e seus nossos, ultilizando leves vibrações que vão auxiliar o cão para não se chocar contra obstáculos
                </p>
            </div>
            <div className="obj-um-img">
                <img src="./obj1.svg" alt=""/>
            </div>
        </div>

        <div className="objetivo-middle-content">
            <div className="obj-dois-img">
                <img src="./obj2.svg" alt=""/>
            </div>

            <div className="obj-dois-text">
                <p>Esse projeto foi uma mordenização da coleira BlinDog que usa o sensores ultrasônicos para alertar o animal 
                    de obstaculos a frente, diferente da BlinDog nossa coleira trás um sistema de QR code que mostra os dados de seu cão.</p>
                    <a href="#"><button>bibliografia</button></a>
            </div>
        </div>

        <div className="objetivo-bottom-content">
            <div className="obj-bottom-content">
                <p>para melhor<br/>experiência com<br/> nosso equipamento<br/> aconselhamos que seu<br/> animal<br/> passe por um simples<br/> treinamento de três<br/> etapas</p>
                
            </div>

            <div className="obj-bottom-button">
                <a href="./treinamento.html" target="_blank"><button>
                    treinamento
                </button></a>
            </div>
           
        </div>

        </section>
        </>

  
    )
}

export default Objetivo