import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SidebarMenu from './SidebarMenu';
import { AnimatePresence, motion } from 'framer-motion';



export default function Layout() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  return (
    <div className="flex h-screen bg-black text-white">
      <div
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className="transition-all duration-700 ease-in-out"
      >
        <SidebarMenu expanded={expanded} />
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}  // важный ключ для перерендера с анимацией
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="flex-1 overflow-hidden relative"
        >
          {/* Этот Outlet будет менять содержимое страниц */}
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

