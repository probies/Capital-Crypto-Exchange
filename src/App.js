import './App.css';
import ContractTable from './components/ContractTable';
import { ContractDataProvider } from './context/ContractData';

function App() {
  return (
    <ContractDataProvider>
      <div className="App">
        <div style={{'textAlign':'center'}}>
          <h1>
            Contract Data
          </h1>
          <div>
            <ContractTable />
          </div>
        </div>
      </div>
    </ContractDataProvider>
  );
}

export default App;
