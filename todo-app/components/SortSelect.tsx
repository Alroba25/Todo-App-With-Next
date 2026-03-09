"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

export default function SortSelect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort") || "desc";

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(`/?${params.toString()}`);
  };

  return (
    <Select value={sort} onValueChange={handleSortChange}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="Sorting" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sorting</SelectLabel>
          <SelectItem value="desc">Newest</SelectItem>
          <SelectItem value="asc">Oldest</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
