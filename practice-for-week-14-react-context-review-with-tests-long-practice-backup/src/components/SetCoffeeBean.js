import coffeeBeans from '../mockData/coffeeBeans.json';
import { useContext } from 'react';
import {CoffeeContext} from '../context/CoffeeContext';

const SetCoffeeBean = ({coffeeBeans}) => {
  const { coffeeBean, setCoffeeBeanId } = useContext(CoffeeContext);
  console.log()
  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        name="coffee-bean"
        onChange={(e) => setCoffeeBeanId(e.target.value)}
        value={coffeeBean.id}
      >
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={bean.id}
          >
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SetCoffeeBean;