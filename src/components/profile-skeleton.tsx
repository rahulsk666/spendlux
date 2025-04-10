import { Skeleton } from "./ui/skeleton"

export function ProfileSkeleton() {
  return (
    <div className="justify-self-center">
      <div className="rounded p-4 m-3">
        {/* Avatar */}
        <div className="flex justify-center">
          <Skeleton className="w-44 h-44 rounded-full" />
        </div>

        {/* Name */}
        <div className="pt-4 text-center">
          <Skeleton className="h-6 w-[200px] mx-auto" />
        </div>

        {/* Email */}
        <div className="pt-2 text-center">
          <Skeleton className="h-4 w-[150px] mx-auto" />
        </div>

        {/* Logout Button */}
        <div className="mt-6 p-3 px-5 text-center">
          <Skeleton className="h-10 w-[100px] mx-auto rounded-full" />
        </div>
      </div>
    </div>
  )
} 