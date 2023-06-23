import { useState, ReactNode } from "react";

interface AccordionButtonProps {
  buttonText: string;
  content: ReactNode;
}

export function AccordionButton({ buttonText, content }: AccordionButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="w-full text-start py-3" onClick={toggleAccordion}>
        {buttonText}
      </button>
      {isOpen && <div className="p-4 bg-slate-100 text-[16px]">{content}</div>}
    </div>
  );
}
