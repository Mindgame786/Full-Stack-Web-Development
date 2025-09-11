function MyImage() {
  let MyPathImage = "https://plus.unsplash.com/premium_photo-1673643405538-de0f82933fcb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D";
  return (
    <>
      <span className=' text-gray-900 text-shadow-xs font-bold text-4xl mt-2 bg-gray-300 py-2 rounded-sm mr-100 px-8 '>Nature</span>

      <div className="items-center justify-content-center text-center">


        <img src={MyPathImage} alt="Nature-Image" className="w-[600px] h-[340px] mt-6 mx-auto rounded-lg shadow-gray-900 shadow-[0_5px_10px_rgba(0,0,0,0.10)] object-cover " />
      </div>
    </>
  )
}

export default MyImage;