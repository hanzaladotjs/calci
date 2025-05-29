
import './App.css'
import DisplayNumber from './components/Number'

function App() {
  

  return (
    <div className='flex justify-center bg-[#e5d9c7] items-center ' >
      <div className='flex flex-col border-3 rounded-4xl border-bg-[#6e7163] px-40 space-y-5 bg-[#472828] text-[#e5d9c7] py-50'>
        <h1 className='text-5xl font-mono mt-0'> Calculator </h1>
        <input  type='number' className='w-full  border text-2xl '/>
        <div className='flex items-center space-4 space-x-4'>
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
        <div className='flex space-4 items-center space-x-4'>
          <DisplayNumber value={7} ></DisplayNumber>
          <DisplayNumber value={8} ></DisplayNumber>
          <DisplayNumber value={9} ></DisplayNumber>
          <DisplayNumber value={0} ></DisplayNumber>
          <DisplayNumber value={"="} ></DisplayNumber>
        </div>
      </div>
    </div>
  )
}

export default App
