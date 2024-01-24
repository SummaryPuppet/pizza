import MenuSideBar from "../MenuSideBar";

interface Props {
  children: React.ReactNode;
}
function Drawer({ children }: Props) {
  return (
    <div className="drawer h-screen">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex h-full flex-col">{children}</div>
      <MenuSideBar></MenuSideBar>
    </div>
  );
}

export default Drawer;
