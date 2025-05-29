
  
  export default function DisplayNumber({ value, onclick}: any) {
    return (
      <button  onClick={onclick} className="px-6 py-3 border flex ">
        {value}
      </button>
    );
  }