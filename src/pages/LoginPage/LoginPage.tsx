import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email({ message: "Enter valid email" }),
  password: z
    .string()
    .min(4, {
      message: "Password is required and must be at least 4 characters long.",
    }),
});

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const navigate = useNavigate();
  const API_LOGIN_ENDPOINT = import.meta.env.VITE_API_LOGIN_ENDPOINT

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      const fieldErrors: { email?: string; password?: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0] === "email") fieldErrors.email = err.message;
        if (err.path[0] === "password") fieldErrors.password = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await axios.post(API_LOGIN_ENDPOINT, {
        email,
        password,
      });
      Cookies.set("JWT", res.data.data.token, { expires: 7 });
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          setErrors({ password: "Invalid password." });
        } else if (error.response?.status === 429) {
          alert("Too many attempts. Please wait and try again.");
        } else {
          alert("Server error. Please try again later.");
        }
      } else {
        alert("Network error. Please check your connection.");
      }
    } finally{
      setLoading(false);
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
          
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email}</span>
        )}
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          className="w-full border-2 border-gray-400 p-2 rounded"
          
        />
        {errors.password && (
          <span className="text-red-500 text-sm">{errors.password}</span>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-primary-600 text-white hover:bg-primary-700 rounded cursor-pointer"
        >
          {loading ? "Logging in" : "Login"}
        </button>
      </div>
    </form>
  );
}
