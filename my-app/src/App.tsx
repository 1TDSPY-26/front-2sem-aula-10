import { Outlet } from "react-router";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import Conteudo from "./components/Conteudo/Conteudo";

export default function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Conteudo></Conteudo>
      <Outlet/>
      <Rodape/>
    </div>
  );
}
