import { useEffect, useState } from 'react';
import Test from './components/Test';
import Footer from './components/Footer/Footer'
function App() {  
 
const FavRemove = (id) => { 
  console.log(id) 
  const updateFavList = FavoriteList.filter(item => item.id !== id)
  setFavoriteList(updateFavList)
  TotalFavoriteAmount(updateFavList)

  const updateAuctionData = AuctionData.map(item => {
    if(item.id == id) {
      item.isFav = true 
    } 
    return item;
  }) 

  setAuctionData(updateAuctionData);

}

  const heartButton = (id) => { 

 
    const updateData = AuctionData.map(item => {
      if(item.id == id) {
        item.isFav = false
      } 
      return item;
    })
    setAuctionData(updateData)
    
    const updateFavList = AuctionData.filter(item => item.id == id);
    const UpdatedFavList = [...FavoriteList, ...updateFavList];
    
    setFavoriteList(UpdatedFavList);
    TotalFavoriteAmount(UpdatedFavList)

  }

  


  const [AuctionData,setAuctionData] = useState([]); 
  const [FavoriteList,setFavoriteList] = useState([]);
  const [TotalPrice, setTotalPrice] = useState(0)


  useEffect(()=>{
    fetch('/auction-data.json')
      .then(res => res.json())
      .then(data => {
        const UpdateAuctionData = data.map(item => ({ ...item, isFav:true }))
        const againUpdata = UpdateAuctionData.map(item => ({...item,isNew:true}))
        setAuctionData(againUpdata)
      })
  },[])

  
  const TotalFavoriteAmount = (FavoriteList)=>{
    let sum = 0;

    FavoriteList.forEach(item => {
      sum+= parseFloat(item.currentBidPrice)  
    });      

    setTotalPrice(sum)
  }

  return (
    <>

      
      <Test FavRemove={FavRemove}  FavoriteList={FavoriteList} TotalPrice={TotalPrice} heartButton={heartButton} AuctionData={AuctionData}></Test>

    <Footer></Footer>
    </>
  );
}

export default App;
