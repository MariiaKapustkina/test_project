import React from 'react';
import './Sidebar.scss';

export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
  return (
    <>
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="sidebar-close-button" onClick={toggleSidebar} aria-label="Close menu">✖</button>
        <nav className="sidebar-nav">
          <ul className="sidebar-nav-list">
            <li><a href="#home" onClick={toggleSidebar}>HOME</a></li>
            <li><a href="#about" onClick={toggleSidebar}>ABOUT</a></li>
            <li><a href="#shop" onClick={toggleSidebar}>SHOP</a></li>
            <li><a href="#blog" onClick={toggleSidebar}>BLOG</a></li>
            <li><a href="#contact" onClick={toggleSidebar}>CONTACT</a></li>
          </ul>
        </nav>
      </aside>

      {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
}