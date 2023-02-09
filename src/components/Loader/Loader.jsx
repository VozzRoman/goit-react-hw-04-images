import { FallingLines } from 'react-loader-spinner';
import css from '../Loader/LoaderStyle.module.css';
export const Loader = () => {
  return (
    <div className={css.galleryLoader}>
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </div>
  );
};
