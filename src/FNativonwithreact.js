// import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import SImage from './img/second.jpg';
// import TImage from './img/therid.jpg';

// /*function App() {
//   return (
//     <div><nav class="navbar navbar-expand-lg bg-info">
//       <div class="container">
//         <a class="navbar-brand" href="#">Navbar</a>
//         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//             <li class="nav-item ">
//               <a class="nav-link active" aria-current="page" href="#">Home</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">Link</a>
//             </li>
//             <li class="nav-item dropdown">
//               <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                 Dropdown
//               </a>
//               <ul class="dropdown-menu">
//                 <li><a class="dropdown-item" href="#">Action</a></li>
//                 <li><a class="dropdown-item" href="#">Another action</a></li>
//                 <li><hr class="dropdown-divider" /></li>
//                 <li><a class="dropdown-item" href="#">Something else here</a></li>
//               </ul>
//             </li>
//             <li class="nav-item text-left ">
//               <a class="nav-link disabled">Disabled</a>
//             </li>
//           </ul>

//         </div>
//       </div>
//     </nav>



//       <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
//         <div class="carousel-indicators">
//           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
//         </div>
//         <div class="carousel-inner">
//           <div class="carousel-item active">
//             <img src={TImage} class="d-block w-100" alt="..." />
//             <div class="carousel-caption d-none d-md-block">
//               <h5>First slide label</h5>
//               <p>Some representative placeholder content for the first slide.</p>
//             </div>
//           </div>
//           <div class="carousel-item">
//             <img src={SImage} class="d-block w-100" alt="..." />
//             <div class="carousel-caption d-none d-md-block">
//               <h5>Second slide label</h5>
//               <p>Some representative placeholder content for the second slide.</p>
//             </div>
//           </div>
//           <div class="carousel-item">
//             <img src={TImage} class="d-block w-100" alt="..." />
//             <div class="carousel-caption d-none d-md-block">
//               <h5>Third slide label</h5>
//               <p>Some representative placeholder content for the third slide.</p>
//             </div>
//           </div>
//           <div class="carousel-item">
//             <img src={SImage} class="d-block w-100" alt="..." />
//             <div class="carousel-caption d-none d-md-block">
//               <h5> Fourth slide label</h5>
//               <p>Some representative placeholder content for the second slide.</p>
//             </div>
//           </div>


//           <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Previous</span>
//           </button>
//           <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>

//       <div class="container-fluid">
//   {/* <div class="row md-4">
//           <div className='col-sm-4  bg-info p-4   text-white' >
//             <p className='lead'>this lamp Instutiue of kukatapaalli this lamp Instutiue of kukatapaalli
//               this lamp Instutiue of kukatapaalli this lamp Instutiue of kukatapaalli
//               this lamp Instutiue of kukatapaalli this lamp Instutiue of kukatapaalli
//               this lamp Instutiue of kukatapaalli this lamp Instutiue of kukatapaalli</p>
//           </div>
//           <div className='col-sm-4  bg-danger p-4   text-white' >
//             <p className='lead'>this lamp Instutiue of kukatapaalli this lamp Instutiue of kukatapaalli
//               this lamp Instutiue of kukatapaalli this lamp Instutiue of kukatapaalli
//               this lamp Instutiue of kukatapaalli this lamp Instutiue of kukatapaalli
//               this lamp Instutiue of kukatapaalli this lamp Instutiue of kukatapaalli</p>
//           </div>
//         </div>
//         <div className='col-sm-4  bg-success p-4   text-white' >
//           <p className='lead'>this lamp Instutiue of kukatapaalli this lamp Instutiue of kukatapaalli
//             this lamp Instutiue of kukatapaalli this lamp Instutiue of kukatapaalli
//             this lamp Instutiue of kukatapaalli this lamp Instutiue of kukatapaalli
//             this lamp Instutiue of kukatapaalli this lamp Instutiue of kukatapaalli</p>
//         </div>
//       </div> */}

// <div class="container-fluid">
//   <div class="row mt-4">
//     <div class="col">
//   <p className='lead bg-secondary  text-white  p-1 dispaly-1  rounded'>
//     this is lamp Instutiue of kakutapallli this is lamp Instutiue of kakutapallli
//     this is lamp Instutiue of kakutapallli this is lamp Instutiue of kakutapallli
//     this is lamp Instutiue of kakutapallli this is lamp Instutiue of kakutapallli
//     this is lamp Instutiue of kakutapallli this is lamp Instutiue of kakutapallli
//   </p>
//     </div>
//     <div class="col">
//     <p className='lead  bg-success   text-white  p-1 dispaly-1 rounded'>
//     this is lamp Instutiue of kakutapallli this is lamp Instutiue of kakutapallli
//     this is lamp Instutiue of kakutapallli this is lamp Instutiue of kakutapallli
//     this is lamp Instutiue of kakutapallli this is lamp Instutiue of kakutapallli
//     this is lamp Instutiue of kakutapallli this is lamp Instutiue of kakutapallli
//   </p>
//     </div>
//     <div class="col">
//     <p className='lead bg-info p-1 dispaly-1  text-white  rounded'>
//     this is lamp Instutiue of kakutapallli this is lamp Instutiue of kakutapallli
//     this is lamp Instutiue of kakutapallli this is lamp Instutiue of kakutapallli
//     this is lamp Instutiue of kakutapallli this is lamp Instutiue of kakutapallli
//     this is lamp Instutiue of kakutapallli this is lamp Instutiue of kakutapallli
//   </p>
//     </div>
//     </div>
//     </div>
//     </div>
//     </div>

  
//   )
// }



// export default App  
