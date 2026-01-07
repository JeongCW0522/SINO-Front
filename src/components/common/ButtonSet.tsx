import Button from './Button';

interface ButtonSetProps {
  handlePrev?: () => void;
  handleNext?: () => void;
  backText: string;
  nextText: string;
}

const ButtonSet = ({ handlePrev, handleNext, backText, nextText }: ButtonSetProps) => {
  return (
    <div className='flex items-center gap-7'>
      <Button type='button' className='bg-[#E1E0E0]! text-[#7C7979]!' onClick={handlePrev}>
        {backText}
      </Button>
      <Button type='button' onClick={handleNext}>
        {nextText}
      </Button>
    </div>
  );
};

export default ButtonSet;
