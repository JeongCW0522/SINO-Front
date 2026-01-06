import Button from '@/components/common/Button';
import Dropdown from '@/components/common/Dropdown';
import { useNavigate } from 'react-router-dom';

const yearItems = ['2021', '2022', '2023', '2024', '2025'];
const monthItems = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

const SelectDate = () => {
  const navigate = useNavigate();
  return (
    <main className='min-h-screen flex flex-col items-center justify-center text-white'>
      <div className='flex flex-col items-center justify-center space-y-30'>
        <div className='h-8' />

        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-3 mb-40'>
            <div className='flex flex-col items-center gap-3'>
              <div className='text-lg font-semibold text-white/90'>
                <span>Choose the </span>
                <span className='text-[#FF6F4B]'>Year</span>
              </div>
              <Dropdown items={yearItems} className='w-105' />
            </div>

            <div className='flex flex-col items-center gap-3'>
              <div className='text-lg font-semibold text-[#FF6F4B]'>Month</div>
              <Dropdown items={monthItems} />
            </div>
          </div>

          <Button type='button' onClick={() => navigate('/')} className='text-black'>
            Get started
          </Button>
        </div>
      </div>
    </main>
  );
};

export default SelectDate;
