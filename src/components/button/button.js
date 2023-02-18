import "./button.css";

export default function Button(props) {
  return (
    <button className="button-reusable">
      <span>{props.title}</span>
    </button>
  );
}
