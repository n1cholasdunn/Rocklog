import NavBar from './NavBar/NavBar';

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
