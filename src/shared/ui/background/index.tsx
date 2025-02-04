import imgPokemon from '/ball.png';
import s from './index.module.sass';

export const BackgroundBall = () => (
  <div className={s.ball}>
    <img src={imgPokemon} alt="Pokemon" className={s.ball__pokemon} />
  </div>
)