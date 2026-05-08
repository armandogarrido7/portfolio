export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container d-flex flex-column flex-md-row justify-content-between gap-2">
        <span>Armando Garrido © - {currentYear}</span>
        <span>
          Backend systems · Travel-tech · Reliability · Clean architecture
        </span>
      </div>
    </footer>
  );
}