import React, { useState, useEffect } from 'react';
import '../styles/adminDashboard.css';
import Navigation from '../components/Navigation';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';
import { MdGroups } from "react-icons/md";
import { BiBookAlt } from "react-icons/bi";
import { CiCircleCheck } from "react-icons/ci";
import { RiErrorWarningLine } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { CiGrid31 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { GoSignOut } from "react-icons/go";
import { db } from '../Firebase';
import AnalysisModal from '../components/AnalysisModal';
import { FaCamera } from "react-icons/fa";


const AdminDashboard = () => {
    // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
      const auth = useAuth();
  const { logout,user } = useAuth(); 
  // eslint-disable-next-line no-unused-vars
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('admin');
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
    useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersSnapshot = await db.collection('users').get();
        const usersData = usersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setMenuOpen(false);
  };
   const handleLogoutClick = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Error during logout:', error.message);
    }
   
  };
// const handleSelectChange = (e) => {
//   const selectedOption = e.target.value;

// };


  const renderContent = () => {
    switch (selectedMenu) {
      case 'dashboard':
        return (
        <main className="py-6 bg-surface-secondary" style={{marginTop:'1.5rem'}}>
          <div className="container-fluid">

            <div className="row g-6 mb-6">
              <div className="col-xl-3 col-sm-6 col-12" >
                <div className="card shadow border-0"  style={{background:'#083A55'}}>
                  <div className="card-body"  style={{textAlign:'center',height:'200px'}}>
                    <div className="row">
                      <div className="col">
                        <span className="h6 font-semibold  text-sm d-block mb-2"  style={{color:'white'}}><MdGroups  style={{ fontSize: '2rem' }} /></span>
                        <span className="h3 font-bold mb-0" style={{ color: 'white', fontSize: '1rem' }}>Fellows Registered</span>
                      </div>
                   
                    </div>
                    <div className="mt-2 mb-0 "  >
                    
                      <span className="text-nowrap  "  style={{ color: 'white', fontSize: '2rem ' }}>100</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card shadow border-0" style={{background:'#003183'}}>
                  
                  <div className="card-body" style={{textAlign:'center',height:'200px'}}>
                    <div className="row">
                      <div className="col">
                        <span className="h6 font-semibold  text-sm d-block mb-2"  style={{color:'white'}}><BiBookAlt  style={{ fontSize: '2rem' }}/></span>
                        <span className="h3 font-bold mb-0" style={{ color: 'white', fontSize: '1rem' }}> Number of Assessment</span>
                      </div>
                
                    </div>
                    <div className="mt-2 mb-0 text-sm">
                  
                      <span className="text-nowrap  "  style={{ color: 'white', fontSize: '2rem ' }}>3</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card shadow border-0" style={{background:'#417505'}}>
                  <div className="card-body" style={{textAlign:'center',height:'200px'}}>
                    <div className="row">
                      <div className="col">
                        <span className="h6 font-semibold  text-sm d-block mb-2"  style={{color:'white'}}><CiCircleCheck style={{ fontSize: '2rem' }}/></span>
                        <span className="h3 font-bold mb-0" style={{ color: 'white', fontSize: '1rem' }}>Fellows Completed Test</span>
                      </div>
                    
                    </div>
                    <div className="mt-2 mb-0 text-sm">
                   
                      <span className="text-nowrap  "  style={{ color: 'white', fontSize: '2rem ' }}>2</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card shadow border-0" style={{background:'#B76800'}}>
                  <div className="card-body" style={{textAlign:'center',height:'200px'}}>
                    <div className="row">
                      <div className="col">
                        <span className="h6 font-semibold  text-sm d-block mb-2"  style={{color:'white'}}><RiErrorWarningLine  style={{ fontSize: '2rem' }}/></span>
                        <span className="h3 font-bold mb-0"style={{ color: 'white', fontSize: '1rem' }}>Uncompleted Test</span>
                      </div>
                  
                    </div>
                    <div className="mt-2 mb-0 text-sm" >
                
                      <span className="text-nowrap  "  style={{ color: 'white', fontSize: '2rem ' }}>98</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow border-0 mb-7">
            <div class="card-header" style={{display:'flex',justifyContent:'space-between'}}>
                        <h5 class="mb-0">Fellow Details</h5>
                    <h6>view all</h6>
                    </div>
              <div className="table-responsive">
                <table className="table table-hover table-nowrap">
                  <thead className="custom-background">
                    <tr  >
                      <th scope="col">  <button type="radio" className="btn btn-sm btn-square text-danger-hover blue-border">
                  
                        </button></th>
                        <th scope="col">Fellow Name</th>
                      <th scope="col">Country</th>
                      <th scope="col">Phone number</th>
                      <th scope="col">Email Address</th>
                      <th scope="col">Preffered Track</th>
                        <th scope="col">Assessment Status</th>
                            <th scope="col"> Scoring and Analysis</th>
                             <th scope="col">Recommendation</th>
                    </tr>
                  </thead>
                  <tbody>


  <tr>
                         <td className="text-end">
         
                        <button type="radio" className="btn btn-sm btn-square blue-border text-danger-hover">
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                      <td>
                        <img alt="..." src="https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="avatar avatar-sm rounded-circle me-2" />
                        <div className="text-heading font-semibold" href="#">
                     Okeke Chiamaka
                                        </div>
                      </td>
                      <td>
                       Nigeria
                                    </td>
                      <td>
                     
                        <div className="text-heading font-semibold" href="#">
                         +2348092333982
                                        </div>
                      </td>
                      <td>
                     chiamaka.okeke@wowentechsters.org
                                    </td>
                      <td>
                        <span className="badge badge-lg badge-dot">
                     Product Design
                                        </span>
                      </td>
                       <td>
                        <div style={{borderRadius:' 10px', border:'1px solid green',textAlign:'center'}}>{user.testCompleted ? 'Completed' : 'Not Completed'}</div>
                      </td> <td  >
                      <button className="badge badge-lg badge-dot" onClick={openModal} style={{ padding: '20px' }}>
  <CiMenuKebab />
</button>

                      </td>
                   
                        <td>
                        <span className="badge badge-lg badge-dot">
                     Product Design
                                        </span>
                      </td>
                    </tr>

                    <tr>
                         <td className="text-end">
         
                        <button type="radio" className="btn btn-sm btn-square blue-border  text-danger-hover">
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                      <td>
                        <img alt="..." src="https://images.unsplash.com/photo-1573166953836-06864dc70a21?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="avatar avatar-sm rounded-circle me-2" />
                        <div className="text-heading font-semibold" href="#">
                       Fausat Abiola
                                        </div>
                      </td>
                      <td>
                       Nigeria
                                    </td>
                      <td>
                     
                        <div className="text-heading font-semibold" href="#">
                         +2348091923398
                                        </div>
                      </td>
                      <td>
                   fausat@womentechsters.org
                                    </td>
                      <td>
                        <span className="badge badge-lg badge-dot">
                        Frontend Developement
                                        </span>
                      </td>
                       <td>
                        <div style={{borderRadius:' 10px', border:'1px solid green',textAlign:'center'}}>{user.testCompleted ? 'Completed' : 'Not Completed'}</div>
                      </td> <td  >
                      <button className="badge badge-lg badge-dot" onClick={openModal} style={{ padding: '20px' }}>
  <CiMenuKebab />
</button>

                      </td>
                   
                        <td>
                        <span className="badge badge-lg badge-dot">
                    Frontend Developement
                                        </span>
                      </td>
                    </tr>
                    {/* {users.map(user => (
            <tr key={user.id}>
              <td>
                <img alt="..." src={user.photoURL} className="avatar avatar-sm rounded-circle me-2" />
                <div className="text-heading font-semibold">{user.name}</div>
              </td>
              <td>{user.country}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.email}</td>
              <td>
                <span className="badge badge-lg badge-dot">{user.preferredTrack}</span>
              </td>
              <td>
                <div style={{ borderRadius: '10px', border: '1px solid green', textAlign: 'center' }}>
                  {user.testCompleted ? 'Completed' : 'Not Completed'}
                </div>
              </td>
              <td>
                <button className="badge badge-lg badge-dot" onClick={() => openModal(user.id)} style={{ padding: '20px' }}>
                  <CiMenuKebab />
                </button>
              </td>
            </tr>
          ))} */}
                    {/* Add more table rows as needed */}
                  </tbody>
                </table>
                
              </div>
              <div className="card-footer border-0 py-5">
                <span className="text-muted text-sm">Showing 2  items </span>
              </div>
               {/* <div className="card-footer border-0 py-5">
        <span className="text-muted text-sm">Showing {users.length} items</span>
      </div> */}
            </div>
            
        
          </div>
        </main>
        );
      case 'support':
        return (
           <div className="card" style={{marginTop:'2rem'}}>
            <div className="title">Support</div>
            <div className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="">Title</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Message</label>
                  <textarea className="form-group" id="" cols="30" rows="8" style=   {{width:'100%',border:'1px solid #ccc',padding:'10px',borderRadius:'5px',resize:'vertical'}} placeholder="Description"></textarea>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="">Subject</label>
                      {/* <input type="text" className="form-control" />
                       */}
                      <select   className="form-control">
                      <option value="">Select an option </option>
                      <option value="option1">Option 1</option>
                       <option value="option2">Option 2</option>
                     <option value="option3">Option 3</option>
                     </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button style={{
              width:'200px',
              background:'var(--pryColor)',
              margin:'5px auto 15px auto',
              borderRadius:'5px',
              padding:"10px 20px",
              color:'white'
            }}>Submit</button>
          </div>
        );
      case 'userProfile':
        return (
          
         <div className="card" style={{marginTop:'2rem'}}>
            <div className="title" style={{display:'flex',justifyContent:'space-between'}}>
              <h3>Profile</h3>
              <h5 style={{color:'orangered'}}>Edit Profile</h5>
            </div>
            <div className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6 flex top relative" >
                     <FaCamera className='camera'/>
                              <img src="https://images.unsplash.com/photo-1573166953836-06864dc70a21?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Girl with laptop"  className='CardadminAvatar' />
                     <div >
                       {auth.user && auth.user.email && <h3 > Admin</h3>}
                     </div>   

                  </div>
                 <div className='bottom'>
                  <h5>Email Address:</h5>
                 <h5>{auth.user.email}</h5>
                 </div>
                  <div className='bottom'>
                  <h5>Phone Number:</h5>
                 <h5>+2348092945599</h5>
                 </div>
                  <div className='bottom'>
                  <h5>Country:</h5>
                 <h5>Nigeria</h5>
                 </div>
                </div>
              </div>
            </div>
 
          </div>
        );
      case 'logout':
        return (
          <div>
      
            EVENTS
          </div>
        );
      default:
        return null;
    }
  };

  return (
 
      <div>
      <Navigation />
      <div className={`left-menu`}>
        <div className={`selected-menu ${selectedMenu === 'dashboard' ? 'active' : ''}`} onClick={() => handleMenuClick('dashboard')}>
         <CiGrid31 />
          <span>Dashboard</span>
        </div>
        <div className={`selected-menu ${selectedMenu === 'support' ? 'active' : ''}`} onClick={() => handleMenuClick('support')}>
         <CiCircleQuestion />
          <span>Support</span>
        </div>
        <div className={`selected-menu ${selectedMenu === 'userProfile' ? 'active' : ''}`} onClick={() => handleMenuClick('userProfile')}>
          <CiUser />
          <span>User Profile</span>
        </div>
       <div className={`selected-menu ${selectedMenu === 'logout' ? 'active' : ''} logoutBtn`} onClick={handleLogoutClick} >
 <GoSignOut  />
  <span >Logout</span>
  </div>

      </div>
      <div className="page-container">
        {renderContent()}
      </div>
       {isModalOpen && (
  <AnalysisModal isOpen={isModalOpen} onClose={closeModal}/>
)}

    </div>
  );
};

export default AdminDashboard;
