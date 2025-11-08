import { useState } from "react";
import { useHistory } from "react-router-dom";
/**
 * ZKBioTime Login Component
 * * This component renders a login form styled with Tailwind CSS to replicate
 * the ZKBio Time login screen.
 */
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("loggedIn", "true");
      history.push("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    // --- Page Background ---
    // Sets a light gray background and centers the login card vertically and horizontally.
    <div className="min-h-screen flex items-center justify-center font-sans">
      {/* --- Login Card --- */}
      {/* This is the main white card container that holds all three sections. */}
      <div className="w-full  rounded-lg overflow-hidden">
        {/* --- 1. Top Logo Section (White) --- */}
        <div className="pt-10 pb-5 flex justify-center items-center">
          {/* Placeholder for ZKBio Time logo */}
          <img src="/logo1.png" alt="logo" />
        </div>

        {/* --- 2. Main Login Form Section (Green) --- */}
        <form className="w-full bg-lime-500 px-8 py-12" onSubmit={handleLogin}>
          <div className="max-w-1/2 mx-auto">
            {/* Tab Navigation */}
            <div className="flex text-white text-lg mb-6 border-b border-green-600">
              <button className="py-2 px-4 border-b-2 border-white font-medium">
                Admin Login
              </button>
              <button className="py-2 px-4 opacity-75 hover:opacity-100 transition-opacity">
                Self-Service
              </button>
              <div className="flex-grow"></div> {/* Spacer */}
            </div>

            {/* Input Fields */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full p-3 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="agreeToTerms"
                // Styling the checkbox itself can be tricky. This default is functional.
                className="h-4 w-4 text-green-800 rounded focus:ring-green-500 border-gray-300"
              />
              <label htmlFor="agreeToTerms" className="ml-2 text-sm text-white">
                I agree to the{" "}
                <a href="#" className="underline hover:text-green-200">
                  Personal Information Protection and Privacy Policy
                </a>{" "}
                &{" "}
                <a href="#" className="underline hover:text-green-200">
                  Data Processing Agreement
                </a>
              </label>
            </div>

            {/* Login Button */}
            <div>
              <button
                type="submit"
                className="w-full p-3 rounded-md bg-gray-800 text-white font-semibold hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-colors"
              >
                Login
              </button>
            </div>
          </div>
        </form>

        {/* --- 3. Bottom Copyright Section (White) --- */}
        <div className="w-full py-5 bg-white flex flex-col justify-center items-center text-gray-600 text-sm">
          {/* Placeholder for ZKTeco logo */}
          <img src="/logo2.png" alt="logo2" />
        </div>
      </div>
      {/* --- End Login Card --- */}
    </div>
  );
}

// To run this in a single file, you would typically export it
// and import it into your main App.js file.
export default Login;
