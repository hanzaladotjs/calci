
  
  export default function DisplayNumber({ value, onclick}: any) {
    return (
      <button  onClick={onclick} className="px-6 rounded-4xl text-lg font-semibold py-3 border-3 hover:bg-black flex ">
        {value}
      </button>
    );
  }