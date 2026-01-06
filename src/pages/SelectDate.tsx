import Dropdown from '@/components/common/Dropdown';

const yearItems = ['2021', '2022', '2023', '2024', '2025'];
const monthItems = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

const SelectDate = () => {
  return (
    <div className='min-h-dvh flex flex-col gap-3 items-center justify-center'>
      <div className='flex items-center gap-3'>
        <Dropdown items={yearItems} className='w-105' />
        <Dropdown items={monthItems} />
      </div>
    </div>
  );
};

export default SelectDate;
