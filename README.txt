1. Authen
2. Cookie -> Middleware
3. md5:
    - mã hóa -> lưu mã hóa dô
    - nào ai đăng nhập -> mã hóa lại coi khớp hem 
4. Signed cookie : 
    = Problem: cookie dễ dàng bị đổi -> tự truy cập vào user người khác -> hacker 
    syntax: document.cookie= 'userId=TuPuong' -> cookie thay đổi
    - Signed cookie: cookie + hashed -> ko thể đổi 
5. Enviroment valiable:
    - npm i dotenv
    - file : .env -> key -value
    - gitignore
    - process.env. ..... 
6.Update file 
    - 1. data dạng file không thể được submit lên form bình thường
        -> phải thêm thuộc tính dô <form></form>
        -> validation sẽ ko thể bắt được dữ liệu do nó bị mã hóa
    - 2. npm i multer -> đọc data từ request 
        -> tạo nơi lưu trữ file ảnh 
        var upload = multer({ dest: "./public/uploads" }); // 1 chấm
        -> tạo middleware 
    - 3. tạo middleware : cập nhật file vào folder tạo trc
        -> thêm vào db (đường dẫn đến thu mục bị sai -> sửa lại cho đún)

7. Session: phiên làm việc mà user dùng web 
    - Khi đến 1 trang web -> cookie ? -> (Có) -> end
                                      -> (chưa) -> tạo cookie with sessionId -> store Session data to db 
    - Cách làm: 
        + middleware: session
        + thêm 1 table vào db -> lưu session này lại để thêm vào giỏ hàng
            -> add to cart: thêm dô giỏ hàng
8. Add to card: 
    - tạo cartMiddleware tác động lên toàn bộ url 
        -> tìm kím cái id ở trong session -> lấy ds cart ra đếm -> res.locals -> next
9. CSRF Attack: cross-site request forgery
    - transfer money form : đổi dữ liệu thông qua form , link
    - User đăng nhập lưu lại cookie, session
    - Hacker tạo 1 form ẩn -> action đến trang chuyển tiền 
    - ko cần submit vẫn chuyển được tiền -> onload 
    - TOKEN: signature
10. Mongoose: connect -> model -> controller

11. API : 
    - Put: update all attribute, replace element ,
    - Patch: chang a few attribute
12. Error handling (ExpressJS): 
    - Nếu client cần data để render mà server bị lỗi (xảy ra ở trước dòng trả data)
        -> ko có data -> xoay hoài!!!
    