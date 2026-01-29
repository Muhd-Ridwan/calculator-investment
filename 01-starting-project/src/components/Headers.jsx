export default function Header({ img, alt }) {
  return (
    <header id="header">
      <img src={img} alt={alt} />
      <h1>Investment Calculator</h1>
    </header>
  );
}
