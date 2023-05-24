import Posts from "../components/Posts";

export default async function PostPage({ params }: { params: { postId: string } }) {
    return (
      <main className="flex container mx-auto">
        <div className="flex-col container mx-auto p-10">
          <Posts/>
        </div>
      </main>
    );
  }
  