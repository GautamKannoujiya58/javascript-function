/*
🚀 Next Challenge (The Hardest of Phase 1)

You're working on Spotify Queue.

Current queue:

const songs = [
    "Believer",
    "Shape of You",
    "Perfect"
];

The first song finishes playing.

It should disappear.

Expected queue:

Shape of You
Perfect
*/

const songs = [
    "Believer",
    "Shape of You",
    "Perfect"
];

function playNextSong(songs) {
    const currentSong = songs[0];
    for (let i = 0; i < songs.length; i++) {
        songs[i] = songs[i + 1];
    }
    songs.length = songs.length - 1
    return { currentSong, songs }

}

console.log(playNextSong(songs));

