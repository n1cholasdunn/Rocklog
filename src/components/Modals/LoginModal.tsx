import {useCallback, useState} from 'react';
import {toast} from 'react-hot-toast';
import {signIn} from 'next-auth/react';
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import {FcGoogle} from 'react-icons/fc';
import {AiFillGithub} from 'react-icons/ai';
import {useRouter} from 'next/navigation';
import Button from '../Buttons/Button';

import useRegisterModal from '~/hooks/useRegisterModal';
import useLoginModal from '~/hooks/useLoginModal';

import Modal from './Modal';
// import Input from '../inputs/Input';
// import Heading from '../Heading';

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <p className="text-4xl font-bold text-red-700">BODY CONTENT</p>
    </div>
  );

  const footerContent = (
    <div className="mt-3 flex flex-col gap-4">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => void signIn('google')}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => void signIn('github')}
      />
      <div
        className="
      mt-4 text-center font-light text-neutral-500">
        <p>
          First time using Airbnb?
          <span
            onClick={onToggle}
            className="
              cursor-pointer
              text-neutral-800
              hover:underline
            ">
            {' '}
            Create an account
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      // isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      // onSubmit={() => void handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
