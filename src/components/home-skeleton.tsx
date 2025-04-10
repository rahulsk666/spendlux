import { Skeleton } from "./ui/skeleton"

export function HomeSkeleton() {
  return (
    <div className="space-y-4 p-4">
      {/* Header with Profile */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-6 w-[200px]" />
        </div>
        <Skeleton className="h-12 w-12 rounded-full" />
      </div>

      {/* Balance Card */}
      <div className="rounded-xl bg-muted p-4">
        <Skeleton className="h-6 w-[150px] mb-2" />
        <Skeleton className="h-8 w-[200px]" />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center space-y-2">
            <Skeleton className="h-12 w-12 rounded-full" />
            <Skeleton className="h-4 w-[50px]" />
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="space-y-2">
        <Skeleton className="h-6 w-[150px]" />
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between p-2">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-3 w-[80px]" />
              </div>
            </div>
            <Skeleton className="h-4 w-[60px]" />
          </div>
        ))}
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