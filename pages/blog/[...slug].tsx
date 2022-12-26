import { useRouter } from "next/router";

function BlogPostPages() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      check data
      {router?.query?.slug &&
        router?.query?.slug.length > 1 &&
        router?.query?.slug.map((items: string) => {
          // eslint-disable-next-line react/jsx-key
          return <h2>{items}</h2>;
        })}
    </div>
  );
}

export default BlogPostPages;
