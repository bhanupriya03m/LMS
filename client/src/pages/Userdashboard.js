

// import React, { useState, useEffect } from 'react';
// import Axios from 'axios';

// function Userdashboard() {
//   const [books, setBooks] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [booksPerPage] = useState(10);
//   const [searchAttribute, setSearchAttribute] = useState('title');
//   const [searchKeyword, setSearchKeyword] = useState('');

//   useEffect(() => {
//     const fetchBooks = async () => {
//       const response = await Axios.get('http://localhost:3001/books');
//       setBooks(response.data);
//     };

//     fetchBooks();
//   }, []);

//   const indexOfLastBook = currentPage * booksPerPage;
//   const indexOfFirstBook = indexOfLastBook - booksPerPage;
//   const currentBooks = books.filter(book => {
//     const value = book[searchAttribute].toString().toLowerCase();
//     return value.includes(searchKeyword.toLowerCase());
//   }).slice(indexOfFirstBook, indexOfLastBook);

//   const handleChangePage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       <h1>User Dashboard</h1>
//       <div>
//         <select value={searchAttribute} onChange={(e) => setSearchAttribute(e.target.value)}>
//           <option value="title">Title</option>
//           <option value="author">Author</option>
//           <option value="subject">Subject</option>
//           <option value="publishdate">Publish Date</option>
//         </select>
//         <input type="text" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} />
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Publish Date</th>
//             <th>Author</th>
//             <th>Subject</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentBooks.map((book, index) => (
//             <tr key={index}>
//               <td>{book.title}</td>
//               <td>{book.publishdate.split('T')[0]}</td>
//               <td>{book.author}</td>
//               <td>{book.subject}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div>
//         {books.length > booksPerPage && (
//           <div>
//             <button onClick={() => handleChangePage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
//             <button onClick={() => handleChangePage(currentPage + 1)} disabled={indexOfLastBook >= books.length}>Next</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Userdashboard;




import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Userdashboard() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10);
  const [searchAttribute, setSearchAttribute] = useState('title');
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await Axios.get('http://localhost:3001/books');
      setBooks(response.data);
    };

    fetchBooks();
  }, []);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.filter(book => {
    const value = book[searchAttribute].toString().toLowerCase();
    return value.includes(searchKeyword.toLowerCase());
  }).slice(indexOfFirstBook, indexOfLastBook);

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(books.length / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <h1>User Dashboard</h1>
      <div>
        <select value={searchAttribute} onChange={(e) => setSearchAttribute(e.target.value)}>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="subject">Subject</option>
          <option value="publishdate">Publish Date</option>
        </select>
        {/* <input type="text" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} /> */}
        <input 
          type="text" 
          value={searchKeyword} 
          onChange={(e) => setSearchKeyword(e.target.value)} 
          placeholder="Search..." // Add placeholder attribute here
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Publish Date</th>
            <th>Author</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {currentBooks.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.publishdate.split('T')[0]}</td>
              <td>{book.author}</td>
              <td>{book.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <button onClick={() => handleChangePage(number)} className="page-link">{number}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {books.length > booksPerPage && (
          <div className="pagination-controls">
            <button onClick={() => handleChangePage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <button onClick={() => handleChangePage(currentPage + 1)} disabled={indexOfLastBook >= books.length}>Next</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Userdashboard;
