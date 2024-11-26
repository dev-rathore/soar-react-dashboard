import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Accounts,
  CreditCards,
  Investments,
  Loans,
  Overview,
  Privileges,
  Services,
  Setting,
  Transactions,
} from './pages';
import { Header, Sidebar } from './components/ui';

const App = () => {

  return (
    <Router>
      <div className="flex">
        <Sidebar />

        <div className="flex flex-1 flex-col">
          <Header />
          <div className="px-10 py-8 bg-accent flex flex-1 flex-col">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/investments" element={<Investments />} />
              <Route path="/credit-cards" element={<CreditCards />} />
              <Route path="/loans" element={<Loans />} />
              <Route path="/services" element={<Services />} />
              <Route path="/privileges" element={<Privileges />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
