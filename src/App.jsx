import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PacmanLoader from 'react-spinners/PacmanLoader'
import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
	const [load, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false)
		}, 4000)
	}, []);

  return (
    <div className="App">
			{load ? <div className="loading"><h2>Tegar Sabila</h2><PacmanLoader size={30} loading={load} color={"#17cf97"}/> </div>:
				<>
					<Navbar />
					<Home />
				</>
			}
    </div>
  );
}
