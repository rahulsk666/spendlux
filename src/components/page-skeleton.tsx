import { Skeleton } from "./ui/skeleton"

export function PageSkeleton() {
  return (
    <div className="space-y-4 p-4">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-6 w-[200px]" />
        </div>
        <Skeleton className="h-12 w-12 rounded-full" />
      </div>

      {/* Content Area Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
      </div>

      {/* Footer Skeleton */}
      <div className="fixed bottom-0 left-0 right-0 p-4">
        <Skeleton className="h-12 w-full rounded-full" />
      </div>
    </div>
  )
} 