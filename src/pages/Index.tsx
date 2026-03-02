import { useTodos } from "@/hooks/useTodos";
import TodoInput from "@/components/TodoInput";
import TodoItem from "@/components/TodoItem";
import { CheckCircle2, ListTodo } from "lucide-react";

const Index = () => {
  const { activeTodos, completedTodos, addTodo, toggleTodo, deleteTodo } = useTodos();

  const totalCount = activeTodos.length + completedTodos.length;

  return (
    <div className="flex min-h-screen items-start justify-center bg-background px-4 py-12 sm:py-20">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
            Today
          </h1>
          <p className="mt-2 font-body text-muted-foreground">
            {totalCount === 0
              ? "No tasks yet — add one below"
              : `${activeTodos.length} task${activeTodos.length !== 1 ? "s" : ""} remaining`}
          </p>
        </div>

        {/* Input */}
        <div className="mb-8">
          <TodoInput onAdd={addTodo} />
        </div>

        {/* Active tasks */}
        {activeTodos.length > 0 && (
          <section className="mb-8">
            <div className="mb-3 flex items-center gap-2 px-1">
              <ListTodo size={16} className="text-primary" />
              <h2 className="font-body text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                To Do
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              {activeTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))}
            </div>
          </section>
        )}

        {/* Completed tasks */}
        {completedTodos.length > 0 && (
          <section>
            <div className="mb-3 flex items-center gap-2 px-1">
              <CheckCircle2 size={16} className="text-muted-foreground" />
              <h2 className="font-body text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Completed
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              {completedTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Index;
