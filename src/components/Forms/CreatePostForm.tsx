import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {api} from '~/utils/api';
import {createPostSchema} from '~/helpers/post-schema';
import type {PostData} from '~/helpers/post-schema';
import Loading from '../Loading';
import climbCategories from '~/helpers/climb-categories';
import {useSession} from 'next-auth/react';

type Props = {
  setIsLoading: (boolean: boolean) => void;
};

const CreatePostForm = ({setIsLoading}: Props) => {
  const {data, status: userLoaded} = useSession();
  const user = data?.user;

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

  const onSubmit = (data: PostData) => {
    setIsLoading(true);
    console.log(data);
    mutate(data);
    reset();
    setIsLoading(false);
  };
  if (userLoaded === 'loading') return <Loading />;

  return (
    <div>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-items-center">
        <div className="px-1">
          <div className="flex justify-between">
            <label htmlFor="category">Type of Climb:</label>
            <select
              {...register('climbType')}
              id="category"
              className="text-black "
              placeholder="Choose">
              <option value="">Choose One</option>
              {climbCategories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between">
            <label htmlFor="name">name</label>
            <input
              {...register('name')}
              id="name"
              type="text"
              className="text-black"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div className="flex justify-between">
            <label htmlFor="grade">grade</label>
            <input
              {...register('grade')}
              id="grade"
              type="text"
              className="text-black"
            />
            {errors.grade && <p>{errors.grade.message}</p>}
          </div>
          <div className="flex justify-between ">
            <label htmlFor="rating">rating</label>
            <input
              {...register('rating', {valueAsNumber: true})}
              id="rating"
              type="number"
              className="text-black"
            />
            {errors.rating && <p>{errors.rating.message}</p>}
          </div>
          <div className="flex justify-between">
            <label htmlFor="description">description</label>
            <input
              {...register('description')}
              id="description"
              type="text"
              className="text-black"
            />
            {errors.description && <p>{errors.description.message}</p>}
          </div>
        </div>
        <button className="mt-4 rounded-md bg-red-400 p-5">
          Post Your Climb!
        </button>
      </form>
    </div>
  );
};

export default CreatePostForm;
