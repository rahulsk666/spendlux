
// // import { getUserFiles } from "@/lib/db/files";
// import { createClient } from "@/utils/supabase/server";
// import { NextResponse } from "next/server";

// export async function GET() {
//   const supabase = createClient();

//   const {
//     data: { user },
//   } = (await supabase).auth.getUser();

//   if (!user) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const { data, error } = await getUserFiles(user.id);

//   if (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }

//   return NextResponse.json({ files: data });
// }
