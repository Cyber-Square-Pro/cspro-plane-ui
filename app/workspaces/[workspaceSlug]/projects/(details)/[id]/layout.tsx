"use client";
import "react-toastify/dist/ReactToastify.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMobxStore } from "@/store/store.provider";
import { useEffect } from "react";
import { FolderKanban, Earth, BookAIcon, LineChart } from "lucide-react";
import { observer } from "mobx-react-lite";
import { UserWrapper } from "../../../wrapper/user-wrapper";
import { useRouter, usePathname } from "next/navigation";

const ProjectdashboardLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { workspaceSlug: string; id: string };
}) => {
  const { workspaceSlug, id } = params;
  const {
    project: { workspaceProjects, fetchProjects },
  } = useMobxStore();

  useEffect(() => {
    if (workspaceSlug) {
      fetchProjects(workspaceSlug);
    }
  }, [workspaceSlug]);

  const currentProject = workspaceProjects.find((p) => String(p.id) === String(id));

  const router = useRouter();
  const pathname = usePathname();

  const activeTab = pathname.includes("backlog") ? "backlog" : "summary";
  return (
    <UserWrapper>
      <div className="flex h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        {/* 1. PROJECT SIDEBAR (Darker thin bar on the left) */}

        <div className="flex flex-col flex-1">

          <div className="flex">
            <aside className="w-64 border-r border-gray-200 bg-white/80 shadow-sm flex flex-col">
              <div className="p-5 font-extrabold border-b border-gray-100 flex items-center gap-3 bg-gradient-to-r from-blue-100 to-blue-50">
                <FolderKanban size={22} className="text-blue-600 drop-shadow-sm" />
                <span className="truncate text-lg text-gray-800">
                  {currentProject ? currentProject.project_name : "Loading..."}
                </span>
              </div>
              <nav className="flex-1 p-3">{/* Sidebar Links */}</nav>
            </aside>
              <div className="flex flex-1 justify-end items-center gap-3 pr-8 py-4">
                <button
                  className="px-5 py-2 rounded-md bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  Edit
                </button>
                <button
                  className="px-5 py-2 rounded-md bg-green-500 text-white font-semibold shadow hover:bg-green-600 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2"
                >
                  Mark Complete
                </button>
              </div>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={(value) =>
              router.push(
                `/workspaces/${workspaceSlug}/projects/${id}/${value}`,
              )
            }
            className="w-full"
          >
            <TabsList className="bg-white/80 border-b border-gray-200 rounded-none w-full justify-start h-auto p-0 gap-2 shadow-sm">
              <TabsTrigger
                value="summary"
                className="data-[state=active]:border-blue-600 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 border-b-2 border-transparent rounded-t-md px-5 py-2 font-medium text-gray-700 transition-colors hover:bg-blue-50/60"
              >
                <Earth size={18} className="mr-2" /> Summary
              </TabsTrigger>
              <TabsTrigger
                value="backlogs"
                className="data-[state=active]:border-blue-600 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 border-b-2 border-transparent rounded-t-md px-5 py-2 font-medium text-gray-700 transition-colors hover:bg-blue-50/60"
              >
                <BookAIcon size={18} className="mr-2" /> Backlogs
              </TabsTrigger>

              <TabsTrigger
                value="backlogs"
                className="data-[state=active]:border-blue-600 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 border-b-2 border-transparent rounded-t-md px-5 py-2 font-medium text-gray-700 transition-colors hover:bg-blue-50/60"
              >
                <LineChart size={18} className="mr-2" /> Time Line
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <main className="flex-1 overflow-y-auto p-8 bg-white/90 rounded-b-lg shadow-inner">
            {children}
          </main>
        </div>
      </div>
    </UserWrapper>
  );
};

export default observer(ProjectdashboardLayout);
