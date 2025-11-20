// styling.jsx (No:1)

import './App.css';
import {cardsData} from './CardFunction';
import Card from './CardFunction';

// MAIN component (Yeh aapka main file hai)

export  function Styling() {
  return (
    <div className="p-6 bg-sky-100 min-h-screen">


      <div className="flex flex-wrap gap-4 justify-around mt-8">

        {cardsData.map((card, i) => (
          <Card key={i} {...card} />
        ))}

      </div>



    </div>
  );
}
