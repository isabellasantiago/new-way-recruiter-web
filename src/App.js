import {React} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { CandidatoForm } from "./pages/CandidatoCadastro/Candidato";
import { EmpresaForm } from "./pages/EmpresaCadastro/EmpresaForm";
import {Home} from "./pages/Home/Home";
import {Login} from "./pages/Login/Login";
import { ProfileVCand } from "./pages/Perfil/VisaoCandidato/ProfileVCandidato";
import { ProfileVEmp } from "./pages/Perfil/VisaoEmpresa/ProfileVEmp";
import {Curriculo} from './pages/cadastroCurriculo/Curriculo';
import { ModalCandidato } from "./pages/ModalCandidato/ModalCandidato";
import StoreProvider from './components/Store/Provider';
import RoutesPrivate from './components/Routes/Private/Private'
import { AuthProvider } from "./context/AuthProvider";
import { ProtectedRoute } from "./components/ProtectedRoute";


function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    {/* <StoreProvider> */}
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/candidato" component={CandidatoForm}/>
    <Route path="/empresaform" component={EmpresaForm}/>
    <Route exact path="/profilev_candidato" component={ProfileVCand}/>
    <Route exact path="/profilev_empresa" component={ProfileVEmp}/>
    <Route path="/modal-candidatos" component={ModalCandidato}/>
    <Route path="/empresaform" component={EmpresaForm}/>
    <Route path="/cv" component={Curriculo}/>
    <Route path="/authenticated">
      <ProtectedRoute>
        <h2>Profile</h2>
      </ProtectedRoute>
    </Route>
    {/* <RoutesPrivate path="/authenticated" /> */}
    </Switch>
    {/* </StoreProvider> */}
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
