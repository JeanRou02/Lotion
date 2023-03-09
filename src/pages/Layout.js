import { Outlet, Link } from "react-router-dom";
import './../styles/Layout.css';

let nav = false;

const Layout = () => {
  return (
    <>
      <header className='main-header'>
        <div className='left'>
          <button onClick={() => {nav = true}}>&#9776;</button>
        </div>
        <div className='center'>
          <h1>Lotion</h1>
          <h5>Like Notion, but worse.</h5>
        </div>
        <div className='right'></div>
      </header>
      <Outlet context={[nav]}/>
    </>
  )
};

export default Layout;