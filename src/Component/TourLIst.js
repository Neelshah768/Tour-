import TourItem from "./TourItem";

const TourList = (props) => {
  const dummy_data = [
    {
      id: 1,
      name: "Best of Paris in 7 Days Tour",
      info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas.",
      image:"https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
      price:"1,995"
    },
    {
      id: 1,
      name: "Best of Paris in 7 Days Tour",
      info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas.",
      image:"https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
      price:"1,995"
    },
    
  ];
  return <div>
      <TourItem  data={dummy_data}/>
  </div>;
};

export default TourList;
