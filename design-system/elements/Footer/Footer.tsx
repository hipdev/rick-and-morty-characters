export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center pb-6 pt-8 md:pt-10">
      <p className="text-xs text-white/60 md:text-sm">
        MIT License - {new Date().getFullYear()} Hip Dev
      </p>
    </footer>
  );
};
