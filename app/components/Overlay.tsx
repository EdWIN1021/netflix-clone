const Overlay = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="h-full"
      style={{
        backgroundImage:
          "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
      }}
    >
      {children}
    </div>
  );
};

export default Overlay;
