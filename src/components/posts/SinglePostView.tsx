import React from 'react';
import type {RouterOutputs} from '~/utils/api';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import Image from 'next/image';
import {api} from '~/utils/api';
import {prisma} from '~/server/db';

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
      <div key={id} className="flex w-3/5 border-b border-zinc-400 p-6">
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
                  <p>Name: {name}</p>
                </li>
                <li>
                  <p>Discipline: {climbType}</p>
                </li>
                <li>
                  <p>Grade: {grade}</p>
                </li>
                <li>
                  <p>Rating: {rating}</p>
                </li>
                {danger && (
                  <li>
                    {' '}
                    <p>Danger Warning = {danger}</p>
                  </li>
                )}
              </ul>
            </h3>
            <p>{description}</p>
          </Link>
          <h4>
            <ul>
              <li>{`posted at: ${dayjs(createdAt).fromNow()}`}</li>
            </ul>
          </h4>
        </div>
      </div>
    </>
  );
};

export default PostView;
