
import Login from './Components/login/Login';
import ForgotPass from './Components/forgotPass/ForgotPass';
import Register from './Components/register/Register';
import addIncome from './Components/addIncome';
import addBill from './Components/addBill';

function App() {
  return (
    <div>
        <Login />
        <Register />
        <ForgotPass />
        <addBill />
        <addIncome />


    </div>
  );
}

export default App;
