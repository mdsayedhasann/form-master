import React, { createContext, useState } from "react";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandfather.css";

export const AssetContext = createContext("gold");
export const MoneyContext = createContext('1')

const GrandFather = () => {
  // eslint-disable-next-line no-unused-vars
  const asset = "diamond";
  const [money, setMoney] = useState(1000)
  return (
    <div>

      <h2>Grand Father</h2>
      <p> {money} </p>
      <MoneyContext.Provider value={[money, setMoney]}>
      <AssetContext.Provider value="Hera">
        <section className="flex">
          <Dad asset={asset}></Dad>
          <Uncle asset={asset}></Uncle>
          <Aunty></Aunty>
        </section>
      </AssetContext.Provider>
      </MoneyContext.Provider>
      
    </div>
  );
};

export default GrandFather;
