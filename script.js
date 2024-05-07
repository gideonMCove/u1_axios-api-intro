// const myFunction = () => {
//     // console.log('First')
//     // console.log('Second')
//     // console.log('Third')
//     console.log('first')
//     axios.get('https://dog.ceo./api/breeds/list/all').then(function () {
//         console.log('second')
//     })
//     console.log('third')
// }

const getBreeds = async () => {
    const dogBreeds = await axios.get('https://dog.ceo/api/breeds/list/all')
    console.log(dogBreeds.data.message)
}

getBreeds()