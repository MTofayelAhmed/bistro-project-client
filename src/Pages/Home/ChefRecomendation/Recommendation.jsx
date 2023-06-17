import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import RecommendCard from "../RecommendCard/RecommendCard";


const Recommendation = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const recommendItems = data.filter((item) => item.category === "recommend");
        setMenu(recommendItems)
      })
  }, []);


  return (
   <section className="mb-16">
    <SectionTitle
    heading='chef recommends'
    subHeading="should try"
    ></SectionTitle>
    <div className="grid grid-cols-3 gap-10 mt-12">
    {menu.map((item) => (
          <RecommendCard key={item._id} item={item} />
        ))}
    </div>



   </section>
  );
};

export default Recommendation;
