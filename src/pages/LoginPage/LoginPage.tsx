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
      console.log(res.data);
      localStorage.setItem("token", res.data.data.token);
      navigate("/");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col justify-center items-center h-screen p-10 gap-5"
    >
      <h1 className="text-xl font-bold">Login</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 rounded"
        required
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        className="border p-2 rounded"
        required
      />
      <button
        type="submit"
        className="bg-primary text-white p-2 rounded cursor-pointer"
      >
        Login
      </button>
    </form>
  );
}
