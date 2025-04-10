import { Skeleton } from "./ui/skeleton"

export function CardsSkeleton() {
  return (
    <div className="space-y-4 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-[150px]" />
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>

      {/* Active Card */}
      <div className="rounded-xl bg-muted p-6 space-y-4">
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-[100px]" />
          <Skeleton className="h-8 w-8" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-6 w-[200px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>

      {/* Other Cards */}
      <div className="space-y-4">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="rounded-lg bg-muted p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[120px]" />
                  <Skeleton className="h-3 w-[80px]" />
                </div>
              </div>
              <Skeleton className="h-4 w-[60px]" />
            </div>
          </div>
        ))}
      </div>

      {/* Add Card Button */}
      <div className="fixed bottom-20 left-4 right-4">
        <Skeleton className="h-12 w-full rounded-full" />
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-4">
        <div className="grid grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center space-y-1">
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="h-3 w-[30px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 