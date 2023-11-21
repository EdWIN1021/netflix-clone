const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="mt-2 w-full bg-black py-16 text-center text-white">
      <div className="mx-8"> {children}</div>
    </section>
  );
};

export default Container;
