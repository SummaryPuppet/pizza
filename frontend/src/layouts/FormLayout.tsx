import Navbar from "@/components/Navbar";
import Drawer from "@/components/ui/Drawer";
import { useEffect } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  onSubmit: () => void;
}

function FormLayout({ title, onSubmit, children }: Props) {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <Drawer>
      <Navbar />
      {/* Page content here */}
      <div className="hero h-full bg-base-200">
        <div className="hero-content text-center">
          <main className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
            <form className="card-body" onSubmit={onSubmit}>
              {children}
            </form>
          </main>
        </div>
      </div>
    </Drawer>
  );
}

export default FormLayout;
