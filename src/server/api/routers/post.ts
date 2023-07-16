import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from '~/server/api/trpc';
import {createPostSchema} from '~/helpers/post-schema';
import {PostResponse, postIdSchema} from '~/helpers/response-schema';

export const postRouter = createTRPCRouter({
  //posts to populate homepage
  getAll: publicProcedure.query(({ctx}) => {
    return ctx.prisma.post.findMany({
      take: 20,
      orderBy: [{createdAt: 'desc'}],
      include: {
        user: {
          select: {image: true},
        },
      },
    });
  }),

  getOne: publicProcedure.input(postIdSchema).query(async ({ctx, input}) => {
    const post = await ctx.prisma.post.findUnique({
      where: {id: input},
      include: {
        user: {
          select: {
            image: true,
          },
        },
      },
    });

    if (!post) throw new Error('Post not found');

    return post;
  }),

  getAllUserPosts: protectedProcedure.query(({ctx}) => {
    return ctx.prisma.post.findMany({
      where: {
        authorId: ctx.session.user.id,
      },
    });
  }),

  create: protectedProcedure
    .input(createPostSchema)
    .mutation(({ctx, input}) => {
      console.log(ctx);
      const authorId = ctx.session.user.id;

      return ctx.prisma.post.create({
        data: {
          authorId,
          description: input.description,
          name: input.name,
          grade: input.grade,
          climbType: input.climbType,
          rating: input.rating,
          danger: input.danger,
        },
      });
    }),
});
