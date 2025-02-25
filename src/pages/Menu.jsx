import { useEffect, useState } from "react";
import Button from "../Componets/Button/Button";
import HeaderBG from "../components/headerBG";
import FooterBG from "../components/footerBG";

export default function Menu() {
	const [data, setData] = useState([]);
	useEffect(() => {
		const getData = async () => {
			try {
				const resp = await fetch(
					"https://airbean-9pcyw.ondigitalocean.app/api/beans/"
				);
				const result = await resp.json();
				setData(result.menu);
			} catch (Error) {
				console.log(Error);
			}
		};
		getData();
	}, []);

	function sayHey(id, price) {
		console.log({ id, price });
	}

	return (
		<>
			<HeaderBG></HeaderBG>
			<section className="menu-container">
				<h1 className="menu-header-title">Meny</h1>
				<ul className="menu-box">
					{data.map((item) => {
						return (
							<li className="list-container" key={item.id}>
								<Button
									onClick={() => sayHey(item.id, item.price)}
									variant={"menu"}
								>
									+
								</Button>
								<span className="menu-title">{item.title}</span>
								<span className="menu-desc">{item.desc}</span>
								<span className="menu-price">{item.price} kr</span>
							</li>
						);
					})}
				</ul>
			</section>
			<FooterBG />
		</>
	);
}
