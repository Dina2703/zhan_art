import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login({ setIsAdmin }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(FaEyeSlash);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        if (user) {
          setIsAdmin(true);
          navigate("/");
        } else {
          setIsAdmin(false);
          navigate("");
        }
      })
      .catch((error) => {
        navigate("/");
      });
  };

  const handleToggle = () => {
    if (type === "password") {
      setIcon(FaEye);
      setType("text");
    } else {
      setIcon(FaEyeSlash);
      setType("password");
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-green-600/40  lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-green-700 underline uppercase">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              name={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2 relative">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              name="password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              type={type}
              className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />

            <div
              className="absolute bottom-3 right-6 text-gray-600 hover:cursor-pointer"
              onClick={handleToggle}
            >
              {icon}
            </div>
          </div>
          {/* <a href="#" className="text-xs text-green-600 hover:underline">
            Forget Password?
          </a> */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
