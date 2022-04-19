
import { NavLink, Outlet } from 'react-router-dom';
import Logo from './Logo';

export const Layout = () => {
  return (
    <>
      <header >
        <Logo/>
        <h1 className="main-title">My application</h1>
        <div className="nav-link">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/comments">Comments</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="/notFound"></NavLink>
        </div>
      </header>

      <main  className="main-container"> 
        <Outlet />
      </main>

      {/* <footer>-- 2022 --</footer> */}

    </>
  );
};
