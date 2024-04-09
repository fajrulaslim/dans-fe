import { NextResponse } from "next/server";
import { useSelector } from "react-redux";
import authenticate from "./middlewares/authenticate";

function getUserRole() {
  try {
    const { user } = useSelector((state: any) => state.global.auth);
    return user.role.name
  } catch (error) {
    return null;
  }
}

export function middleware(request: any) {
  const cookies = request.cookies;

  const withoutAuthPage = [
    "/login",
  ];

  if (withoutAuthPage.includes(request.nextUrl.pathname)) {
    if (authenticate(cookies)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (request.nextUrl.pathname === "/") {
    if (!authenticate(cookies)) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  const needAuthPages = [
    {
      roleAllow: [],
      pages: [
        "/jobs",
      ],
    },
  ];

  const activePageNeedAuth: any = needAuthPages.map((r: any) => {
    let findedPage = r.pages.find((r: string) => {
      if (request.nextUrl.pathname.startsWith(r)) {
        return r;
      }
    });

    if (findedPage) {
      return {
        roleAllow: r.roleAllow,
        page: findedPage,
      };
    }
  });

  if (activePageNeedAuth[0]?.page) {
    if (!authenticate(cookies)) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}
