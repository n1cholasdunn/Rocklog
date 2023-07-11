import LoginModal from '~/components/modals/LoginModal';
import RegisterModal from '~/components/modals/RegisterModal';
import PostModal from '~/components/modals/PostModal';

const Home = () => {
  return (
    <>
      <div>
        <LoginModal />
        <RegisterModal />
        <PostModal />
      </div>
    </>
  );
};

export default Home;
