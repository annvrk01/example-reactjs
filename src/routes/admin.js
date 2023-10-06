import React from "react";
import { Routes,  Route } from "react-router-dom";

import Home from './../components/molecules/home';

import StudentManage from './../pages/site-admin/student-management/StudentManage'
import CreateStudentForm from './../pages/site-admin/student-management/CreateStudentForm'
import ShowStudentDetail from './../pages/site-admin/student-management/ShowStudentDetail'

import MyComponent from './../components/molecules/example/MyComponent'
import User from "./../pages/site-admin/user/index";
import UserAdd from "./../pages/site-admin/user/add";

import Sanpham from "../pages/site-admin/sanpham";
import SanphamAdd from "../pages/site-admin/sanpham/add";
// import history from "./history"

function RoutesAdmin() {
    return (
        <Routes  >
            <Route path="/" element={<Home />} />

            <Route path="/student" element={<StudentManage />} />
            <Route path="/student/add" element={<CreateStudentForm />} />
            <Route path="/student/edit/:id" element={<CreateStudentForm />} />
            <Route path="/student/detail/:id" element={<ShowStudentDetail />} />

            <Route path="/user" element={<User />} />
            <Route path="/user/add" element={<UserAdd />} />
            <Route path="/user/edit/:id" element={<UserAdd />} />

            <Route path="/sanpham" element={<Sanpham />} />
            <Route path="/sanpham/add" element={<SanphamAdd />} />



            <Route path="/my" element={<MyComponent />} />
            {/* <Route path="/user" element={<Users />} /> */}
          </Routes>
      );
    }
  export default RoutesAdmin