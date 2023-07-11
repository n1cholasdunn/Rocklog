import {useCallback, useState} from 'react';
import {signIn} from 'next-auth/react';
import {type FieldValues, useForm} from 'react-hook-form';
import {FcGoogle} from 'react-icons/fc';
import {AiFillGithub} from 'react-icons/ai';
import {useRouter} from 'next/navigation';
import Button from '../buttons/Button';
import useRegisterModal from '~/hooks/useRegisterModal';
import useLoginModal from '~/hooks/useLoginModal';
import Modal from './Modal';
import Heading from '../Heading';
import LoginForm from '../forms/LoginForm';

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

  // const onSubmit: SubmitHandler<FieldValues> = data => {
  //   setIsLoading(true);

  //   signIn('credentials', {
  //     ...data,
  //     redirect: false,
  //   }).then(callback => {
  //     setIsLoading(false);

  //     if (callback?.ok) {
  //       toast.success('Logged in');
  //       router.refresh();
  //       loginModal.onClose();
  //     }

  //     if (callback?.error) {
  //       toast.error(callback.error);
  //     }
  //   });
  // };
  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Login to your account!" />
      <LoginForm />
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
          First time using Rocklog?
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
