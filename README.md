Project 2
=========

## Đề tài
Xây dựng ứng dụng mạng xã hội

## Sinh viên thực hiện
* Họ và tên: **Phạm Tuấn Sang**
* MSSV: 20146596

## Giảng viên hướng dẫn
* **T.S Nguyễn Tuấn Dũng**


## Hướng dẫn cài đặt

Download source code về máy
```sh
$ git clone https://github.com/sangpt/project2
```

Cài đặt gem
```sh
$ bundle install --without production
```
Tạo file config database theo đường dẫn
`config/database.yml`

Tạo database
```sh
$ rails db:create
```

Tạo các bảng
```sh
$ rails db:migrate
```

Tạo dữ liệu master data
```sh
$ rails db:seed
```

Chạy server
```sh
$ rails server
```

Sau đó có thể truy cập theo đường dẫn http://localhost:3000 và sử dụng tài khoản
admin@gmail.com / 12345678 là tài khoản admin

## Live demo
```
https://sangpt-project2.herokuapp.com
```

## Giấy phép
Project này sử dụng giấy phép [MIT License](https://opensource.org/licenses/MIT)
