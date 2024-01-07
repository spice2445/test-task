import { useEffect, useRef, useState } from "react";
import './index.css';

type SelectTypes = 'account' | 'wallet' | 'bonuses' | 'bets' | 'history';

const options: SelectTypes[] = ['account', 'wallet', 'bonuses', 'bets', 'history'];

const ArrowIcon = () => (
  <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.315414 4.932C0.315414 4.82 0.371414 4.764 0.483414 4.764H7.27341L4.44541 1.978C4.36141 1.90333 4.36141 1.824 4.44541 1.74L5.17341 1.026C5.25741 0.951333 5.33675 0.951333 5.41141 1.026L9.62541 5.352C9.69075 5.436 9.69075 5.51533 9.62541 5.59L5.41141 9.916C5.33675 9.99067 5.25741 9.99067 5.17341 9.916L4.44541 9.202C4.36141 9.12733 4.36141 9.05267 4.44541 8.978L7.27341 6.192H0.483414C0.371414 6.192 0.315414 6.136 0.315414 6.024V4.932Z" fill="white"/>
  </svg>    
)
export const Select = () => {
  const [selectedOption, setSelectedOption] = useState<SelectTypes>('account');
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
    
  const toggleSelect = () => setIsOpen((prev) => !prev);
  const selectOption = (option: SelectTypes) => {
    setSelectedOption(option);
    setIsOpen(false);
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  return (
    <div className="select" ref={selectRef}>
      <button className="select-btn" type="button" onClick={toggleSelect}>
          {selectedOption}
      </button>    
      {isOpen && (
        <div className="select-options">
          {options.map((option, index) => (
            <button
              key={option}
              type="button"
              onClick={() => selectOption(option)}
              className={`select-options__item ${index === 0 && 'first'} ${index === options.length - 1 && 'last'}`}
            >
              <div>{option}</div>
              <ArrowIcon/>
            </button>
          ))}
        </div>
      )}
      </div>

    )
}