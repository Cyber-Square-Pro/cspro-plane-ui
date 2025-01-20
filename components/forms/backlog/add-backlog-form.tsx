import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { Spinner } from "@/components/spinner";
import { AddBacklogValidator, TAddBacklogValidator } from "@/lib/validators/add-backlog.validator"
import { zodResolver } from "@hookform/resolvers/zod";

interface AddBacklogFormProps {
  onSubmitForm: (formData: TAddBacklogValidator) => void;
  onCancel: () => void;
}

export const AddBacklogForm: React.FC<AddBacklogFormProps> = ({ onSubmitForm, onCancel }) => {
  const { register, handleSubmit, formState: { isValid } } = useForm<TAddBacklogValidator>({
    resolver: zodResolver(AddBacklogValidator),
    mode: "onChange",
  });

  const [loading, setLoading] = useState(false);
  const [subtasks, setSubtasks] = useState<string[]>([]);

  const handleAddSubtask = () => {
    if (subtasks.every(subtask => subtask.trim() !== "")) {
      setSubtasks([...subtasks, ""]);
    }
  };

  const handleSubtaskChange = (index: number, value: string) => {
    const updatedSubtasks = subtasks.slice();
    updatedSubtasks[index] = value;
    setSubtasks(updatedSubtasks);
  };

  const onSubmit = async (formData: TAddBacklogValidator) => {
    setLoading(true);
    try {
      await onSubmitForm({ ...formData, subtasks });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-2">
        <Input
          className="w-full border rounded-md"
          placeholder="Title"
          {...register("title")}
        />
      </div>
      <div className="py-2">
        <Input
          className="w-full border rounded-md"
          placeholder="Assignee"
          {...register("assignee")}
        />
      </div>
      <div className="py-2">
        <Input
          className="w-full border rounded-md"
          placeholder="Status"
          {...register("status")}
        />
      </div>
      <div className="py-2">
        <Textarea
          className="w-full border rounded-md resize-none"
          placeholder="Description"
          {...register("description")}
        />
      </div>
      <div className="py-2 overflow-y-auto max-h-40">
        {subtasks.map((subtask, index) => (
          <div key={index} className="mb-2">
            <Input
              className="w-full border rounded-md"
              placeholder={`Subtask ${index + 1}`}
              value={subtask}
              onChange={(e) => handleSubtaskChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>
      <Button type="button" onClick={handleAddSubtask}>Add Subtask</Button>
      <div className="py-2 flex justify-between">
        <Button
          className="bg-green-500 text-white w-full hover:bg-green-600 flex items-center justify-center"
          disabled={!isValid || loading}
          type="submit"
        >
          <span className="flex items-center space-x-2">
            <span className="flex-grow text-center">
              {loading ? "Creating..." : "Create Issue"}
            </span>
            {loading && <Spinner size="small" show={true} className="text-white" />}
          </span>
        </Button>
        <Button
          variant="outline"
          className="bg-red-500 text-white w-full hover:bg-red-600 ml-2 hover:text-white"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};