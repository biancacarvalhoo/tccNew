import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Cadastrar from "./pages/Cadastrar"
import Acesso from "./pages/Acesso"
import Objetivo from "./pages/Objetivo"
import Treinamento from "./pages/Treinamento"


function Router() {
    return (
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/cadastrar" component={Cadastrar} /> 
        <Route path="/acesso" component={Acesso} /> 
        <Route path="/objetivo" component={Objetivo} />
        <Route path="/treinamento" component={Treinamento} />
      </Routes>
    );
  }

export default Router