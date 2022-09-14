import { Container } from './styles';

export function PublishBar() {
  return (
    <Container>
      <div>
        <div>
          <strong>Não encontrou seu duo?</strong>
          <span>Publique um anúncio para encontrar novos players</span>
        </div>
        <button type="button">Publicar anúncio</button>
      </div>
    </Container>
  );
}
