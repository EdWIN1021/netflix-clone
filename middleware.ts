import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import type { Database } from "./database.types";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  // const supabase = createMiddlewareClient<Database>({ req, res });

  // const routes = ["/", "/signup", "/login"];

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // if (user && routes.includes(req.nextUrl.pathname)) {
  //   return NextResponse.redirect(new URL("/browse", req.url));
  // }

  // if (!user && req.nextUrl.pathname === "/browse") {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }

  return res;
}

// export const config = {
//   matcher: ["/", "/signup", "/login/:path*", "/browse"],
// };
