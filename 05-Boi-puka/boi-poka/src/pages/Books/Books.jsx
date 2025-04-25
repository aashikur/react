import Book from "../../component/Book/Book";

const Books = ({allBooksData}) => {

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {
                allBooksData.map((singleBook) => (
                    <Book
                        singleBook={singleBook}
                        key={singleBook.bookId}
                    />
                ))
            }
        </div>
    );
};

export default Books;