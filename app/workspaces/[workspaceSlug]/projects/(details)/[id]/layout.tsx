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
      <div className="flex h-screen w-full overflow-hidden">
        {/* 1. PROJECT SIDEBAR (Darker thin bar on the left) */}
       

        <div className="flex flex-col flex-1">

           <aside className="w-64 border-r bg-gray-50 flex flex-col">
          <div className="p-4 font-bold border-b flex items-center gap-3">
            <FolderKanban size={20} className="text-blue-600" />
            <span className="truncate">
              {currentProject ? currentProject.project_name : "Loading..."}
            </span>
          </div>
          <nav className="flex-1 p-2">{/* Sidebar Links */}</nav>
        </aside>


          <Tabs
            value={activeTab}
            onValueChange={(value) =>
              router.push(
                `/workspaces/${workspaceSlug}/projects/${id}/${value}`,
              )
            }
            className="w-full"
          >
            <TabsList className="bg-transparent border-b rounded-none w-full justify-start h-auto p-0 gap-4">
              <TabsTrigger
                value="summary"
                className="data-[state=active]:border-blue-600 data-[state=active]:bg-transparent border-b-2 border-transparent rounded-none px-4 py-2"
              >
                <Earth size={18} className="mr-2" /> Summary
              </TabsTrigger>
              <TabsTrigger
                value="backlogs"
                className="data-[state=active]:border-blue-600 data-[state=active]:bg-transparent border-b-2 border-transparent rounded-none px-4 py-2"
              >
                <BookAIcon size={18} className="mr-2" /> Backlogs
              </TabsTrigger>

              <TabsTrigger
                value="backlogs"
                className="data-[state=active]:border-blue-600 data-[state=active]:bg-transparent border-b-2 border-transparent rounded-none px-4 py-2"
              >
                <LineChart size={18} className="mr-2" /> Time Line
              </TabsTrigger>


            </TabsList>
          </Tabs>
          <main className="flex-1 overflow-y-auto p-6 bg-white">
            {children}
          </main>
        </div>
      </div>
    </UserWrapper>
  );
};

export default observer(ProjectdashboardLayout);
