import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';

interface DropdownProps {
  items: string[];
  className?: string;
}

type Slot = string | null;

const Dropdown = ({ items, className }: DropdownProps) => {
  const [open, setOpen] = useState(false);

  // 확정된 값 (버튼에 표시)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // 스크롤/미리보기 값
  const [previewIndex, setPreviewIndex] = useState(0);

  const clampIndex = (index: number) => Math.max(0, Math.min(items.length - 1, index));

  const getVisibleSlots = (items: string[], index: number): Slot[] => {
    return [items[index - 1] ?? null, items[index] ?? null, items[index + 1] ?? null];
  };

  const visibleSlots = getVisibleSlots(items, previewIndex);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    setPreviewIndex((prev) => (e.deltaY > 0 ? clampIndex(prev + 1) : clampIndex(prev - 1)));
  };

  const handleSelect = () => {
    setSelectedIndex(previewIndex);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen((prev) => !prev);

    if (!open && selectedIndex !== null) {
      setPreviewIndex(selectedIndex);
    }
  };

  const handleItemClick = (slotIndex: number) => {
    const targetIndex = clampIndex(previewIndex + (slotIndex - 1));

    // 가운데면 선택 확정
    if (slotIndex === 1) {
      handleSelect();
      return;
    }

    // 위/아래면 가운데로 이동만
    setPreviewIndex(targetIndex);
  };

  return (
    <div className='flex items-center justify-center'>
      <div className={clsx('relative min-w-40', className)}>
        <button
          onClick={handleOpen}
          className='relative w-full bg-[#E1E0E0] py-2 rounded-full text-lg font-semibold'
        >
          <span
            className='block text-center'
            style={{ color: selectedIndex === null ? '#969392' : '#000000' }}
          >
            {selectedIndex === null ? 'text' : items[selectedIndex]}
          </span>

          <div className='absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1'>
            <ChevronDown
              size={20}
              className={clsx('text-black transition-transform duration-300', open && 'rotate-180')}
            />
          </div>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.25 }}
              className='absolute w-full mt-2 bg-[#E1E0E0] rounded-[20px] overflow-hidden'
            >
              <div className='relative h-[140px] flex items-center' onWheel={handleWheel}>
                <div className='absolute left-2 right-2 h-10 bg-white rounded-xl top-1/2 -translate-y-1/2 pointer-events-none' />

                <ul className='w-full flex flex-col text-center relative z-10 select-none'>
                  {visibleSlots.map((item, slotIndex) => {
                    const isCenter = slotIndex === 1;

                    return (
                      <li
                        key={slotIndex}
                        onClick={() => handleItemClick(slotIndex)}
                        className={clsx(
                          'py-2 text-lg transition-colors',
                          isCenter
                            ? 'text-black font-semibold cursor-pointer'
                            : 'text-black/50 cursor-pointer',
                        )}
                      >
                        {item ?? '\u00A0'}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dropdown;
