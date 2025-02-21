import { useState } from "react";

export default function InvestmentForm() {
  const [principal, setPrincipal] = useState("");
  const [strategy, setStrategy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Principal Amount:", principal);
    console.log("Selected Strategy:", strategy);
  };

  return (
    <div className="min-h-screen bg-navy text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to Lyra</h1>
      <form 
        onSubmit={handleSubmit} 
        className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <label className="block mb-2 text-lg">Enter Principal Amount:</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          className="w-full p-2 text-black rounded-md"
          placeholder="$1000"
        />

        <label className="block mt-4 mb-2 text-lg">Choose Investment Strategy:</label>
        <select
          value={strategy}
          onChange={(e) => setStrategy(e.target.value)}
          className="w-full p-2 text-black rounded-md"
        >
          <option value="">Select Strategy</option>
          <option value="conservative">Conservative</option>
          <option value="balanced">Balanced</option>
          <option value="aggressive">Aggressive</option>
        </select>

        <button 
          type="submit" 
          className="w-full mt-4 p-3 bg-gold text-navy font-bold rounded-md hover:bg-yellow-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
