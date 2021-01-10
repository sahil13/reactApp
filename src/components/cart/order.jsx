import axios from "axios";
import { useEffect, useState } from "react";

function Order() {
  const [data1, setData] = useState([]);
  useEffect(() => {
    async function getProducts() {
      try {
        const { data } = await axios("http://localhost/oshop/cart.php");
        setData(data);
      } catch (ex) {
        console.log(ex);
      }
    }
    getProducts();
  });
  return (
    <ul>
      {data1.map(d => {
        return <li key={d.id}>{d.product_name}</li>;
      })}
    </ul>
  );
}

export default Order;
