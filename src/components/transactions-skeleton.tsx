import { Skeleton } from "./ui/skeleton"

export function TransactionsSkeleton() {
  return (
    <div className="space-y-4 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-[150px]" />
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>

      {/* Filter Section */}
      <div className="flex gap-2">
        <Skeleton className="h-10 w-[100px] rounded-full" />
        <Skeleton className="h-10 w-[100px] rounded-full" />
        <Skeleton className="h-10 w-[100px] rounded-full" />
      </div>

      {/* Transaction List */}
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted">
            <div className="flex items-center space-x-3">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[120px]" />
                <Skeleton className="h-3 w-[80px]" />
              </div>
            </div>
            <div className="text-right space-y-2">
              <Skeleton className="h-4 w-[80px]" />
              <Skeleton className="h-3 w-[60px]" />
            </div>
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