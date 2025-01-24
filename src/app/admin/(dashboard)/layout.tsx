import Sidebar from '@/components/SideBar';

const dashboard = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

  return (
<div className="flex h-screen">
  <div className="w-1/4 h-screen">
    <Sidebar />
  </div>
  <div className="flex-1 flex px-5 justify-center items-center bg-white">
    {children}
  </div>
</div>

  )
}

export default dashboard