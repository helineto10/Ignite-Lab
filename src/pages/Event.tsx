import { useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowFatRight } from "phosphor-react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

export default function Event() {
  const { slug } = useParams<{ slug: string }>();

  const [sidebarOpened, setSidebarOpened] = useState(true);

  function handleOpenSidebar() {
    setSidebarOpened(!sidebarOpened);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        onSidebarOpened={handleOpenSidebar}
        sidebarOpened={sidebarOpened}
      />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex-1 flex justify-center items-center">
            <div className="flex flex-col text-justify justify-center gap-8 items-center h-2/6 w-1/2 p-10 border rounded-2xl border-green-300 bg-gray-600">
              <p className="text-3xl text-white">
                Clique na Aula que você deseja assistir
              </p>
              <ArrowFatRight className="text-white" size={60} />
            </div>
          </div>
        )}
        {(window.innerWidth >= 1024 || sidebarOpened) && <Sidebar />}
      </main>
    </div>
  );
}
