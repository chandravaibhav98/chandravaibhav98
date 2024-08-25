import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CompoundInterestCalculator from "./components/CompoundInterestCalculator";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<CompoundInterestCalculator />
			<footer>
				<hr />
				<div>
					<a
						href="https://vitejs.dev"
						target="_blank">
						<img
							src={viteLogo}
							className="logo"
							alt="Vite logo"
						/>
					</a>
					<a
						href="https://react.dev"
						target="_blank">
						<img
							src={reactLogo}
							className="logo react"
							alt="React logo"
						/>
					</a>
				</div>
				<h2>Vite + React</h2>
			</footer>
		</>
	);
}

export default App;
