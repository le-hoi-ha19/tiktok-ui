-axios là gì:
+ là 1 http client
+ là 1 công cụ giúp các bạn gửi đi các request http-> giống như dùng các phương thức get,put,patch.. để gọi api để lấy dữ liệu


-một số tác dụng của Axios là:
+ dùng XMLHttpRequests để gửi api trên trình duyệt
+ dùng http để gọi api trên nodejs
+ hỗ trợ promise api
+ đánh chặn yêu cầu gửi đi và phản hồi trả về(trước khi yêu cầu được gửi đi thì có thể can thiệp vào làm 1 điều gì đó, trước khi  1 respond nhận được trong then thì các bạn cũng có thể can thiệp làm gì đó )
+ chuyển đổi dữ liệu gửi đi trước khi api được gọi hoặc chuyển đổi phản hồi trước khi các bạn nhận được
+ hủy 1 request khi nó chưa hoàn thành
+ tự động chuyển đổi kiểu dữ liệu json
+ hỗ trợ phòng chống tấn công kiểu mạo danh(XSRF)
