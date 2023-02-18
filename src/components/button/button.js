import "./button.css";

export default function Button(props) {
  return (
    <button className="button-reusable">
      <span>{props.title}</span>
      <span className="button-reusable-arrow">&rarr;</span>
    </button>
  );
}
