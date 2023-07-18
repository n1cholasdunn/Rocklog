import type {RouterOutputs} from '~/utils/api';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import Image from 'next/image';

dayjs.extend(relativeTime);

type singlePostProps = RouterOutputs['post']['getOne'];

const PostView = (props: singlePostProps) => {
  //! Need to change to getting from DB
  // const userImage = useSession().data?.user.image as string;
  const {
    id,
    createdAt,
    description,
    authorId,
    name,
    grade,
    climbType,
    rating,
    danger,
    user,
  } = props;

  const userImage = user.image as string;

  return (
    <>
      <div key={id} className="flex w-full  justify-center p-3">
        <Link href={`/user/${authorId}`}>
          <div className="mr-5 flex items-center ">
            <Image src={userImage} alt="user image" width={100} height={100} />
          </div>
        </Link>
        <div className="text-zinc-300">
          <Link href={`/posts/${id}`}>
            <h3>
              <ul className="mb-3 ">
                <li>
                  <p className="mb-1 text-8xl font-semibold">{name}</p>
                </li>
                <li>
                  <p className="pl-4 text-lg">Discipline: {climbType}</p>
                </li>
                <li>
                  <p className="pl-4 text-lg">Grade: {grade}</p>
                </li>
                <li>
                  <p className="pl-4 text-lg">Rating: {rating}</p>
                </li>
                {danger && (
                  <li>
                    {' '}
                    <p>Danger Warning = {danger}</p>
                  </li>
                )}
              </ul>
            </h3>
            <p className="mb-2 text-2xl">{description}</p>
          </Link>
          <h4>
            <ul>
              <li>
                <p className="text-sm">{`posted at: ${dayjs(
                  createdAt
                ).fromNow()}`}</p>
              </li>
            </ul>
          </h4>
        </div>
      </div>
    </>
  );
};

export default PostView;
