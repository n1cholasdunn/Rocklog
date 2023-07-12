import LoginModal from '~/components/modals/LoginModal';
import RegisterModal from '~/components/modals/RegisterModal';
import PostModal from '~/components/modals/PostModal';
import HomeFeed from '~/components/HomeFeed';

const Home = () => {
  return (
    <>
      <div>
        <LoginModal />
        <RegisterModal />
        <PostModal />
      </div>
      <HomeFeed />
    </>
  );
};

export default Home;
