import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2023</p>
      <Link to="/about">about</Link>
    </footer>
  );
};
export default footer;
