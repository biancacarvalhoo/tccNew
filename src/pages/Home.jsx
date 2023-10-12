import { Link } from "react-router-dom"

import "./Home.css"

function Home() {
    return (
        <>
            <header>
            <nav className="navigation">
                <a href="#home" className="logo"><img src="./img/logo.svg" alt="Logo" /></a>
                <ul className="nav-menu">
                    <li><a className="nav-item" href="#equipamentos">Equipamentos</a></li>
                    <li><a className="nav-item" href="#qr-code">QRcode</a></li>
                    <Link to={"/Objetivo"} className="nav-item">Objetivo</Link>
                    <Link to={"/Treinamento"} className="nav-item">Adaptação</Link>
                </ul>
                <div className="botoes">
                    <Link to={"/acesso"} className="nav-button">acessar</Link>
                    <Link to={"/cadastrar"} className="nav-button">Cadastrar</Link>
                </div>

                <div className="menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
           </header>
            <main>
                <section id="home">
                    <div className="home-text">
                        <h1 className="text-h1">Coleiras inteligentes para cachorros cegos</h1>
                        <p>O avanço da tecnologia chegou até as coleiras do seu pet. Isso mesmo, hoje você já pode ajudar seu pet com  coleiras inteligentes</p>
                        <div className="icones-home">
                            <a href="#" target="_blank"><i className='bx bxl-facebook'></i></a>
                            <a href="#" target="_blank"><i className='bx bxl-instagram'></i></a>
                            <a href="#" target="_blank"><i className='bx bxl-twitter'></i></a>
                        </div>
                    </div>

                    <div className="home-img">
                        <img src="./img/dog-home.svg" alt="Foto do cachorro" />
                        <img src="./img/borda-cachorro.svg" alt="Borda da foto do cachorro" />
                    </div>
                </section>

                <section className="equipments" id="equipamentos">
                    <h1>Equipamentos utilizados</h1>

                    <div className="equipment-contents">
                        <div className="equipment-containers">
                            <div className="background-equipment">
                                <img src="./img/sensor.svg" alt="Foto do sensor" />
                            </div>

                            <div className="equipment-text">
                                <p>Sensor ultrassônico</p>
                                <span>H-SR04</span>
                                <span>R$ 14,92</span>
                            </div>
                        </div>
                        <div className="equipment-containers">
                            <div className="background-equipment">
                                <img src="./img/coleira.svg" alt="Foto da coleira" />
                            </div>

                            <div className="equipment-text">
                                <p>Coleira com QR code</p>
                                <span>H-SR04</span>
                                <span>R$ 32,24</span>
                            </div>
                        </div>
                        <div className="equipment-containers">
                            <div className="background-equipment">
                                <img src="./img/placa-nano.svg" alt="Foto da placa nano" />
                            </div>

                            <div className="equipment-text">
                                <p>Placa Nano</p>
                                <span>Atmega328</span>
                                <span>Ch340</span>
                                <span>R$ 44,09</span>
                            </div>
                        </div>
                        <div className="equipment-containers">
                            <div className="background-equipment">
                                <img src="./img/bateria.svg" alt="Foto da bateria" />
                            </div>

                            <div className="equipment-text">
                                <p>Bateria 9v</p>
                                <span>250mah</span>
                                <span>R$ 33,49</span>
                            </div>
                        </div>
                        <div className="equipment-containers">
                            <div className="background-equipment">
                                <img src="./img/cabo.svg" alt="Foto do cabo" />
                            </div>

                            <div className="equipment-text">
                                <p>Cabo USB 2.0</p>
                                <span>PC-USB1805</span>
                                <span>R$ 10,62</span>
                            </div>
                        </div>
                        <div className="equipment-containers">
                            <div className="background-equipment">
                                <img src="./img/bateria.svg" alt="Foto da bateria" />
                            </div>

                            <div className="equipment-text">
                                <p>Carregador de <br />bateria </p>
                                <span>R$ 76,70</span>
                            </div>
                        </div>

                        <div className="video" id="qr-code">
                            <img src="./img/video" alt="imagem que fica em baixo do video" />
                        </div>

                    </div>
                </section>

                <footer>
                    <div className="footer-top">
                        <div className="footer-img">
                            <img src="./img/cachorro-footer.svg" alt="Cachorro do footer" />
                        </div>

                        <div className="footer-textarea">
                            <h4>Deixe seu cometário</h4>
                            <textarea name="" id="mensagem" cols="35" rows="10" placeholder="Digite aqui..." required></textarea>
                            <div className="send-submit">
                                <button type="submit" data-button className="enviar" required >Enviar</button>
                            </div>
                        </div>

                        <div className="footer-profile">
                            <div className="social-midias">
                                <img src="./img/face.svg" alt="logo facebook" />
                                <img src="./img/twitter.svg" alt="logo twitter" />
                                <img src="./img/insta.svg" alt="logo instagram" />
                            </div>

                            <div className="user">
                                <input type="name" name="name" id="name" placeholder="Nome:" />
                                <input type="email" name="email" placeholder="Email:" />
                                <button><img src="./img/footer-img.svg" alt="Imagem do balão de mensagem" />Contact us</button>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>Declaração de privacidade</p>
                        <span>I</span>
                        <p>Termos legais de uso</p>
                        <span>I</span>
                        <p>Opção de anúncio</p>
                        <span>I</span>
                        <p>Acessibilidade</p>
                        <span>I</span>
                        <p>Configuração de cookies</p>
                    </div>
                </footer>
            </main>
        </>

    )

}

export default Home