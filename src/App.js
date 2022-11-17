import Cards from "./components/Cards";
import Data from "./data.js";

function App() {
  return (
    <div className='App'>
      {Data.map((item, index) => (
        <Cards
          key={index}
          imgUrl={item.imgUrl}
          title={item.title}
          description={item.description}
          name={item.name}
          profile={item.profile}
          date={item.date}
        />
      ))}
      <div className='footer'>
        Challenge by Frontend Mentor. Coded by Yixuan Wang.
      </div>
    </div>
  );
}

export default App;
