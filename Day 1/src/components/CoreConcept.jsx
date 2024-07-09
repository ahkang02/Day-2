export function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt="alt text" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
