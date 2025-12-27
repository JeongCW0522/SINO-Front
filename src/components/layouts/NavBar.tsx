import { BurgerIcon, Logo } from '@/assets';
import { useState } from 'react';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className='fixed top-0 left-0 right-0 z-40 p-6 sm:px-12'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <button type='button' onClick={() => navigate('/')} className='flex items-center'>
              <Logo height={20} width={70} />
            </button>
            <span className='font-semibold text-[#FAFAFA]'>SINO</span>
          </div>

          <button
            type='button'
            onClick={() => setIsSideBarOpen(true)}
            className='bg-bgColor p-2 hover:bg-gray-600 transition rounded-full cursor-pointer'
          >
            <BurgerIcon />
          </button>
        </div>
      </header>

      <SideBar open={isSideBarOpen} onClose={() => setIsSideBarOpen(false)} />
    </>
  );
};

export default NavBar;
