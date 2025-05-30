
import './App.css'
import DisplayNumber from './components/Number'

function App() {
  

  return (
    <div className='flex min-h-screen  justify-center bg-[#e5d9c7] items-center ' >
      <div className='flex  flex-col border-3 rounded-4xl border-bg-[#6e7163] px-50 space-y-5 bg-[#472828] text-[#e5d9c7] p-40'>
        <div className='flex justify-between'>
           <h1 className='text-5xl font-mono mt-0 hover:font-extrabold'> Calculator </h1>
           <button type='submit' className='border px-4 py-1 border-2 rounded-4xl hover:bg-black text-md font-semibold'> clear </button>
          </div>
        <input  value={inputValue} type='number' className='w-full  hover:bg-black border rounded-lg h-20 text-4xl '/>
        <div className='flex items-center space-4 space-x-4 '>
          <DisplayNumber value={1} ></DisplayNumber>
          <DisplayNumber value={2} ></DisplayNumber>
          <DisplayNumber value={3} ></DisplayNumber>
          <DisplayNumber value={"+"} ></DisplayNumber>
          <DisplayNumber value={"/"} ></DisplayNumber>



        </div>
        <div className='flex space-4 items-center space-x-4'>
          <DisplayNumber value={4} ></DisplayNumber>
          <DisplayNumber value={5} ></DisplayNumber>
          <DisplayNumber value={6} ></DisplayNumber>
          <DisplayNumber value={"-"} ></DisplayNumber>
          <DisplayNumber value={"*"} ></DisplayNumber>


        </div>
        <div className='flex space-4 space-x-4'>
          <DisplayNumber value={7} ></DisplayNumber>
          <DisplayNumber value={8} ></DisplayNumber>
          <DisplayNumber value={9} ></DisplayNumber>
          <DisplayNumber value={0} ></DisplayNumber>
          <DisplayNumber value={"="} ></DisplayNumber>
        </div>

        <footer className='font-bold'> made with &hearts; by hadi </footer>

      </div>
    </div>
  )
}

export default App
