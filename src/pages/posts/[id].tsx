import {type NextPage} from 'next';
import {useRouter} from 'next/router';
import Loading from '~/components/Loading';
import PostView from '~/components/posts/PostView';
import SinglePostView from '~/components/posts/SinglePostView';
import {api} from '~/utils/api';

const SinglePost: NextPage = () => {
  const router = useRouter();
  const postId = router.query.id as string;
  // postId

  const {data: post, isLoading: postsLoading} =
    api.post.getOne.useQuery(postId);

  if (postsLoading) return <Loading />;
  if (!post) return <div>Something went wrong 🙃</div>;

  return (
    <div className=" flex  w-full flex-col place-items-center">
      <SinglePostView {...post} />
    </div>
  );
};

export default SinglePost;
