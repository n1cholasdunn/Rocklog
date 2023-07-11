import {z} from 'zod';
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from '~/server/api/trpc';
import {createPostSchema} from '~/helpers/post-schema';

export const postRouter = createTRPCRouter({
  //posts to populate homepage
  getAll: publicProcedure.query(({ctx}) => {
    return ctx.prisma.post.findMany({
      take: 20,
      orderBy: [{createdAt: 'desc'}],
    });
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
