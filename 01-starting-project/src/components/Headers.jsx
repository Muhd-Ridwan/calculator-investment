export default function Header({ img, alt }) {
  return (
    <div id="header">
      <img src={img} alt={alt} />
      <h1>React Investment Calculator</h1>
    </div>
  );
}
