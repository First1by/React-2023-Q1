import { Link } from 'react-router-dom';

const Notfoundpage = () => {
  return (
    <section>
      <h1>404</h1>
      <h2>Not found</h2>
      <p>
        This page doesn`t exist. Go <Link to="/">home</Link>
      </p>
    </section>
  );
};

export default Notfoundpage;
