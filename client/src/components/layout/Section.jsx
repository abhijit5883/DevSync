import Container from "./Container";

export default function Section({
  children,
  className = "",
  id,
}) {
  return (
    <section
      id={id}
      className={`py-20 lg:py-28 ${className}`}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}