"use client";
import { Button } from "@/components/ui/button";

import { Checkbox } from "@/components/ui/checkbox";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Pen, Plus } from "lucide-react";
import z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { todoFormSchema } from "@/Schema";
import { useState } from "react";
import Model from "./Model";
import { DialogClose, DialogFooter } from "./ui/dialog";
import { UpdateTodo } from "@/actions/todo.actions";

export default function EditTodoDialog({
  id,
  title,
  description,
  completed,
}: {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}) {
  const form = useForm<z.infer<typeof todoFormSchema>>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: {
      title,
      description,
      completed,
    },
  });
  const [open, setOpen] = useState(false);
  const onSubmit = ({
    title,
    description,
    completed,
  }: z.infer<typeof todoFormSchema>) => {
    setOpen(false);
    UpdateTodo(id, title, description as string, completed);
  };
  const onOpenChange = (open: boolean) => {
    setOpen(open);
    form.reset();
  };
  return (
    <Model
      open={open}
      onOpenChange={onOpenChange}
      title="Edit Todo"
      description="Edit your todo here. Click save when you're done."
      triggerButton={
        <Button
          className="cursor-pointer text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
          variant="ghost"
          size="icon"
        >
          <Pen size={16} />
        </Button>
      }
    >
      <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-demo-title">
                  Todo Title
                </FieldLabel>
                <Input
                  {...field}
                  id="form-rhf-demo-title"
                  aria-invalid={fieldState.invalid}
                  placeholder="Add title"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="description"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-demo-description">
                  Description
                </FieldLabel>
                <InputGroup>
                  <InputGroupTextarea
                    {...field}
                    id="form-rhf-demo-description"
                    placeholder="Add description"
                    rows={6}
                    className="min-h-24 resize-none"
                    aria-invalid={fieldState.invalid}
                  />
                  <InputGroupAddon align="block-end">
                    <InputGroupText className="tabular-nums">
                      {field.value?.length || 0}/100 characters
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
                <FieldDescription>
                  Include steps to reproduce, expected behavior, and what
                  actually happened.
                </FieldDescription>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="completed"
            control={form.control}
            render={({ field }) => (
              <FieldGroup className="mx-auto w-56">
                <Field orientation="horizontal">
                  <Checkbox
                    id="completed-checkbox-basic"
                    name="completed-checkbox-basic"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={field.disabled}
                    ref={field.ref}
                    onBlur={field.onBlur}
                  />
                  <FieldLabel htmlFor="completed-checkbox-basic">
                    Completed
                  </FieldLabel>
                </Field>
              </FieldGroup>
            )}
          />
        </FieldGroup>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" onClick={() => form.reset()}>
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </form>
    </Model>
  );
}
