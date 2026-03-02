import { useState, type FormEvent } from "react";
import { Plus } from "lucide-react";

interface TodoInputProps {
  onAdd: (text: string) => void;
}

const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 rounded-xl border border-border bg-card px-4 py-3 font-body text-base text-foreground placeholder:text-muted-foreground shadow-card outline-none transition-shadow duration-200 focus:shadow-card-hover focus:ring-2 focus:ring-ring/30"
      />
      <button
        type="submit"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-card transition-all duration-200 hover:shadow-card-hover hover:scale-105 active:scale-95"
        aria-label="Add task"
      >
        <Plus size={20} strokeWidth={2.5} />
      </button>
    </form>
  );
};

export default TodoInput;
