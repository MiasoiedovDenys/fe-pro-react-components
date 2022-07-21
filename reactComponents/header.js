import React from 'react';

const Header = (props) => {
  const navData = [
    { href: '/', text: 'Home' },
    { href: '/#about', text: 'About us' },
    { href: '/#contact', text: 'Contact us' },
    { href: '/#help', text: 'Help page' },
  ];
  return (
    <header className="header">
      <div className="container">
        <a href="" className="logo">
          My logo
        </a>

        <nav>
          <ul className="nav-list">
            {navData.map(({ href, text }) => {
              return (
                <li key={href} className="nav-list__item">
                  <a href={href}>{text}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
