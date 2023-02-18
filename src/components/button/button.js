import "./button.css";

export default function Button(props) {
  return (
    <button>
      <span>{props.title}</span>
    </button>
  );
}
