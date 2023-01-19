type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUs: number;
    grossWorldwide: number;
  };
};

// function gerProfir(movie: Movie): number {
//   return movie.boxOffice.grossWOrldwide - movie.boxOffice.budget;
// }

//구조분해할당

// function gerProfir(movie: Movie) {
//   const { grossWorldwide, budget } = movie.boxOffice;
//   return grossWorldwide - budget;
// }

function gerProfir({ boxOffice: { grossWorldwide, budget } }: Movie): number {
  return grossWorldwide - budget;
}

console.log(gerProfir);
