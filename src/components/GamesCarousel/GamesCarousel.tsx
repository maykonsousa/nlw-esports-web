import img01 from '../../assets/image_1.png';
import img02 from '../../assets/image_2.png';
import img03 from '../../assets/image_3.png';
import img05 from '../../assets/image_5.png';
import img06 from '../../assets/image_6.png';
import img07 from '../../assets/image_7.png';
import { GameCard } from '../GameCard';
import { Container } from './styles';

export function GamesCarousel() {
  return (
    <Container>
      <GameCard title="League of Legends" image={img01} adCount={1} />
      <GameCard title="League of Legends" image={img02} adCount={1} />
      <GameCard title="League of Legends" image={img03} adCount={1} />
      <GameCard title="League of Legends" image={img05} adCount={1} />
      <GameCard title="League of Legends" image={img06} adCount={1} />
      <GameCard title="League of Legends" image={img07} adCount={1} />
    </Container>
  );
}
