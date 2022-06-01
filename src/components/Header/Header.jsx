import { Link } from 'react-router-dom';
import { Root } from './styles';

export default function Header() {
  return (
    <Root>
      <Link to="/">
        <img src="/logo.svg" alt="match" width="110" />
      </Link>
    </Root>
  );
}
