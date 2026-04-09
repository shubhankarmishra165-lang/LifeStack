// Navbar.jsx
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css';

// ── Icons ─────────────────────────────────────────────────
const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L4 5v6c0 5.25 3.5 10.14 8 11.35C16.5 21.14 20 16.25 20 11V5z" />
    <circle cx="12" cy="12" r="2.5" fill="white" stroke="none" />
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const BellIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6"  x2="21" y2="6"  />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const NAV_LINKS = ['Home', 'Events','Passwords', 'Notes', 'Expenses'];

// ── GlitchButton ───────────────────────────────────────────────
const GlitchButton = ({ label, onClick }) => {
  const path=label==="Home"?"/":`/${label.toLowerCase()}`
return (
   <Link className="glitch-btn link" to={path}>{label}</Link> 
);
}

// ── FloatingField ──────────────────────────────────────────────
const FloatingField = ({ type = 'text', label }) => (
  <div className="field">
    <input type={type} placeholder=" " required />
    <span>{label}</span>
  </div>
);

// ── AuthModal ──────────────────────────────────────────────────
const AuthModal = ({ isOpen, defaultTab, onClose }) => {
  const [tab, setTab] = useState(defaultTab);

  // Sync tab when parent changes defaultTab (login vs register btn)
  React.useEffect(() => { setTab(defaultTab); }, [defaultTab]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="form-card">
        <button className="form-close" onClick={onClose}>✕</button>

        {/* Tabs */}
        <div className="form-tabs">
          <button className={`tab-btn ${tab === 'login' ? 'active' : ''}`} onClick={() => setTab('login')}>
            Login
          </button>
          <button className={`tab-btn ${tab === 'register' ? 'active' : ''}`} onClick={() => setTab('register')}>
            Register
          </button>
        </div>

        {/* Login panel */}
        {tab === 'login' && (
          <div className="form-panel">
            <p className="form-title">Welcome back</p>
            <p className="form-msg">Sign in to access your vault.</p>
            <FloatingField type="email"    label="Email"    />
            <FloatingField type="password" label="Password" />
            <button className="form-submit">Sign In</button>
            <p className="form-signin">
              No account? <a onClick={() => setTab('register')}>Register here</a>
            </p>
          </div>
        )}

        {/* Register panel */}
        {tab === 'register' && (
          <div className="form-panel p-3">
            <p className="form-title">Register</p>
            <p className="form-msg">Signup now and get full access to your vault.</p>
            <div className="field-row">
              <FloatingField label="Firstname" />
            </div>
            <div className="field-row">
              <FloatingField label="Lastname"  />
            </div>
            <FloatingField type="email"    label="Email"            />
            <FloatingField type="password" label="Password"         />
            <FloatingField type="password" label="Confirm password" />
            <button className="form-submit">Create Account</button>
            <p className="form-signin">
              Already have an account? <a onClick={() => setTab('login')}>Sign in</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// ── Navbar ─────────────────────────────────────────────────────
const Navbar = () => {
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [modalOpen,   setModalOpen]   = useState(false);
  const [defaultTab,  setDefaultTab]  = useState('login');

  const openModal = (tab) => {
    setDefaultTab(tab);
    setModalOpen(true);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <a href="#" className="logo">
          <div className="logo-icon"><ShieldIcon /></div>
          <span className="logo-text">Life<span>Stack</span></span>
        </a>

        {/* Search */}
        <div className="search-wrap">
          <SearchIcon />
          <input className="search-input" type="text" placeholder="Search passwords, events, notes…" />
        </div>

        {/* Nav links */}
        <div className="nav-links">
          {NAV_LINKS.map((l) => <GlitchButton key={l} label={l} />)}
        </div>

        {/* Auth buttons */}
        <div className="auth-btns">
          <button className="btn-login"    onClick={() => openModal('login')}>Login</button>
          <button className="btn-register" onClick={() => openModal('register')}>Register</button>
        </div>

        {/* Right icons */}
        <div className="right-icons">
          <div className="divider" />
          <button className="icon-btn" title="Notifications">
            <BellIcon />
            <span className="notif-dot" />
          </button>
          <div className="avatar" title="Profile">YU</div>
          <button className="icon-btn hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* Mobile menu — column layout */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="search-wrap mobile-search">
            <SearchIcon />
            <input className="search-input" type="text" placeholder="Search…" />
          </div>
          <div className="mobile-nav-links">
            {NAV_LINKS.map((l) => <GlitchButton key={l} label={l} />)}
          </div>
          <div className="mobile-auth-btns">
            <button className="btn-login"    onClick={() => openModal('login')}>Login</button>
            <button className="btn-register" onClick={() => openModal('register')}>Register</button>
          </div>
        </div>
      )}

      {/* Auth modal */}
      <AuthModal
        isOpen={modalOpen}
        defaultTab={defaultTab}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default Navbar;