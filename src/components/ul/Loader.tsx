import React, {CSSProperties} from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import './Loader.css';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'blue',
  borderWidth: 3,
  borderStyle: 'dashed'
};

interface Props {
  color: string;
  isLoading: boolean;
}

const Loader: React.FC<Props> = ({color, isLoading}) => {

  return isLoading && (
    <div className="sweet-loading Loader">
      <ClipLoader
        color={color}
        loading={isLoading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;