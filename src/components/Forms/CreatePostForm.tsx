import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {api} from '~/utils/api';
import {createPostSchema} from '~/helpers/post-schema';
import type {PostData} from '~/helpers/post-schema';
import Loading from '../Loading';
import climbCategories from '~/helpers/climb-categories';
import {useSession} from 'next-auth/react';
import {UploadButton, UploadDropzone} from '~/utils/uploadthing';
// You need to import our styles for the button to look right. Best to import in the root /_app.tsx but this is fine
import '@uploadthing/react/styles.css';

type Props = {
  setIsLoading: (boolean: boolean) => void;
};

const CreatePostForm = ({setIsLoading}: Props) => {
  const {data, status: userLoaded} = useSession();
  // const user = data?.user;

  const ctx = api.useContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<PostData>({resolver: zodResolver(createPostSchema)});

  const {mutate} = api.post.create.useMutation({
    onSuccess: data => {
      void ctx.post.getAll.invalidate();
      console.log('Data submitted successfully: ', data);
    },
    onError: error => {
      console.error('An error occurred: ', error);
    },
  });

  const onSubmit = (postsData: PostData) => {
    try {
      setIsLoading(true);
      // const authorPic = data?.user.image as string;
      // console.log(authorPic);
      // postsData.authorImg = authorPic;
      // console.log(postsData);
      mutate(postsData);
      reset();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  if (userLoaded === 'loading') return <Loading />;

  return (
    <div>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-items-center">
        <div className="px-1">
          <div className="flex flex-col justify-between">
            <label className="bg-zinc-600 text-zinc-200" htmlFor="category">
              Type of Climb:
            </label>
            <select
              {...register('climbType')}
              id="category"
              className="my-1 h-9 w-44 rounded border bg-zinc-600  p-2 text-zinc-200 outline-none"
              placeholder="Choose">
              <option value="">Choose One</option>
              {climbCategories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="my-2 flex flex-col justify-between">
            <label className="text-zinc-200" htmlFor="name">
              Name:{' '}
            </label>
            <input
              {...register('name')}
              id="name"
              type="text"
              className="my-1 h-9 rounded border bg-zinc-600 p-2 text-zinc-200 outline-none"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div className="my-2 flex flex-col justify-between">
            <label className="text-zinc-200" htmlFor="grade">
              Grade:{' '}
            </label>
            <input
              {...register('grade')}
              id="grade"
              type="text"
              className="my-1 h-9  rounded border bg-zinc-600 p-2 text-zinc-200 outline-none"
            />
            {errors.grade && <p>{errors.grade.message}</p>}
          </div>
          <div className="my-2 flex flex-col justify-between ">
            <label className="text-zinc-200" htmlFor="rating">
              Rating (0-5):{' '}
            </label>
            <input
              {...register('rating', {valueAsNumber: true})}
              id="rating"
              type="number"
              className="my-1 h-9 rounded border bg-zinc-600 p-2 text-zinc-200 outline-none"
            />
            {errors.rating && <p>{errors.rating.message}</p>}
          </div>
          <div className="my-2 flex flex-col justify-between">
            <label className="text-zinc-200" htmlFor="description">
              Description:{' '}
            </label>
            <textarea
              {...register('description')}
              name="description"
              id="description"
              cols={30}
              rows={5}
              className="my-1  rounded border bg-zinc-600 p-2 text-zinc-200 outline-none"></textarea>
            {/* <input
              {...register('description')}
              id="description"
              type="text"
              className="my-1 h-40 rounded border bg-zinc-600 p-2 text-zinc-200 outline-none"
            /> */}
            {errors.description && <p>{errors.description.message}</p>}
          </div>
          <div>
            <UploadDropzone
              endpoint="imageUploader"
              onClientUploadComplete={res => {
                // Do something with the response
                console.log('Files: ', res);
                alert('Upload Completed');
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
            {/* <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={res => {
                // Do something with the response
                console.log('Files: ', res);
                alert('Upload Completed');
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            /> */}
          </div>
        </div>
        <button className="mt-1 rounded-md bg-zinc-300 p-5">
          Post Your Climb!
        </button>
      </form>
    </div>
  );
};

export default CreatePostForm;
