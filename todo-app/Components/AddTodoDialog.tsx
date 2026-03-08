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
import { Plus } from "lucide-react";
import z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { todoFormSchema } from "@/Schema";
import { AddTodo } from "@/actions/todo.actions";
import { useState } from "react";
import Model from "./Model";
import { DialogClose, DialogFooter } from "./ui/dialog";

export default function AddTodoDialog() {
  const form = useForm<z.infer<typeof todoFormSchema>>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: {
      title: "",
      description: "",
      completed: false,
    },
  });
  const [open, setOpen] = useState(false);
  const onSubmit = (data: z.infer<typeof todoFormSchema>) => {
    const { title, description, completed } = data;
    AddTodo({
      title,
      description,
      completed,
    });
    setOpen(false);
  };
  const onOpenChange = (open: boolean) => {
    setOpen(open);
    form.reset();
  };
  return (
    <Model
      open={open}
      onOpenChange={onOpenChange}
      title="Add Todo"
      description="Add your todo here. Click save when you're done."
      triggerButton={
        <Button
          className="text-center bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-white dark:to-zinc-300 text-white dark:text-zinc-900 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
          size="lg"
        >
          <Plus className="mr-2 h-5 w-5" />
          Add Todo
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
