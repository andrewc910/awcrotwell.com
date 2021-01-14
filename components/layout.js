import Footer from './footer';
import Meta from './meta';
import Navbar from './navbar';

export default function Layout({ children }) {
  return (
    <>
      <Meta />

      <div>
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
