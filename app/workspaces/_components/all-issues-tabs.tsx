"use client"
import { EmptyState } from "@/components/modal/empty-state";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useState } from 'react';

/*
  Author: Nisha J on Jun 8th, 2024
  Purpose: Renders UI for All Issues tabs 
  Props: None
  Updated by: - Nisha J on June 28th, 2024 - Used EmptyState component instead of EmptyPageCreate component.
*/

export const AllIssuesTabs = () => {
    const [activeTab, setActiveTab] = useState('all-issues');
    console.log(activeTab);
    
  return (
    <div className="h-[2.75rem] border-y p-2">
      <Tabs defaultValue="all-issues" className="w-[1500px]">
        <TabsList>
          <TabsTrigger 
                value="all-issues"
                className={cn("text-zinc-800", { 'border-b-2 border-blue-500 text-blue-500' : activeTab === "all-issues", } )}
                onClick= {() => {setActiveTab("all-issues")}}
                style={{ animation: 'none' }}
                >All Issues
          </TabsTrigger>

          <TabsTrigger 
                value="assigned" 
                onClick= {() => {setActiveTab("assigned")}}
                className={cn("text-black", { 'border-b-2 border-blue-500 text-blue-500' : activeTab === "assigned"} )}
                >Assigned
          </TabsTrigger>

          <TabsTrigger 
                value="created" 
                onClick= {() => {setActiveTab("created")}}
                className={cn(" text-black", { 'border-b-2 border-blue-500 text-blue-500' : activeTab === "created", } )}
                >Created
          </TabsTrigger>

          <TabsTrigger 
                value="subscribed" 
                onClick= {() => {setActiveTab("subscribed")}}
                className={cn(" text-black", { 'border-b-2 border-blue-500 text-blue-500' : activeTab === "subscribed", } )}>
                Subscribed
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all-issues">
          <div>
            <EmptyState
                title ="No issues in the project" 
                description ="First project done! Now, slice your work into trackable pieces
                with issues. Let's go!"
                imgSrc="/empty-state/issues-light.webp"
                btnText ="Create New Issue" 
            />            
          </div>          
        </TabsContent>
        <TabsContent value="assigned">Assigned</TabsContent>
        <TabsContent value="created">Created</TabsContent>
        <TabsContent value="subscribed">Subscribed</TabsContent>
      </Tabs>
    </div>
  );
};
