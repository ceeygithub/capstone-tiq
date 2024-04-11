// import React, { useState } from 'react';
import '../styles/adminDashboard.css';
import { FaUsers } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineEventSeat } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import Navigation from '../components/Navigation';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';
import { MdGroups } from "react-icons/md";
import { BiBookAlt } from "react-icons/bi";
import { CiCircleCheck } from "react-icons/ci";
import { RiErrorWarningLine } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";

import React, { useState, useEffect } from 'react';
import { db } from '../Firebase';
import AnalysisModal from '../components/AnalysisModal';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const { logout, isAdmin, user } = useAuth(); 
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
                   
                      <span className="text-nowrap  "  style={{ color: 'white', fontSize: '2rem ' }}>460</span>
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
                
                      <span className="text-nowrap  "  style={{ color: 'white', fontSize: '2rem ' }}>540</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow border-0 mb-7">
            <div class="card-header" style={{display:'flex',justifyContent:'space-between'}}>
                        <h5 class="mb-0">Fellow Details</h5>
                    <h4>view all</h4>
                    </div>
              <div className="table-responsive">
                <table className="table table-hover table-nowrap">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col"></th>
                        <th scope="col">Fellow Name</th>
                      <th scope="col">Country</th>
                      <th scope="col">Phone number</th>
                      <th scope="col">Email Addres</th>
                      <th scope="col">Preffered Track</th>
                        <th scope="col">Assessment Status</th>
                            <th scope="col">Analysis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                         <td className="text-end">
         
                        <button type="radio" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                      <td>
                        <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                        <a className="text-heading font-semibold" href="#">
                          Cynthia Ekhomwandolor
                                        </a>
                      </td>
                      <td>
                       Nigeria
                                    </td>
                      <td>
                     
                        <a className="text-heading font-semibold" href="#">
                         +2348091923398
                                        </a>
                      </td>
                      <td>
                       {user.email}
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
                   
                      
                    </tr>
                    {/* Add more table rows as needed */}
                  </tbody>
                </table>
                
              </div>
              <div className="card-footer border-0 py-5">
                <span className="text-muted text-sm">Showing 10 items out of 250 results found</span>
              </div>
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
                  <textarea className="form-group" id="" cols="30" rows="8" style=   {{width:'100%',border:'1px solid #ccc',padding:'10px',borderRadius:'5px',resize:'vertical'}}></textarea>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="">Subject</label>
                      <input type="text" className="form-control" />
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
          <div>
            {/* UI for settings */}
           user profile
          </div>
        );
      case 'logout':
        return (
          <div>
            {/* UI for events */}
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
          <FaUsers />
          <span>Dashboard</span>
        </div>
        <div className={`selected-menu ${selectedMenu === 'support' ? 'active' : ''}`} onClick={() => handleMenuClick('support')}>
          <IoCreateOutline />
          <span>Support</span>
        </div>
        <div className={`selected-menu ${selectedMenu === 'userProfile' ? 'active' : ''}`} onClick={() => handleMenuClick('userProfile')}>
          <MdOutlineEventSeat />
          <span>User Profile</span>
        </div>
       <div className={`selected-menu ${selectedMenu === 'logout' ? 'active' : ''} logoutBtn`} onClick={handleLogoutClick} >
  <IoSettingsOutline />
  <span>Logout</span>
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
