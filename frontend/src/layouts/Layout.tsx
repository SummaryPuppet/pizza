import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { routes as allRoutes } from "@/utils/router";
import { Link } from "react-router-dom";
import MenuSideBar from "@/components/MenuSideBar";
import Drawer from "@/components/ui/Drawer";

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
