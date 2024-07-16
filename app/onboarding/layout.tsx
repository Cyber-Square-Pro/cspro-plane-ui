"use client"
import { Logo } from "@/components/logo";
import { Navbar } from "@/components/navbar";
import SideBar from "@/components/sidebar/sidebar";
import { RouteList } from "@/constants/sidebar";
import { useMobxStore } from "@/store/store.provider";
import { Mail } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";


export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    user: { currentUser },
  } = useMobxStore();

  return (
    <div className="h-full w-full">
      {/* Navbar Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 xl:px-12">
        <div className="mb-4 lg:mb-0">
          <Logo height={120} width={120} />
        </div>

        <div className="flex items-center space-x-2">
          <Mail />
          <p className="text-blue-700 font-bold">{ currentUser?.email } </p>
        </div>
      </div>

       
      <div className="flex  flex-col lg:flex-row lg:justify-between pt-14 lg:pt-20 px-2 lg:px-8 xl:px-16">
         
        <div className="hidden lg:block lg:w-1/4">
          <SideBar isOnboarded={false} />
        </div>

        
        <div className="lg:w-full md:w-full md:px-0 flex md:items-center lg:px-40 lg:justify-start sm:justify-center">{children}</div>
      </div>
    </div>
  );
}
