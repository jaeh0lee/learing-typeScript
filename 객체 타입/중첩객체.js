function calculatePayout(song) {
    return song.numSteams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "Rigteous Brothres",
    numSteams: 123124,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
var earnings = calculatePayout(mySong);
console.log(earnings);
var jaeho = printSong(mySong);
console.log(jaeho);
