
  
  export default function DisplayNumber({ value, onclick}: any) {
    return (
      <button  onClick={() => onclick(value)} className=" md:px-9  px-3 rounded-4xl text-lg font-semibold md:py-4 py-1 border-3 hover:bg-black flex ">
        {value}
      </button>
    );
  }