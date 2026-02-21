"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MoveDown } from "lucide-react";
import IssueRow from "./issue-row";
import { Button } from "@/components/ui/button";
import { InlineCreateIssue } from "./inline-create";

const BacklogAccordion = () => {
  return (
    <div>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center justify-between w-full pr-4">
              {/* LEFT SIDE: Icon and Title */}
              <div className="flex items-center gap-2">
                <MoveDown size={16} className="text-gray-500" />
                <span className="font-bold text-sm text-slate-800">
                  Backlogs
                </span>
              </div>

              {/* RIGHT SIDE: Action Buttons */}
              <div className="flex items-center gap-3">
                {/* You can add those little blue/green count badges here later */}
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs bg-white border-slate-200 hover:bg-slate-50"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents the accordion from toggling when clicking button
                    console.log("Complete Sprint Clicked");
                  }}
                >
                  Complete Sprint
                </Button>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0 pb-2">
            <IssueRow
              code="CS-123"
              title="Implement user authentication"
              status="In Progress"
              initials="JD"
            />
            <InlineCreateIssue
              onSave={(title) => {
                console.log("Saving to MobX:", title);
                // projectStore.createIssue({ title, sprintId: 'item-1' });
              }}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default BacklogAccordion;
