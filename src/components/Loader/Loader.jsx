import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = ({ loading }) => {
  return (
    <div>
      <MagnifyingGlass
        visible={loading}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
};
