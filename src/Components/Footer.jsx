
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-14 flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col gap-1.5 items-center sm:items-start md:px-8 xl:px-0">
          <div className="relative flex items-center w-full">
            <div className="grow h-px bg-black" />
            <div className="mx-4">
              {/* <Logo /> */}
              <figure className="flex items-center justify-center w-16 h-16 rounded-full overflow-hidden">
                  <img src="/icon/logo.png" alt="logo" />
              </figure>
            </div>
            <div className="grow h-px bg-black" />
          </div>
          <p className="text-muted-foreground text-center">
            {currentYear} © Faisal Portfolio - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
