import {useState} from 'react';
import usePostModal from '~/hooks/usePostModal';
import Modal from './Modal';
import Heading from '../Heading';
import CreatePostForm from '../forms/CreatePostForm';

const PostModal = () => {
  const postModal = usePostModal();
  const [isLoading, setIsLoading] = useState(false);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="New Post" />
      <CreatePostForm setIsLoading={setIsLoading} />
    </div>
  );

  const footerContent = (
    <div className="mt-3 flex flex-col gap-4">
      <div
        className="
          mt-4
          text-center
          font-light
          text-neutral-500
        ">
        <p>
          footer
          {/* <span
            onClick={onToggle}
            className="
              cursor-pointer
              hover:underline
            ">
            {' '}
            Log in
          </span> */}
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={postModal.isOpen}
      title="Create a new post!"
      onClose={postModal.onClose}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default PostModal;
