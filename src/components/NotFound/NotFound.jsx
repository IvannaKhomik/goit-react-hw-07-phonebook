import { useSelector } from 'react-redux';
import { selectErrorMessage } from 'redux/selectors';
import { ErrorMessage } from './NotFound.styled';

export const NotFound = () => {
  const error = useSelector(selectErrorMessage);

  return <ErrorMessage>{error}</ErrorMessage>;
};
