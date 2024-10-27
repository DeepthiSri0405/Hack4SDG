// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Root from "./assets/Ass22/root";
// import Header from "./assets/Ass233/Header";
// import Profiles from "./assets/Ass233/Profiles";
// import Ass3 from "./assets/Ass3/Ass3";
// import Ass1 from "./assets/Assigments/Ass1";
// import Ass2 from "./assets/Assigments/Ass2";
// import EffectDemo from "./assets/component/EffectDemo";
// import EventDemo from "./assets/component/EventDemo";
// import ManageTask from "./assets/component/ManageTask";
// import Parent from "./assets/component/Parent";
// import Products from "./assets/component/Products";
// import StateHandling from "./assets/component/stateHandling";
// import RootLayout from "./assets/routing/RootLayout";
// import Home from "./assets/routing/Home";
// import Register from "./assets/routing/Register";
// import Login from "./assets/routing/Login";
// import Technologies from "./assets/routing/Technologies";
// import ErrorElement from "./assets/routing/ErrorElement";
// import FormDemo from "./assets/React Forms/FormDemo";


// // ROUTING IMPORTANT

// function App()
// {
// //   const browserRouterObj=createBrowserRouter([
// //  {
// //    path:"",
// //    element:<RootLayout/>,
// //    errorElement:<ErrorElement/>,
// //    children:[
 
// // {
// //   path:'',
// //   element:<Home/>
// // },
// // {
// //   path:"register",
// //   element:<Register/>
// // },
// // {
// //   path:"Login",
// //   element:<Login/>
// // },
// // {
// //   path:"Technologies",
// //   element:<Technologies/>
// // }
// //    ]},
// // ]);
//   return (
//     <div>
//       {/* <Products/> */}
//       {/* <EventDemo/> */}
//       {/* <StateHandling/> */}
//       {/* <EffectDemo/> */}
// {/* <Parent/> */}
// <ManageTask/>
// {/* <Ass1/> */}
// {/* <Ass2/>  */}
// {/* <Root/> */}
// {/* <Header/>
// <Profiles/> */}
// {/* <Ass3/> */}

// {/* <RootLayout/> */}
// {/* <RouterProvider router={ browserRouterObj} /> */}

// </div>
//   );
  
// }


// //FORMS
// // function App()
// // {
// //   return (
// // <div>
// // <FormDemo/>
// // </div>
// //   );
// // }
// export default App;











// import React from 'react';
// import Sample1 from './reduxstore/Sample1';
// import Sample2 from './reduxstore/Sample2';
// import RootLayout1 from './reduxstore/RootLayout1';
// import Test1 from './reduxstore/Test1';
// import Test2 from './reduxstore/Test2';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Test3 from './reduxstore/Test3';
// import Test4 from './reduxstore/Test4';

// function App() {
//   const browserRouterObj = createBrowserRouter([
//     {
//       path: '/',
//       element: <RootLayout1 />,
//       children: [
//         {
//           path: 'sample1',
//           element: <Sample1 />,
//           children:[
//             {
//               path: 'test1',
//               element: <Test1 />,
//             },
//             {
//               path: 'test2',
//               element: <Test2 />,
//             },
//           ]
//         },
//         {
//           path: 'sample2',
//           element: <Sample2 />,
//           children:[
//             {
//               path: 'test3',
//               element: <Test3 />,
//             },
//             {
//               path: 'test4',
//               element: <Test4 />,
//             },
//           ]
//         },
       
//       ],
//     },
//   ]);

//   return (
//     <div>
//       <RouterProvider router={browserRouterObj} />
//     </div>
//   );
// }

// export default App;






//ProfilePage
// import React from 'react'
// import ProfileSelector from './MainHomePage/ProfileSelector'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import RootLayoutWorker from './WorkerInterface/RootLayoutWorker'
// import RootLayouthack4 from './HACK4SDGG/RootLayouthack4'
// import Homehack from './HACK4SDGG/Homehack'
//   import UploadedImages from './HACK4SDGG/UploadedImages'
// import UserComplaint from '../UserComplaint'

// function App() {
//   const browserRouterObj=createBrowserRouter(
//         [
//           {
//             path:'',
//             element:<ProfileSelector/>,
//             children:[
//               {
//                 path:'User',
//                 element:<RootLayouthack4/>,
//                 children:[
//                   {
//                     path:'',
//                      element: <Homehack/>
//                   },
//                   {
//                     path:'UserComplaint',
//                     element:<UserComplaint/>
//                   },
//                   {
//                     path:'UploadedImages',
//                     element:<UploadedImages/>
//                   }
//                 ]
                  
                
//               },
//               {
//                 path:'Worker',
//                 element:<RootLayoutWorker/>
//               }
//               // {
//               //   path:'Officer',
//               //   element:<OfficerInterface/>
//          ] }
//             ])
//   return (
//     <div>
//       <RouterProvider router={browserRouterObj} />
//     </div>
//   )
// }

