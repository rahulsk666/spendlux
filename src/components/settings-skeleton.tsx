import { Skeleton } from "./ui/skeleton"

export function SettingsSkeleton() {
  return (
    <div className="space-y-6 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-[150px]" />
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>

      {/* Account Section */}
      <div className="space-y-4">
        <Skeleton className="h-5 w-[100px]" />
        <div className="space-y-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted">
              <Skeleton className="h-4 w-[120px]" />
              <Skeleton className="h-4 w-[80px]" />
            </div>
          ))}
        </div>
      </div>

      {/* Preferences Section */}
      <div className="space-y-4">
        <Skeleton className="h-5 w-[100px]" />
        <div className="space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted">
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-6 w-10 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Security Section */}
      <div className="space-y-4">
        <Skeleton className="h-5 w-[100px]" />
        <div className="space-y-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted">
              <Skeleton className="h-4 w-[120px]" />
              <Skeleton className="h-4 w-4" />
            </div>
          ))}
        </div>
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