import type {RouterOutputs} from '~/utils/api';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import Image from 'next/image';

dayjs.extend(relativeTime);

type PostFromUser = RouterOutputs['post']['getAll'][number];

const PostView = (props: PostFromUser) => {
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
      <div key={id} className="flex w-3/5 border-b border-zinc-400 p-3">
        <Link href={`/user/${authorId}`}>
          <div className="mr-5">
            <Image
              src={userImage}
              alt="user image"
              width={50}
              height={50}
              className="rounded-lg"
            />
          </div>
        </Link>
        <div className="text-zinc-300">
          <Link href={`/posts/${id}`}>
            <h3>
              <ul>
                <li>
                  <p className="text-3xl font-semibold">{name}</p>
                </li>
                <li>
                  <p className="text-sm">Discipline: {climbType}</p>
                </li>
                <li>
                  <p className="text-sm">Grade: {grade}</p>
                </li>
                <li>
                  <p className="text-sm">Rating: {rating}</p>
                </li>
                {danger && (
                  <li>
                    {' '}
                    <p className="text-sm">Danger Warning = {danger}</p>
                  </li>
                )}
              </ul>
            </h3>
            <p className="py-3">{description}</p>
          </Link>
          <h4>
            <ul>
              <li>
                <p className="text-xs">{`posted at: ${dayjs(
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
