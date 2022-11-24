import Cards from "./components/Cards";
import Data from "./data.js";

function App() {
  return (
    <div className='flex flex-col justify-center items-center gap-10 min-h-screen bg-Body mx-auto font-sans'>
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
      <div className='flex text-center px-5 text-Text'>
        Challenge by Frontend Mentor. Coded by Yixuan Wang.
      </div>
    </div>
  );
}

export default App;
