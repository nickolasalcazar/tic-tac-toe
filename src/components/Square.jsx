export default function Square({ index, mark = null }) {
  return (
    <button
      style={{
        borderWidth: 0,
        // backgroundColor: "pink",
        width: 100,
        height: 100,
        margin: 10,
      }}
    >
      {index}o
    </button>
  );
}
