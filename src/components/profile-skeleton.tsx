export default function ProfileSkeleton() {
  return (
    <div className="justify-self-center">
      <div className="rounded p-4 m-3">
        {/* Avatar */}
        <div className="flex justify-center">
          <div className="w-44 h-44 rounded-full bg-muted animate-pulse" />
        </div>

        {/* Name */}
        <div className="pt-4 text-center font-bold text-lg">
          <div className="h-6 w-[200px] mx-auto bg-muted animate-pulse rounded" />
        </div>

        {/* Email */}
        <div className="pt-2 text-center text-[10px]">
          <div className="h-4 w-[150px] mx-auto bg-muted animate-pulse rounded" />
        </div>

        {/* Logout Button */}
        <div className="mt-6 p-3 px-5 text-center bg-appbar-blue rounded-full">
          <div className="h-6 w-[60px] mx-auto bg-white/20 animate-pulse rounded-full" />
        </div>
      </div>
    </div>
  )
} 