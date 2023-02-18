import "./App.css";
import ContractTable from "./components/ContractTable";
import Header from "./components/Header";
import { ContractDataProvider } from "./context/ContractData";

function App() {
  return (
    <ContractDataProvider>
      <div>
        <Header />
        <ContractTable />
      </div>
    </ContractDataProvider>
  );
}

export default App;
