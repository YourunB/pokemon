export type TMoveData = {
  move: {
    name: string;
  }
}

export type TMovesData = {
  moves: TMoveData;
}

export type TPokemonData = {
  id: string;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  moves: TMovesData[]
};

