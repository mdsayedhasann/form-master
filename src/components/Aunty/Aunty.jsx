import React from "react";
import Cousin from "../Cousin/Cousin";
import { useContext } from "react";
import { MoneyContext } from "../GrandFather/GrandFather";

const Aunty = ({ name }) => {
  const [money, setMoney] = useContext(MoneyContext);

  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={"Rokib"}></Cousin>
        <Cousin name={"Eunus"}></Cousin>
      </section>
      <p>
        {money}
      </p>
      <button onClick={() => setMoney(money - 100)}>Add Money</button>
    </div>
  );
};

export default Aunty;
