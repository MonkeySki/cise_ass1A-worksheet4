import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
// import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article"; 
// import NotFoundPage from "./pages/404";
const App = () =>  {
    return (
      <BrowserRouter>
        <div>
        <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
          <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/Submit-Article' element={<SubmitArticle></SubmitArticle>} />
          {/* <Route path='/edit-book/:id' element={<UpdateBookInfo></UpdateBookInfo>} />
          <Route path='/show-book/:id' element={<ShowBookDetails></ShowBookDetails>} /> */}
          </Routes>
        </div>
      </BrowserRouter>
        // <Routes>
        // <div>
        //   <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
        //     {/* <ul className="header">
        //         <li><a href = "/">Home</a></li>
        //         <li><a href = "/SEPractice">Select the Practice</a></li>
        //         <li><a href = "/SubmitArticle">Submit an Article</a></li>
        //     </ul> */}
        //   <div className="content">
        //     I am words
        //   </div>
        // </div>
        // </Routes>
    );
}
 
export default App;