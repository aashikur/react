import TableRaw from '../TableRaw/TableRaw';

const Table = ({handleFavorite,AuctionData,EnableBtn,ClickedToggles}) => {


    
    return (
        <div>
            <table className='w-full text-[.8rem] md:text-[1rem]'>
                <thead className=''>
                    <tr className='my-light'>
                        <th>Items</th>
                        <th></th>
                        <th>Current Bid</th>
                        <th>Time Left</th>
                        <th>Bid Now</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       AuctionData.map(Tdata => <TableRaw ClickedToggles={ClickedToggles} EnableBtn={EnableBtn} handleFavorite={handleFavorite} key={Tdata.id} Tdata={Tdata}></TableRaw>) 
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;