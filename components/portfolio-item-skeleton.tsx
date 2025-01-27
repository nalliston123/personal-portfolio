import { Skeleton } from "@/components/ui/skeleton"

export function PortfolioItemSkeleton() {
  return (
    <div className="grid gap-4">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <Skeleton className="h-8 w-8 rounded-lg" />
          <Skeleton className="h-6 w-48" />
        </div>
        <Skeleton className="h-4 w-24" />
      </div>
      <Skeleton className="h-[300px] w-full rounded-lg" />
    </div>
  )
}

