
import Layout from './Components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/login/Login';
// import ForgotPass from './Components/forgotPass/ForgotPass';
// import Register from './Components/register/Register';
// import addIncome from './Components/addIncome';
// import addBill from './Components/addBill';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            {/* <Route path="ForgotPass" element={<ForgotPass />} /> */}
            {/* <Route path="Register" element={<Register />} /> */}
            {/* <Route path="AddIncome" element={<addIncome />} /> */}
            {/* <Route path="AddBill" element={<addBill />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
