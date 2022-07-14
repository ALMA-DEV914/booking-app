import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    city: undefined,
    country: undefined,
    phone: undefined,
    img: undefined,
    password: undefined,
  });

  const { loading, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });
    try {
      const res = await axios.post("/auth/register", credentials);
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
    }
  };


  return (
    <div className="register">
      <div className="lContainer">
        <h2>Signup here</h2>
        <label>Username</label>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="email address"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        <label>City</label>
        <input
          type="text"
          placeholder="city"
          id="city"
          onChange={handleChange}
          className="lInput"
        />
        <label>Country</label>
        <input
          type="text"
          placeholder="country"
          id="country"
          onChange={handleChange}
          className="lInput"
        />
        <label>Contact Number</label>
        <input
          type="number"
          placeholder="contact number"
          id="contact"
          onChange={handleChange}
          className="lInput"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <label>Photo</label>
        <input
          type="file"
          placeholder="upload profile"
          id="img"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
         Register
        </button>
        <Link to="/login">
        <button className="rButton">Login</button>
       </Link>
      </div>
    </div>
  );
};

export default Register;
