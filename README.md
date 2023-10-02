#  React example


## 1. Install And Run

Run Terminal with Admin:

### 1.1 Install packages
```bash
 npm install
```
###  1.2 Run the application
```bash
 npm start
```
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.


###  1.3 Build app for production
```bash
 npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### 1.4. Directory Structure

```
├───api
├───assets ( quản lý image, icon,...)
│   ├───font
│   ├───icon
│   └───image
├───components ( những thành phần giao diện (UI) )
│   ├───atoms  (các components button, avatar )
│   │   ├───avatar
│   │   └───button
│   ├───molecules (components phân chia theo các chức năng )
│   │   ├───confirm
│   │   ├───home
│   │   └───users-management
│   └───organisms (các components liên quan đến bố cục layout )
│       ├───footer
│       ├───header
│       └───navbar
├───config (nơi lưu trữ các file cấu hình )
├───constants (giá trị của 1 biến không thay đổi trong suốt một kịch bản)
├───context 
├───pages 
│   ├───site-admin
│   │   ├───login
│   │   └───student-management
│   └───site-customer
├───redux
│   ├───action
│   └───reducer
├───routes (bộ định tuyến trỏ tương ứng với forder /pages )
└───scss (nơi lưu css và scss )
    ├───login
    └───student-management
```

## Instructions for creating CRUD
