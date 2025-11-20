// CardFunction.jsx

// -------------------
// Data (cardsData)
// -------------------
export const cardsData = [
  { 
    title: "Selfie Movement", 
    img: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60" 
  },
  
  { title: "Mountain View", img: "https://media.istockphoto.com/id/1124801723/photo/hiker-girl-on-the-mountain-top-oncept-of-freedom-victory-active-lifestyle-oludeniz-turkey.jpg?s=612x612&w=0&k=20&c=8s7IXEnbyAwOPVyIrTqSX_En6r_wAzjoI2uYwl33PYM="
  },
  
  { 
    title: "Luxury Photo", 
    img: "https://plus.unsplash.com/premium_photo-1687382111414-7b87afa5da34?w=500&auto=format&fit=crop&q=60" 
  },
 
  
  
];

// -------------------
// Card Component
// -------------------
const TailwindClassArticle =
"w-80 sm:w-80  md:w-96 lg:w-[400px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-101 transition-transform duration-300";

export default function Card({ title, img }) {
  return (
    <article className={TailwindClassArticle}>

      <figure className="h-72 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover object-center rounded-t-xl"
          loading="lazy"
        />
      </figure>



      <figcaption className="bg-zinc-100 py-3 px-4 text-center font-bold text-gray-800">
        {title}
      </figcaption>


    </article>
  );
}

