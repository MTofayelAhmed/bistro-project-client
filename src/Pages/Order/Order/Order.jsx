import Cover from "../../Shared/Cover/Cover";
import orderImage from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import {useParams} from 'react-router';
import OrderTab from "../OrderTab/OrderTab";
const Order = () => {
  

  const [menu] = useMenu();
  const{ category} = useParams()
  const categories = ["salad", "pizza", "soup", "dessert", "drink"]
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const drinks = menu.filter((item) => item.category === "drinks");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const desserts = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");

  return (
    <div className="mb-14  ">
      <Cover img={orderImage} title="Your Order"></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soup</Tab>
          <Tab>dessert</Tab>
          <Tab>drink</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
