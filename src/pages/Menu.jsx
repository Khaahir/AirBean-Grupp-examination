import { useEffect, useState } from "react";
import Button from "../Componets/Button/Button";

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
        console.log(result.menu);
      } catch (Error) {
        console.log(Error);
      }
    };
    getData();
  }, []);
  return (
    <>
      <section className="menu-container">
        <img
          className="top-leafs"
          src="./src/assets/Top-leafs.png"
          alt="top leaf"
        />
        <h1 className="menu-header-title">Meny</h1>
        <ul className="">
          {data.map((item) => {
            return (
              <li className="list-container" key={item.id}>
                <span className="menu-title">
                  <Button variant={"menu"}>&#43;</Button>
                  {item.title}
                </span>
                <span className="menu-desc">{item.desc}</span>
                <span className="menu-price">{item.price} kr</span>
              </li>
            );
          })}
        </ul>
        <img
          className="buttom-leafs"
          src="./src/assets/buttom-leafs.png"
          alt="buttom leafs"
        />
      </section>
    </>
  );
}
