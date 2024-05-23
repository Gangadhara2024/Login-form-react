import "./App.css";
import Signup from "./components/Signup";
import "./auth-app.scss";
import { useRef, useState } from "react";
import Auth from "./components/Auth";
import Login from "./components/Login";
import useSelection from "antd/es/table/hooks/useSelection";

function App() {
  const authRef = useRef(new Auth());
  const [login, setLogin] = useState(false);

  const toggleForm = () => {
    setLogin(!login);
  }

  return (
    <>
      <div className="container">
        {login ? <Login auth={authRef.current} toggleForm={toggleForm} /> : <Signup auth={authRef.current} toggleForm={toggleForm} />}
      </div>
    </>
  );
}

export default App;
