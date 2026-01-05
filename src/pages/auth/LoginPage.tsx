import Button from '@/components/common/Button';

const LoginPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-white'>
      <div className='flex flex-col items-center justify-center space-y-30'>
        <h1 className='text-3xl font-medium tracking-wide'>Create an account</h1>

        <form className='flex flex-col items-center'>
          <div className='flex flex-col items-center gap-3 mb-40'>
            <label className='text-xl tracking-wide'>Name</label>
            <input
              type='text'
              placeholder='Enter your Username'
              autoComplete='off'
              className='w-120 py-1.5 text-center font-semibold rounded-full bg-[#E1E0E0] text-xl text-gray-800 outline-none'
            />
          </div>
          <Button type='submit' className='text-black'>
            Get started
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
