export const getImageURL = (imageKey) =>
    (Math.random() > 0.5)
        ? 'https://firebasestorage.googleapis.com/v0/b/cytech-candidates.appspot.com/o/' + imageKey + '?alt=media'
        : ('https://firebasestorage.googleapis.com/v0/b/cytech-candidates-copy.appspot.com/o/' + imageKey + '?alt=media')