import CustomNavbar from '../components/Navbar';
import { Container, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <CustomNavbar />
      <div className="hero-section" style={{
        background: "url('/background-image.jpg') no-repeat center center/cover",
        height: "100vh",
        color: "white",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}>
        <h2 className="fw-bold text-warning">STABLE FINANCIAL INVESTMENTS</h2>
        <p className="text-light w-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
        <Button variant="warning" size="lg">Start Investing →</Button>
      </div>
    </>
  );
}
