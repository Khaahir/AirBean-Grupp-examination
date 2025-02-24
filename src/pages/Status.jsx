import Button from "../Componets/Button/Button";
import "../styles/Status-css/status.scss";
import Drone from "../assets/svg/drone.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// order history är svaret som vi får från api:et efter att vi postat vår order

const Status = ({ orderHistory }) => {
	const [orderEta, setOrderEta] = useState(null);
  
	useEffect(() => {
	  if (!orderHistory?.orderNr) return;
  
	  fetch(
		`https://airbean-9pcyw.ondigitalocean.app/api/beans/order/status/${orderHistory.orderNr}`,
		{
		  method: "GET",
		  headers: {
			"Content-Type": "application/json",
		  },
		}
	  )
		.then((response) => response.json())
		.then((data) => setOrderEta(data))
		.catch((error) => console.error("Error:", error));
	}, [orderHistory?.orderNr]);
	return (
	  <div className="statusContainer">
		<p>
		  Ordernummer <b> {orderHistory ? orderHistory.orderNr : "Inga order hittade"}</b>
		</p>
		<img src={Drone} alt="dronePic" />
		<h3>Din beställning är på väg!</h3>
		<p>
		  <b>{orderEta ? orderEta.eta : "0"}</b> Minuter
		</p>
		<Button variant={'statusbtn'}><Link to={"/menu"}>Ok, cool!</Link></Button>
	  </div>
	);
  };
  
  export default Status;
  