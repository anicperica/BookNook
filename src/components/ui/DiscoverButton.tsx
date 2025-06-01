interface DiscoverButtonProps {
  children: React.ReactNode;
}

export default function DiscoverButton({ children }: DiscoverButtonProps) {
  return (
    <button className="w-8 h-8 p-1 rounded-full bg-white hover:bg-primary cursor-pointer">
      {children}
    </button>
  );
}
