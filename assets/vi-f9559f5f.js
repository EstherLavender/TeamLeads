const t=n=>({connectionScreen:{inProgress:"Đang đợi xác nhận",failed:"Kết nối thất bại",instruction:`Kết nối bằng ứng dụng ${n}`,retry:"Thử lại"},getStartedScreen:{instruction:`Quét mã QR để tải ứng dụng ${n}`},scanScreen:{instruction:`Quét mã QR bằng ứng dụng ${n} để kết nối`},getStartedLink:`Tôi không có ứng dụng ${n}`,download:{chrome:"Tải cho trình duyệt Chrome",android:"Tải trên Google Play",iOS:"Tải trên App Store"}});export{t as default};