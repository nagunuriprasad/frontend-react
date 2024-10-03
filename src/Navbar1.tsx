import React, { useEffect, useRef } from 'react';
import './assets/css/Navbar1.scss';
const Navigation = () => {
  const menuRef = useRef(null);
  const burgerRef = useRef(null);
  const panelRefs = useRef([]);

  const openMenu = () => {
    burgerRef.current.classList.toggle('burger--active');
    menuRef.current.classList.toggle('nav__list--active');
  };

  const scrollFx = () => {
    const ds = window.scrollY;
    const vh = window.innerHeight;
    const of = vh / 4;

    // If the panel is in the viewport, reveal the content; if not, hide it.
    panelRefs.current.forEach((panel) => {
      const panelContent = panel.querySelector('.panel__content');
      if (panel.offsetTop < ds + of) {
        panelContent.classList.add('panel__content--active');
      } else {
        panelContent.classList.remove('panel__content--active');
      }
    });
  };

  const scrolly = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.hash.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });

      // Update the URL hash without jumping to the target
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      scrollFx();
    };

    burgerRef.current.addEventListener('click', openMenu, false);
    window.addEventListener('scroll', handleScroll, false);
    window.addEventListener('load', handleScroll, false);

    // Reveal content of the first panel by default
    if (panelRefs.current[0]) {
      panelRefs.current[0].querySelector('.panel__content').classList.add('panel__content--active');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="burger" ref={burgerRef}>
          <div className="burger__patty"></div>
        </div>

        <ul className="nav__list" ref={menuRef}>
          <li className="nav__item">
            <a href="#1" className="nav__link c-blue" onClick={scrolly}>
              <i className="fa fa-camera-retro"></i>
            </a>
          </li>
          <li className="nav__item">
            <a href="#2" className="nav__link c-yellow" onClick={scrolly}>
              <i className="fa fa-bolt"></i>
            </a>
          </li>
          <li className="nav__item">
            <a href="#3" className="nav__link c-red" onClick={scrolly}>
              <i className="fa fa-music"></i>
            </a>
          </li>
          <li className="nav__item">
            <a href="#4" className="nav__link c-green" onClick={scrolly}>
              <i className="fa fa-paper-plane"></i>
            </a>
          </li>
        </ul>
      </nav>

      <section className="panel b-blue" id="1" ref={(el) => (panelRefs.current[0] = el)}>
        <article className="panel__wrapper">
          <div className="panel__content">
            <h1 className="panel__headline">
              <i className="fa fa-camera-retro"></i>&nbsp;Cameras
            </h1>
            <div className="panel__block"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          </div>
        </article>
      </section>

      <section className="panel b-yellow" id="2" ref={(el) => (panelRefs.current[1] = el)}>
        <article className="panel__wrapper">
          <div className="panel__content">
            <h1 className="panel__headline">
              <i className="fa fa-bolt"></i>&nbsp;Lightning
            </h1>
            <div className="panel__block"></div>
            <p>Paleo authentic mlkshk taxidermy...</p>
          </div>
        </article>
      </section>

      <section className="panel b-red" id="3" ref={(el) => (panelRefs.current[2] = el)}>
        <article className="panel__wrapper">
          <div className="panel__content">
            <h1 className="panel__headline">
              <i className="fa fa-music"></i>&nbsp;Music
            </h1>
            <div className="panel__block"></div>
            <p>Beard sriracha kitsch literally...</p>
          </div>
        </article>
      </section>

      <section className="panel b-green" id="4" ref={(el) => (panelRefs.current[3] = el)}>
        <article className="panel__wrapper">
          <div className="panel__content">
            <h1 className="panel__headline">
              <i className="fa fa-paper-plane"></i>&nbsp;Paper Planes
            </h1>
            <div className="panel__block"></div>
            <p>90's wayfarers lomo you probably haven't heard of them...</p>
          </div>
        </article>
      </section>

      <a
        href="http://ettrics.com/code/vertical-layout-navigation/"
        className="logo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="logo"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/45226/ettrics-logo.svg"
          alt="Ettrics Logo"
        />
      </a>
    </>
  );
};

export default Navigation;
