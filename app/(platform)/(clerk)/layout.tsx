const ClerkLayout = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full flex items-center justify-center bg-slate-100 mt-[30%]">
      {children}
    </div>
  );
};

export default ClerkLayout;