// import { useEffect, useState } from 'react';
// import Test from './components/Test';
// import Footer from './components/Footer/Footer'
// function App() {  

// const FavRemove = (id) => { 
//   console.log(id) 
//   const updateFavList = FavoriteList.filter(item => item.id !== id)
//   setFavoriteList(updateFavList)
//   TotalFavoriteAmount(updateFavList)

//   const updateAuctionData = AuctionData.map(item => {
//     if(item.id == id) {
//       item.isFav = true 
//     } 
//     return item;
//   }) 

//   setAuctionData(updateAuctionData);

// }

//   const heartButton = (id) => { 


//     const updateData = AuctionData.map(item => {
//       if(item.id == id) {
//         item.isFav = false
//       } 
//       return item;
//     })
//     setAuctionData(updateData)

//     const updateFavList = AuctionData.filter(item => item.id == id);
//     const UpdatedFavList = [...FavoriteList, ...updateFavList];

//     setFavoriteList(UpdatedFavList);
//     TotalFavoriteAmount(UpdatedFavList)

//   }




//   const [AuctionData,setAuctionData] = useState([]); 
//   const [FavoriteList,setFavoriteList] = useState([]);
//   const [TotalPrice, setTotalPrice] = useState(0)


//   useEffect(()=>{
//     fetch('/auction-data.json')
//       .then(res => res.json())
//       .then(data => {
//         const UpdateAuctionData = data.map(item => ({ ...item, isFav:true }))
//         const againUpdata = UpdateAuctionData.map(item => ({...item,isNew:true}))
//         setAuctionData(againUpdata)
//       })
//   },[])


//   const TotalFavoriteAmount = (FavoriteList)=>{
//     let sum = 0;

//     FavoriteList.forEach(item => {
//       sum+= parseFloat(item.currentBidPrice)  
//     });      

//     setTotalPrice(sum)
//   }

//   return (
//     <>


//       <Test FavRemove={FavRemove}  FavoriteList={FavoriteList} TotalPrice={TotalPrice} heartButton={heartButton} AuctionData={AuctionData}></Test>

//     <Footer></Footer>
//     </>
//   );
// }

// export default App;









import React, { useEffect, useState } from 'react';
import Table from './component/Table/Table';
import Favorite from './component/Favorite/Favorite';



const App = () => {
  const [AuctionData, setAuctionData] = useState([])
  const [FavoriteList, setFavoriteList] = useState([])
  const [TotalPrice, setTotalPrice] = useState(0)


  const RemoveButton = (id) => {
    const updateFav = FavoriteList.filter(item => item.id !== id)
    setFavoriteList(updateFav) 
    
    let UpdateTotalprice = 0;
    updateFav.forEach(item => {
      UpdateTotalprice += item.currentBidPrice;
    }) 
    setTotalPrice(UpdateTotalprice);


    const updateAuctionData = AuctionData.map(item => {
      if(item.id == id) {
        item.isClicked = false;
      }
      return item;
    })

    setAuctionData(updateAuctionData);
  }

  const ClickedButton = (id) => {


    const favoriteListedData = AuctionData.filter(item => item.id === id); 
    const totalFavData = ([...FavoriteList, ...favoriteListedData])
    setFavoriteList(totalFavData); 

    const updateAuctionData = AuctionData.map(item=> {
      if(item.id == id) {
        item.isClicked = true
      }
      return item;
    })
    setAuctionData(updateAuctionData)

    let UpdatePrice = 0;
    totalFavData.forEach(item => {
      UpdatePrice += item.currentBidPrice;
    }) 
    setTotalPrice(UpdatePrice);

  }

  // console.log('total: ', TotalPrice)


  useEffect(() => {
    fetch('/auction-data.json').then(res => res.json())
      .then(data =>{
        const newData = data.map(item => ({...item, isClicked : false}))
        setAuctionData(newData)
      })
  }, [])



 



  return (
    <div className='w-4/5 mx-auto py-20'>

      <div className='flex gap-5'>
        <div className='w-8/12'>
          <Table AuctionData={AuctionData} ClickedButton={ClickedButton}></Table>
        </div>
        <div className='flex-1'>
           <Favorite RemoveButton={RemoveButton} AuctionData={AuctionData} FavoriteList={FavoriteList} TotalPrice={TotalPrice}></Favorite>
        </div>

      </div>

    </div>


  );
};

export default App;


















