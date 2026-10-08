import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jgxcqzkecwpbaaovfzac.supabase.co";

const supabaseKey = "sb_publishable_oUa_X7xsO1tCGvRW0mBmag_A8T7yy1V";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
