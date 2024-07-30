const app = Vue.createApp({
    // section to add the methods, tempate 
    data() {
        return {
            books: [
                {
                    title: 'The lord of the world',
                    name: 'SJ',
                    age: '45',
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw51g1gMBrZN3FbN17flaY_YSYmTMGuudh3Q&s'
                },
                {
                    title: 'World of books',
                    name: 'SJ',
                    age: '45',
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw51g1gMBrZN3FbN17flaY_YSYmTMGuudh3Q&s'
                },
                {
                    title: 'The lord',
                    name: 'SAM',
                    age: '45',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfxrcUtlaLqSTTpA7N9cWKIopvRNtXngM2A&s'
                },
            ]
        }
    }

});

app.mount('#app');