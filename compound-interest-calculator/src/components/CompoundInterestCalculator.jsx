import React, { useState } from "react";
import "./CompoundInterestCalculator.css";

const CompoundInterestCalculator = () => {
	const [principal, setPrincipal] = useState(1000);
	const [rate, setRate] = useState(5);
	const [time, setTime] = useState(10);
	const [timesCompounded, setTimesCompounded] = useState(4);
	const [interest, setInterest] = useState(0);
	const [totalAmount, setTotalAmount] = useState(0);

	const calculateCompoundInterest = () => {
		const rateDecimal = rate / 100;
		const amount = principal * Math.pow(1 + rateDecimal / timesCompounded, timesCompounded * time);
		const interestEarned = amount - principal;
		setTotalAmount(amount.toFixed(3));
		setInterest(interestEarned.toFixed(3));
	};

	return (
		<div>
			<h2>Compound Interest Calculator</h2>
			<hr />
			<div>
				<label>Principal Amount (Rs)</label>
				<input
					type="number"
					value={principal}
					onChange={(e) => setPrincipal(e.target.value)}
				/>
			</div>
			<div>
				<label>Annual Interest Rate (%)</label>
				<input
					type="number"
					value={rate}
					onChange={(e) => setRate(e.target.value)}
				/>
			</div>
			<div>
				<label>Time (years)</label>
				<input
					type="number"
					value={time}
					onChange={(e) => setTime(e.target.value)}
				/>
			</div>
			<div>
				<label>Times Compounded per Year</label>
				<input
					type="number"
					value={timesCompounded}
					onChange={(e) => setTimesCompounded(e.target.value)}
				/>
			</div>
			<button onClick={calculateCompoundInterest}>Calculate</button>
			<hr />
			<table>
				<tr>
					<th>Compound Interest (%)</th>
					<th>Total Amount (RS)</th>
				</tr>
				<tr>
					<td>{interest}</td>
					<td>{totalAmount}</td>
				</tr>
			</table>
		</div>
	);
};

export default CompoundInterestCalculator;
