import { Container } from './styles';

interface GameCardProps {
  title: string;
  image: string;
  adCount: number;
}

export function GameCard({ title, image, adCount }: GameCardProps) {
  return (
    <Container>
      <a href="#">
        <img src={image} alt={`Imagem do jogo ${title}`} />
        <div>
          <strong>{title}</strong>
          <span>{`${adCount} anúncio${adCount > 1 ? 's' : ''}`}</span>
        </div>
      </a>
    </Container>
  );
}
