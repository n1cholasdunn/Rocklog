import {FallingLines} from 'react-loader-spinner';

const Loading = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center pb-52">
        <FallingLines
          color="#4fa94d"
          width="150"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      </div>
    </>
  );
};

export default Loading;
