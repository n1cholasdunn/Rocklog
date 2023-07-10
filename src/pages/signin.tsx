// import React from 'react';
// import {type GetServerSideProps} from 'next';
// import {getProviders, signIn} from 'next-auth/react';
// import {type AppProps} from 'next/app';

// const SignIn = ({providers}: {providers: AppProps}) => {
//   return (
//     <>
//       <h1>Sign i</h1>
//       <div>
//         {Object.values(providers).map(provider => (
//           <button
//             // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
//             key={provider.id}
//             onClick={() =>
//               // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
//               void signIn(provider.id, {
//                 callbackUrl: `${window.location.origin}`,
//               })
//             }>
//             Sign in with Oauth
//           </button>
//         ))}
//       </div>
//     </>
//   );
// };

// export default SignIn;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const providers = await getProviders();
//   return {
//     props: {providers},
//   };
// };
