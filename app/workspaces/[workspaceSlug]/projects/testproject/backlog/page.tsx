"use client";

import React, { useState } from "react";
import { ChevronDown, Plus, Trash2 } from "lucide-react";
import CreateStoryCard from "@/app/workspaces/_components/cards/create-story-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TAddBacklogValidator } from "@/lib/validators/add-backlog.validator";

interface Story {
  id: number;
  title: string;
  status: string;
  assignee: string;
  description: string;
  subtasks: string[];
}

const initialStories: Story[] = [
  {
    id: 1,
    title: "Create a Page for board",
    status: "In Progress",
    assignee: "Rishal",
    description: "This is a description for Sample Story 1",
    subtasks: ["Subtask 1", "Subtask 2"],
  },
  {
    id: 2,
    title: "Security under profile settings",
    status: "To Do",
    assignee: "Adnan",
    description: "This is a description for Sample Story 2",
    subtasks: ["Subtask A", "Subtask B"],
  },
  {
    id: 3,
    title: "Fix login issues",
    status: "To Do",
    assignee: "Ayesha",
    description: "This is a description for Sample Story 3",
    subtasks: ["Subtask C", "Subtask D"],
  },
  {
    id: 4,
    title: "Update user profile page",
    status: "In Review",
    assignee: "Sam",
    description: "This is a description for Sample Story 4",
    subtasks: ["Subtask E", "Subtask F"],
  },
];

const formatId = (id: number) => `PLN-${id.toString().padStart(2, "0")}`;

const BacklogPage: React.FC = () => {
  const [stories, setStories] = useState<Story[]>(initialStories);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [expandedStoryIds, setExpandedStoryIds] = useState<Set<number>>(
    new Set()
  );
  const [isCardVisible, setIsCardVisible] = useState<boolean>(false);

  const handleCreateStory = (formData: TAddBacklogValidator) => {
    const newStory: Omit<Story, "id"> = {
      title: formData.title,
      status: formData.status,
      assignee: formData.assignee,
      description: formData.description,
      subtasks: formData.subtasks ?? [],
    };

    const newId =
      stories.length > 0
        ? Math.max(...stories.map((story) => story.id)) + 1
        : 1;
    setStories([...stories, { ...newStory, id: newId }]);
    setIsCardVisible(false);
  };

  const handleCloseCard = () => {
    setIsCardVisible(false);
  };

  const toggleExpand = (id: number) => {
    setExpandedStoryIds((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  const filteredStories = stories.filter(
    (story) =>
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.assignee.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 h-screen flex flex-col">
      <div className="mb-4 border-b pb-2 bg-white sticky top-0 z-10">
        <div className="text-sm text-gray-500 mb-2">
          Projects / CS Pro Plane
        </div>
        <div className="text-2xl font-bold mb-4">Backlog</div>
        <div className="flex items-center justify-between">
          <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-1/2"
          />
          <div className="flex items-center">
            <div className="flex -space-x-2 mr-4">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">PI</div>
              <div className="w-8 h-8 rounded-full bg-gray-300 text-black flex items-center justify-center">+4</div>
            </div>
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Epic">Epic</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-x-hidden">
        <div className="story-list mb-4">
          {filteredStories.slice(0, 10).map((story) => (
            <div key={story.id} className="border-b pb-2 mb-2">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleExpand(story.id)}
              >
                <div className="flex items-center">
                  <h3 className="font-semibold">
                    <span className="text-green-600 font-bold">
                      {formatId(story.id)}
                    </span>{" "}
                    {story.title}
                  </h3>
                </div>
                <div className="flex items-center">
                  <span className="mr-4">{story.status}</span>
                  <span className="mr-4">{story.assignee}</span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      expandedStoryIds.has(story.id) ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              {expandedStoryIds.has(story.id) && (
                <div className="mt-2 ml-4 relative">
                  <p className="text-sm text-gray-600">{story.description}</p>
                  <ul className="list-disc list-inside mt-2">
                    {story.subtasks.map((subtask, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        {subtask}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute bottom-0 right-0 mb-2 mr-2 p-2"
                  >
                    <Trash2 className="text-red-600" size={18} />
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        {isCardVisible && (
          <CreateStoryCard
            onCreateStory={handleCreateStory}
            onClose={handleCloseCard}
          />
        )}

        <Button
          variant="outline"
          className="flex items-center mt-4"
          onClick={() => setIsCardVisible(true)}
        >
          <Plus className="mr-1" size={18} />
          Create issue
        </Button>
      </div>
    </div>
  );
};

export default BacklogPage;
