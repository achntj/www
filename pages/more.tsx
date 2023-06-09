import Container from "@/components/Container";
import Tracks from "@/components/top-tracks";

export default function More() {
  return (
    <Container>
      <div>
        <h3 className="text-2xl font-bold">Monthly Top 10</h3>
        <p className="text-neutral-600">Pulled live from Spotify</p>
        <Tracks />
      </div>
    </Container>
  );
}
