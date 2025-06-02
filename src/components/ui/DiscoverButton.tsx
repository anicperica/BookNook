 interface DiscoverButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}


export default function DiscoverButton({ children ,onClick,className}: DiscoverButtonProps) {
  return (
    <button onClick={onClick}   className={`w-8 h-8 p-1 rounded-full  cursor-pointer ${className}`}>
      {children}
    </button>
  );
}
