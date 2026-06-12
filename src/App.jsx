import { useState } from 'react';
import ProfileViewer from './components/ProfileViewer';
import RepoExplorer from './components/RepoExplorer';
import NavButton from './components/NavButton';


function App() {
const [activeTab, setActiveTab] = useState("profile");
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

return(
  <div
    className="relative h-screen flex flex-col overflow-hidden bg-linear-to-br from-gray-950 via-gray-900 to-black"
    onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
  >
    <div
      className="pointer-events-none fixed z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl transition-transform duration-75"
      style={{ left: mousePosition.x, top: mousePosition.y }}
    />
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-20 shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-1/6">
          <h1 className="text-xl font-bold text-white">Github Explorer</h1>
          <div className="flex gap-4">
            <NavButton onClick={()=>setActiveTab('profile')} isActive={activeTab === 'profile'}>Profile Viewer</NavButton>
            <NavButton onClick={()=>setActiveTab('repos')} isActive={activeTab === 'repos'}>Repo Explorer</NavButton>
          </div>
        </div>
      </div>
    </nav>

    <main className="relative z-10 flex-1 overflow-auto">{activeTab === 'profile'? <ProfileViewer />: <RepoExplorer />}</main>
  </div>
);

};

export default App
