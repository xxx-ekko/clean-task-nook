import { useState } from "react";
import { Check, Trash2 } from "lucide-react";
import type { Todo } from "@/hooks/useTodos";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  const [removing, setRemoving] = useState(false);

  const handleDelete = () => {
    setRemoving(true);
    setTimeout(() => onDelete(todo.id), 200);
  };

  return (
    <div
      className={`group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-card transition-all duration-200 hover:shadow-card-hover ${
        removing ? "animate-fade-out" : "animate-fade-in-up"
      }`}
    >
      {/* Checkbox */}
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 ${
          todo.completed
            ? "border-primary bg-primary"
            : "border-muted-foreground/40 hover:border-primary"
        }`}
        aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
      >
        {todo.completed && (
          <Check size={14} strokeWidth={3} className="text-primary-foreground animate-check-in" />
        )}
      </button>

      {/* Text */}
      <span
        className={`flex-1 font-body text-base transition-all duration-200 ${
          todo.completed ? "text-muted-foreground line-through" : "text-foreground"
        }`}
      >
        {todo.text}
      </span>

      {/* Delete */}
      <button
        onClick={handleDelete}
        className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground opacity-0 transition-all duration-150 hover:bg-destructive/10 hover:text-destructive group-hover:opacity-100"
        aria-label="Delete task"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};

export default TodoItem;
