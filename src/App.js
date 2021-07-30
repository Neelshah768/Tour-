import TourList from "./Component/TourLIst";
const App = (props) => {
  return ( 
    <div>
      <h2 className="title">Our Tours</h2>
      <div className="underline"></div>
      <TourList />
    </div>
   );
}
 
export default App;