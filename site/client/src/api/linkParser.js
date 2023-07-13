function parseYouTubeLink(link) {
    const regex = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = link.match(regex);
    console.log(match)
    return match && match[2].length === 11 ? match[2] : null;

}

export default parseYouTubeLink;