import { Link } from "react-router-dom";
import shellImg from "./assets/shell-ss.png";

function App() {
  return (
    <div className='min-h-screen min-w-full overflow-hidden bg-slate-200'>
      <div className='max-w-[1000px] mx-auto px-4 py-5'>
        <h1 className='text-center font-semibold text-xl'>Website Clone</h1>
        <h3 className='text-center text-slate-500'>
          Learn tailwind css by cloning websites
        </h3>

        <div className='flex flex-wrap mt-[50px] md:grid md:grid-cols-3 gap-3'>
          <Link to={`shell`}>
            <div className='w-full shadow-sm bg-slate-50 p-3 rounded-lg'>
              <div className='w-full h-[300px]'>
                <img
                  src={shellImg}
                  className='w-full h-full object-cover'
                  alt=''
                />
              </div>
              <h2 className='text-[20px] mt-[8px]'>Shell</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
