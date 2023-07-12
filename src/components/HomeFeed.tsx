import {api} from '~/utils/api';
import Loading from './Loading';
import PostView from './posts/PostView';

const HomeFeed = () => {
  const {data, isLoading: postsLoading} = api.post.getAll.useQuery();

  if (postsLoading) return <Loading />;
  if (!data) return <div>Something went wrong 🙃</div>;

  return (
    <div className=" flex  w-full flex-col place-items-center">
      {data.map(fullPost => (
        <PostView {...fullPost} key={fullPost.id} />
      ))}
    </div>
  );
};

export default HomeFeed;
