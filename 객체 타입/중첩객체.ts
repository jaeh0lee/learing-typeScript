type Song = {
  title: string;
  artist: string;
  numSteams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  return song.numSteams * 0.0033;
}

function printSong(song: Song) {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Rigteous Brothres",
  numSteams: 123124,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

const earnings = calculatePayout(mySong);
console.log(earnings);

const jaeho = printSong(mySong);
console.log(jaeho);
