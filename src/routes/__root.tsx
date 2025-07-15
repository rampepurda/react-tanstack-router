import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
//import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"} activeProps={{ className: "bold" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/postsPage"} activeProps={{ className: "bold" }}>
              Posts Page
            </Link>
          </li>
          <li>
            <Link to={"/postsData"} activeProps={{ className: "bold" }}>
              Posts data (nested Outlet)
            </Link>
          </li>
        </ul>
      </nav>
      <hr />

      <Outlet />
    </>
  ),
});