// export default App

//CHATGPT
// import React from 'react';
// import ProfileSelector from './MainHomePage/ProfileSelector';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import RootLayoutWorker from './WorkerInterface/RootLayoutWorker';
// import RootLayouthack4 from './HACK4SDGG/RootLayouthack4';
// import Homehack from './HACK4SDGG/Homehack';
// import UploadedImages from './HACK4SDGG/UploadedImages';
// import UserComplaint from './HACK4SDGG/UserComplaint';

// function App() {
//   const browserRouterObj = createBrowserRouter([
//     {
//       path: '/',
//       element: <ProfileSelector />,
//     },
//     {
//       path: '/User',
//       element: <RootLayouthack4 />,
//       children: [
//         { path: '', element: <Homehack /> },
//         { path: 'UserComplaint', element: <UserComplaint /> },
//         { path: 'UploadedImages', element: <UploadedImages /> },
//       ],
//     },
//     {
//       path: '/Worker',
//       element: <RootLayoutWorker />,
//       // Define Worker routes here if needed
//     },
//   ]);

//   return (
//     <div>
//       <RouterProvider router={browserRouterObj} />
//     </div>
//   );
// }

// export default App;



// HACK4SDG--UserInterface.
import React from 'react'
import User from './HACK4SDGG/User'
import RootLayouthack4 from './HACK4SDGG/RootLayouthack4'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homehack from './HACK4SDGG/Homehack'
  import UploadedImages from './HACK4SDGG/UploadedImages'
import UserComplaint from '../UserComplaint'

function App() {
  const browserRouterObj=createBrowserRouter(
    [
      {
        path:'',
        element:<RootLayouthack4/>,
        children:[
          {
            path:'',
            element:
            <Homehack/>
          },
            {
              path:'UserComplaint',
              element:<UserComplaint/>

            },
            {
              path:'UploadedImages',
              element:<UploadedImages/>

            }
          ]}])
        
  return (
    <div>
    <RouterProvider router ={browserRouterObj}/>
      </div>
  )
}
export default App

//workerInterface
// import React from 'react'
// import { createBrowserRouter,RouterProvider } from 'react-router-dom'
// import RootLayoutWorker from './WorkerInterface/RootLayoutWorker'
// import HomeWorker from './WorkerInterface/HomeWorker'


// function App() {
//   const browserRouterObj=createBrowserRouter([
//     {
//       path:'',
//       element:<RootLayoutWorker/>,
//       children:[
        
//                      {
//                        path:'',
//                        element:
//                        <HomeWorker/>,
//                    }]

      
//                   }
//   ])
//   return (
//     <div>
//    <RouterProvider router={browserRouterObj}/>

//     </div>
//   )
// }

// export default App


//OfficerInterface
// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="dashboard">
//       <header className="profile-header">
//         <div className="profile-info">
//           <div className="profile-image">
//             <img src="https://via.placeholder.com/50" alt="Profile" />
//           </div>
//           <div className="profile-details">
//             <p><strong>Name of the officer:</strong></p>
//             <p><strong>Municipal Corporation Name:</strong></p>
//           </div>
//         </div>
//         <div className="tickets-raised">TICKETS RAISED</div>
//       </header>

//       <div className="content">
//         <div className="stats">
//           <div className="total-issues">
//             <h3>Total issues:</h3>
//             <p>Solved: 0</p>
//             <p>Unsolved: 0</p>
//           </div>
//           <div className="dashboard-chart">
//             <h3>Dashboard:</h3>
//             <div className="chart-placeholder">[Chart Placeholder]</div>
//           </div>
//         </div>

//         <div className="tasks">
//           <div className="assigned-tasks">
//             <h3>Assigned tasks</h3>
//             <TaskCard issueId="101" workerName="Worker A" />
//             <TaskCard issueId="102" workerName="Worker B" />
//             <TaskCard issueId="103" workerName="Worker C" />
//           </div>
//           <div className="unassigned-tasks">
//             <h3>Unassigned tasks</h3>
//             <UnassignedTaskCard issueId="104" />
//             <UnassignedTaskCard issueId="105" />
//             <UnassignedTaskCard issueId="106" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function TaskCard({ issueId, workerName }) {
//   return (
//     <div className="task-card assigned">
//       <p>Issue ID: {issueId}</p>
//       <p>Worker name: {workerName}</p>
//     </div>
//   );
// }

// function UnassignedTaskCard({ issueId }) {
//   return (
//     <div className="task-card unassigned">
//       <p>Issue ID: {issueId}</p>
//       <p>Details:</p>
//       <button className="assign-button">Assign</button>
//     </div>
//   );
// }

// export default App;















