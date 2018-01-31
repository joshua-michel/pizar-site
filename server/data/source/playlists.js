
module.exports = {
  getPlaylist
};

/**
 * Get the playlist
 *
 * @param id
 * @returns {Promise.<{id: *, hash: string, name: string, songs: [null], user: {id: number, name: string}}>}
 */
function getPlaylist (id) {
  return Promise.resolve({
    id: id,
    hash: '12ab34cd',
    name: 'Sample list 1',
    songs: [
      {
        id: 6,
        name: 'Radioactive',
        artist: 'Imagine Dragons',
        external: {},
        timestamp: 1511220617748
      }
    ],
    user: {
      id: 1,
      name: 'Joshua Michel'
    }
  });
}