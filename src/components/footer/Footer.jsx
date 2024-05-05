import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <span>
        &copy;{`${date.getFullYear()}`}
        <Link target="_blank" to={"mailto: marwanfouz76@gmail.com"}>
          Marwan Fouz .
        </Link>
        All Reversed.
      </span>
    </footer>
  );
};

export default Footer;
