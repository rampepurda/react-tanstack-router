import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { PostsT } from "@src/type";

/**
 * https://egghead.io/create-nested-route-and-nested-outlets-in-tanstack-router~hnmw4
 */
async function fetcher() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5",
      {
        method: "GET",
      },
    );

    if (response.ok) {
      return response.json();
    }
  } catch (err) {
    alert(err);
  }
}

export const Route = createFileRoute("/postsData")({
  component: PostsDataPage,
  loader: () => fetcher(),
});

function PostsDataPage() {
  const posts: PostsT[] | undefined = Route.useLoaderData();
  const styles = {
    displayFlex: {
      display: "flex",
    },
  };

  return (
    <>
      <h2>Posts data Page - Welcome!</h2>

      {(!posts && <h3>Ops, something happened</h3>) ||
        (posts?.length === 0 && <h3>...loading, wait</h3>)}
      {posts && (
        <section style={styles.displayFlex}>
          <ul style={{ width: "30%" }}>
            {posts.map((post) => {
              return (
                <li key={post.id}>
                  <Link
                    to="/postsData/$id"
                    params={{ id: String(post.id) }}
                    activeProps={{ className: "bold" }}
                  >
                    {post.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Outlet />
        </section>
      )}
    </>
  );
}
