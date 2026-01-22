//import { group } from './pages/group.js';
//import { member } from './pages/member.js';
import { andTEAM } from './pages/andTEAM.js';
import { ej } from './pages/individual/ej.js';
import { fuma } from './pages/individual/fuma.js';
import { k } from './pages/individual/k.js';
import { nico } from './pages/individual/nico.js';
import { yuma } from './pages/individual/yuma.js';
import { jo } from './pages/individual/jo.js';
import { harua } from './pages/individual/harua.js';
import { taki } from './pages/individual/taki.js';
import { maki } from './pages/individual/maki.js';

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');

    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);

    if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); 
            sidebar.classList.toggle('active');
            container.classList.toggle('sidebar-open');
            overlay.classList.toggle('active');
        });
    }

    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && e.target !== menuToggle) {
            closeSidebar();
        }
    });

    const navButtons = {
        andTEAMBtn: { hash: '#/andTEAM', section: 'andTEAM', func: andTEAM },
        ejBtn: { hash: '#/EJ', section: 'EJ', func: ej },
        fumaBtn: { hash: '#/FUMA', section: 'FUMA', func: fuma },
        kBtn: { hash: '#/K', section: 'K', func: k },
        nicoBtn: { hash: '#/NICO', section: 'NICO', func: nico },
        yumaBtn: { hash: '#/YUMA', section: 'YUMA', func: yuma },
        joBtn: { hash: '#/JO', section: 'JO', func: jo },
        haruaBtn: { hash: '#/HARUA', section: 'HARUA', func: harua },
        takiBtn: { hash: '#/TAKI', section: 'TAKI', func: taki },
        makiBtn: { hash: '#/MAKI', section: 'MAKI', func: maki },
    };

    for (const [id, { hash, section, func }] of Object.entries(navButtons)) {
        const btn = document.getElementById(id);
        if (!btn) continue;
        btn.addEventListener('click', e => {
            e.preventDefault();
            history.pushState({ section }, '', hash);
            showSection(section);
            func();
            sidebar.classList.remove('active');
            container.classList.remove('sidebar-open');
        });
    }
    // load correct page on initial load or hash change
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('load', handleHashChange);
});

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');
    const overlay = document.querySelector('.sidebar-overlay');

    if (sidebar) sidebar.classList.remove('active');
    if (container) container.classList.remove('sidebar-open');
    if (overlay) overlay.classList.remove('active');
}

function handleHashChange() {
    const hash = window.location.hash;
    switch (hash) {
        case '#/andTeam': showSection('andTEAM'); andTEAM(); break;
        case '#/EJ': showSection('EJ'); ej(); break;
        case '#/FUMA': showSection('FUMA'); fuma(); break;
        case '#/K': showSection('K'); k(); break;
        case '#/NICO': showSection('NICO'); nico(); break;
        case '#/YUMA': showSection('YUMA'); yuma(); break;
        case '#/JO': showSection('JO'); jo(); break;
        case '#/HARUA': showSection('HARUA'); harua(); break;
        case '#/TAKI': showSection('TAKI'); taki(); break;
        case '#/MAKI': showSection('MAKI'); maki(); break;
        default:
            showSection('andTEAM');
            andTEAM();
    }
}

function showSection(section) {
    closeSidebar();
    const sections = ['andTEAM', 'EJ', 'FUMA', 'K', 'NICO', 'YUMA', 'JO', 'HARUA', 'TAKI', 'MAKI'];
    sections.forEach(id => {
        const element = document.getElementById(`${id}Section`);
        if (!element) return;

        const isVisible = (id === section);
        element.style.display = isVisible ? 'block' : 'none';
        /*
        if (isVisible && id === "andTEAM") {
            resetandTeam();
        }
        if (isVisible && id === 'EJ') {
            resetEJ();
        }
        if (isVisible && id === 'FUMA') {
            resetFUMA();
        }
        if (isVisible && id === 'K') {
            resetK();
        }
        if (isVisible && id === 'NICO') {
            resetNICO();
        }
        if (isVisible && id === 'YUMA') {
            resetYUMA();
        }
        if (isVisible && id === 'JO') {
            resetJO();
        }
        if (isVisible && id === 'HARUA') {
            resetHARUA();
        }
        if (isVisible && id === 'TAKI') {
            resetTAKI();
        }
        if (isVisible && id === 'MAKI') {
            resetMAKI();
        }
        */
    });

    const menuItems = document.querySelectorAll('#sidebarMenu a');
    menuItems.forEach(item => item.classList.remove('active'));

    const activeItem = document.querySelector(`#sidebarMenu a[data-section="${section}"]`);
    if (activeItem) activeItem.classList.add('active');
    /*
    const tapeFilePage = document.getElementById('tapeFilePage');
    if (tapeFilePage) tapeFilePage.style.display = 'none';
    */

}
