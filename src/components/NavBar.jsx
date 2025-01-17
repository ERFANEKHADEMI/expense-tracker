import './style.css';
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Expense Tracker</div>
      <ul className="nav-links">
        <li><a href="#home"><i className="fas fa-home"></i>Home</a></li>
        <li><a href="#transactions"><i className="fas fa-exchange-alt"></i>Transactions</a></li>
        <li><a href="#categories"><i className="fas fa-list-alt"></i>Categories</a></li>
        <li><a href='#expenselist'><i className='fas fa-dollar-sign'></i>Expenses</a></li>
      </ul>
      <div className="buttons">
        <button className="primary-button" ><i className="fas fa-plus"></i>Add Expense</button>
        <button className="secondary-button"><i className="fas fa-sign-out-alt"></i>Log Out</button>
      </div>
    </nav>
  );
}

export default Navbar;


