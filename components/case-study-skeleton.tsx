import { Skeleton } from "@/components/ui/skeleton"

export function CaseStudySkeleton() {
  return (
    <div className="space-y-10">
      <Skeleton className="h-4 w-24" /> {/* Back link */}
      <div className="space-y-2">
        <Skeleton className="h-10 w-3/4" /> {/* Title */}
        <Skeleton className="h-6 w-full" /> {/* Description */}
        <Skeleton className="h-10 w-32" /> {/* Button */}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <Skeleton className="h-8 w-48" /> {/* Section title */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-[200px] w-full rounded-lg" /> {/* Image placeholder */}
      </div>
      <div className="space-y-2">
        <Skeleton className="h-8 w-48" /> {/* Section title */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-[200px] w-full rounded-lg" /> {/* Image placeholder */}
      </div>
    </div>
  )
}

