import BottomBar from '@/components/shared/BottomBar';
import LeftSidebar from '@/components/shared/LeftSidebar'
import Topbar from '@/components/shared/Topbar'
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div>
      <div className='w-full md:flex'>
        <Topbar />
        <LeftSidebar />
        <section className='flex flex-1 h-full'>
          <Outlet />
        </section>
        <BottomBar />

      </div>
    </div>
  )
}

export default RootLayout