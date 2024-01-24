import Navbar from "@/components/Navbar";
import Drawer from "@/components/ui/Drawer";
import { useEffect } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

function Layout({ title, children }: Props) {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <Drawer>
      <Navbar />
      {children}
    </Drawer>
  );
}

export default Layout;
