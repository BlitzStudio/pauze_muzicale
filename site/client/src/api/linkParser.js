function parseYouTubeLink(array) {
    const regex = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    return array.map((link) => {
        const match = link.match(regex);
        return match && match[2].length === 11 ? match[2] : null;
    });
}

export default parseYouTubeLink;