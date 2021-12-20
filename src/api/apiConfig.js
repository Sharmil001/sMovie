const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '0355af9ae2053042b00343abe4568a83',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;