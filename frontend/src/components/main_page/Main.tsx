import React from "react";
import Header from "../main_comp/Header.tsx";
import Item_list from "../main_comp/Item_list.tsx";

const Main = () => {
  return (
    <>
    <section>
      <div className="container">
      <Header />
      <Item_list />
      </div>
      </section>
    </>
  );
};

export default Main;
