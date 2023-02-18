import "./button.css";
import { IoIosArrowForward } from "react-icons/io";

export default function Button(props) {
  return (
    <button className="button-reusable">
      <span>{props.title}</span>
      <IoIosArrowForward className="button-reusable-arrow" />
    </button>
  );
}
