export function HeaderSkeleton() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex-row">
        <div className="h-6 w-[150px] m-1 bg-muted animate-pulse rounded" />
        <div className="h-6 w-[100px] m-1 bg-muted animate-pulse rounded" />
      </div>

      <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
    </div>
  );
}
