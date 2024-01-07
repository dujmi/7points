import { createClient } from "@supabase/supabase-js";

// export const supabase = createClient(
//   "https://julmljxhwxryomcqfvol.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1bG1sanhod3hyeW9tY3Fmdm9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQwMjcxNDgsImV4cCI6MjAxOTYwMzE0OH0.pTv51RFvPXdvr_KXeuuO-bCvPWFdwvpB4fCBKQxqLVM"
// );

export const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY
);
