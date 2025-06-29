import { Link } from 'react-router';
import logo from '../assets/taskM.png'
import { ModeToggle } from '@/components/mode-toggle';


const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto h-16 flex justify-between items-center gap-3 px-5">
      <div className="flex items-center">
        <img className='size-9' src={logo} alt="" />
        <h1 className='font-semibold'>Task <span className='text-green-500'>Master</span></h1>
        <div className='flex ml-2 gap-2 font-semibold'>
          <Link to='/users'>User</Link>
          <Link to='/tasks'>Task</Link>
        </div>     
      </div>
      <div className='justify-end'>
            <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;