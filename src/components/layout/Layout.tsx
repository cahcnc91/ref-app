import Navbar from './NavBar';
import Footer from './Footer';
import { ReactNode, FC } from 'react';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
