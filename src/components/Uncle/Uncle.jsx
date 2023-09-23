/* eslint-disable no-undef */
import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";

const Uncle = ({ name, asset }) => {

  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin name={"Ratul"}></Cousin>
        <Cousin asset={asset} name={"Sohan"}></Cousin>
       
      </section>
    </div>
  );
};

export default Uncle;
