import { fetchProfile } from "@/lib/profileActions";
import HeaderPage from "./header-page";

export default async function Header() {
  const user = await fetchProfile();

  return (
    <div>
      <div className="grid grid-cols-3 text-white">
        <HeaderPage user={user} />
      </div>
    </div>
  );
}
