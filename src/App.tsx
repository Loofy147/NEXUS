import { useEffect, useState } from 'react';
import { Footer, Header, NexusSite } from './components/nexus-site';
import { SitePage } from './pages/site-pages';

const pageRoutes = new Set(['/method','/systems','/work','/proof','/about','/contact']);
const normalize = (p: string) => p.length > 1 && p.endsWith('/') ? p.slice(0,-1) : p;

export default function App() {
  const [path,setPath] = useState(normalize(window.location.pathname));
  useEffect(() => {
    const sync = () => setPath(normalize(window.location.pathname));
    window.addEventListener('popstate',sync);
    return () => window.removeEventListener('popstate',sync);
  },[]);
  useEffect(() => {
    document.title = path === '/' ? 'NEXUS — Verifiable Interface Systems' : 'NEXUS / ' + (pageRoutes.has(path) ? path.slice(1) : '404');
  },[path]);
  if(path === '/') return <NexusSite />;
  if(pageRoutes.has(path)) return <SitePage route={path as '/method'|'/systems'|'/work'|'/proof'|'/about'|'/contact'} />;
  return <><Header /><main className="section-shell state-page"><div className="state-frame"><span className="state-index">NEXUS / NO SIGNAL / 404</span><h1>Nothing at this address<span>.</span></h1><p>The requested surface does not exist.</p><a className="btn btn-nexus btn-size-nexus" href="./">Return to NEXUS ↗</a></div></main><Footer /></>;
}
