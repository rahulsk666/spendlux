// import { createClient } from "@/utils/supabase/server"

// export async function getUserFiles(userId: string) {
//   const supabase = createClient()

//   const { data, error } = await supabase
//     .from('files')
//     .select('*')
//     .eq('owner_id', userId);

//   if (error) {
//     return { error: error.message, data: null }
//   }

//   return { data, error: null }
// }
