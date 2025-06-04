import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://bootcamp2025.depster.me/login", {
        email,
        password,
      });
      console.log("ovo je vraceno", res.data);
      localStorage.setItem("token", res.data.data.token);
      navigate("/");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex  justify-center items-center h-screen bg-gradient-custom "
    >
      <div className="flex flex-col justify-center max-w-[350px] w-[90%] items-center p-10 gap-5 border bg-white border-white rounded-xl ">
        <h1 className="text-xl font-bold">Welcome back</h1>
        <h2 className="text-center">
          Sign in to access your personalized
          <br /> recommendations
        </h2>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border-2 border-gray-400 p-2 rounded"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          className="w-full border-2 border-gray-400 p-2 rounded"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-primary-600 text-white hover:bg-primary-700 rounded cursor-pointer"
        >
          Login
        </button>
      </div>
    </form>
  );
}
