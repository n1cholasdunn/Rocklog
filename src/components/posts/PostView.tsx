import React from 'react';
import type {RouterOutputs} from '~/utils/api';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import Image from 'next/image';
import {useSession} from 'next-auth/react';

dayjs.extend(relativeTime);

type PostFromUser = RouterOutputs['post']['getAll'][number];

const PostView = (props: PostFromUser) => {
  const userImage = useSession().data?.user.image as string;

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
  } = props;
  return (
    <>
      <div key={id} className="flex w-3/5 border-b border-zinc-400 p-6">
        <div className="mr-5">
          <Image src={userImage} alt="user image" width={50} height={50} />
        </div>
        <div>
          <Link href={`/post/${id}`}>
            <h3>
              <ul>
                <li>{name}</li>
                <li>{climbType}</li>
                <li>{grade}</li>
                <li>{rating}</li>
                {danger && <li>Danger Warning = {danger}</li>}
              </ul>
            </h3>
            <p>{description}</p>
          </Link>
          <h4>
            <ul>
              <li>{`posted at: ${dayjs(createdAt).fromNow()}`}</li>
              <Link href={`/${authorId}`}>
                <li>{`posted by:${authorId}`}</li>
              </Link>
            </ul>
          </h4>
        </div>
      </div>
    </>
  );
};

export default PostView;
