import { createFileRoute } from "@tanstack/react-router";
import { PostsT } from "../../type";

/**
 * https://tanstack.com/router/latest/docs/framework/react/routing/routing-concepts#splat--catch-all-routes
 * A route with a path of only $ is called a "splat" route because it always captures any remaining section of the URL pathname from the $ to the end. The captured pathname is then available in the params object under the special _splat property.
 */
export const Route = createFileRoute("/postsPage/$postId")({
  component: PostDetail,
  loader: async ({ params }: { params: { postId: string } }) => {
    const id = Number(params.postId);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
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
  },
  pendingComponent: () => <h3>...loading, wait</h3>,
  notFoundComponent: () => <h2>Ops</h2>,
});

function PostDetail() {
  const data: PostsT | undefined = Route.useLoaderData();
  //const params = Route.useParams();
  console.log(data);

  return (
    <section>
      <h2>Hello from Detail!</h2>
      <label>Id:</label>
      <h3>{data?.id}</h3>
      <label>Title:</label>
      <h3>{data?.title}</h3>
    </section>
  );
}
