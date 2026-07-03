/*
Challenge 2
You're working on a music app.

const playlist = [
    "Believer",
    "Perfect",
    "Counting Stars",
    "Thunder"
];

The Product Manager says:

"When the user clicks a song, display its position in the playlist."
 */

const playlist = ["Believer", "Perfect", "Counting Stars", "Thunder"];

function printSongPosition(playlist, userSong) {
    const position = playlist.indexOf(userSong);
    if (position === -1) {
        return "Song Not Found"
    }
    return position
}
console.log(printSongPosition(playlist, "mySong"));
console.log(printSongPosition(playlist, "Counting Stars"));