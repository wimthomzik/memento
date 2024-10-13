//  Combine and shuffle two arrays
const shuffle = () => {
    const assets = [
        { image: '/assets/css.png' },
        { image: '/assets/html5.png' },
        { image: '/assets/js.png' },
        { image: '/assets/next.png' },
        { image: '/assets/react.png' },
        { image: '/assets/ts.png' },
        { image: '/assets/jquery.png' },
        { image: '/assets/node.png' },
    ]
    return [...assets, ...assets]
        .sort(() => Math.random() - 0.5)
        .map((asset) => ({ ...asset, id: Math.random() }));
};

export default shuffle;