import uniqid from 'uniqid'
 const cardsData = [
    {
        id:uniqid(),
        url:'/tajin.jpg',
        closed:true,
        eliminated:false,

    },
    {
        id:uniqid(),
        url:'/dolma.jpg',
        closed:true,
        eliminated:false,

    },
    {
        id:uniqid(),
        url:'/asban.jpg',
        closed:true,
        eliminated:false,

    },
    {
        id:uniqid(),
        url:'/mhajeb.jpg',
        closed:true,
        eliminated:false,

    },
    {
        id:uniqid(),
        url:'/keskes.jpg',
        closed:true,
        eliminated:false,
    }

]
cardsData.forEach(el=>{
    cardsData.push({
        ...el,
        id:uniqid(),

    })
})

export default cardsData;