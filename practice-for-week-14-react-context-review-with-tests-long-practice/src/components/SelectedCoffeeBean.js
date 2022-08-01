import { useContext } from "react";
import CoffeeProvider from "../context/CoffeeContext";

const SelectedCoffeeBean = () => {
  const { coffeeBean } = useContext(CoffeeProvider);
  
  return (
    <div className='selected-coffee'>
      <h2>{coffeeBean.name}</h2>
    </div>
  );
}

export default SelectedCoffeeBean;
