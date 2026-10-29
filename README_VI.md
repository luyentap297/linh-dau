# LINH ĐẤU — BỘ MÃ NGUỒN WEB 6 NHÂN VẬT

Bản xuất ngày 29/10/2026. Bộ này chứa mã nguồn và toàn bộ hình ảnh cần thiết của game hiện tại.

## 1. Trong bộ mã có gì?

| Tệp / thư mục | Nội dung |
|---|---|
| `index.html` | Màn hình chọn võ sĩ, võ đài, điều khiển cảm ứng, cài đặt và kết quả |
| `style.css` | Giao diện máy tính, điện thoại dọc/ngang |
| `game.js` | Logic chiến đấu, AI, combo, tuyệt chiêu, âm thanh, lưu thành tích |
| `assets/` | Võ đài và toàn bộ hình/hoạt ảnh của 6 nhân vật |
| `tests/verify.cjs` | Kiểm tra logic bằng Node.js, không cần cài thư viện |

Các tệp trang web nằm ngay ở gốc file ZIP. Giữ `assets` cùng cấp với `index.html`.

Game chạy phía trình duyệt bằng HTML/CSS/JavaScript. Không cần Appwrite, Supabase, API key, Worker hay bước build. Bản tự triển khai này không có cơ chế đăng nhập ChatGPT.

## 2. Đưa lên Cloudflare Pages bằng ZIP

Đây là cách nhanh để có một website riêng.

1. Đăng nhập Cloudflare và mở **Workers & Pages**.
2. Chọn **Create application**, tìm luồng **Pages / Get started → Drag and drop your files** (tải lên trực tiếp).
3. Nhập tên dự án, ví dụ `linh-dau-hothibi`.
4. Kéo thả file `LINH_DAU_WEB_6_NHAN_VAT.zip` vào vùng tải lên. Có thể chọn thư mục đã giải nén chứa trực tiếp `index.html` thay cho ZIP.
5. Chọn **Deploy site** hoặc **Save and Deploy**, tùy màn hình đang hiển thị.
6. Mở địa chỉ Cloudflare trả về và kiểm tra chọn võ sĩ, bắt đầu trận, điều khiển điện thoại.

Không nhập lệnh build hay cấu hình database cho bộ này. Nếu được hỏi thư mục đầu ra, chọn thư mục chứa trực tiếp `index.html`.

Để cập nhật dự án tải lên trực tiếp: vào dự án → **Create a new deployment** → chọn Production → tải bộ tệp mới → triển khai.

Nếu muốn tự triển khai mỗi lần sửa mã trên GitHub, tạo dự án Pages theo luồng kết nối Git ngay từ đầu. Cloudflare không cho chuyển một dự án Direct Upload sang Git integration; cần tạo dự án Git mới.

Tài liệu chính thức: https://developers.cloudflare.com/pages/get-started/direct-upload/

## 3. Đưa lên GitHub Pages

Nên tạo kho riêng cho game để dễ cập nhật.

1. Giải nén `LINH_DAU_WEB_6_NHAN_VAT.zip` trên máy tính.
2. Vào GitHub, tạo repository mới tên ví dụ `linh-dau`; chọn Public nếu sử dụng GitHub Pages với repository công khai.
3. Mở repository → **Add file → Upload files**.
4. Kéo các tệp `index.html`, `style.css`, `game.js` và cả thư mục `assets` vào. Có thể tải toàn bộ nội dung đã giải nén. **Không tải nguyên file ZIP lên rồi chờ GitHub tự giải nén.**
5. Bấm **Commit changes** để lưu trên nhánh `main`.
6. Vào **Settings → Pages**.
7. Trong **Build and deployment → Source**, chọn **Deploy from a branch**.
8. Chọn nhánh **main**, thư mục **/(root)** → **Save**.
9. Chờ GitHub hoàn tất triển khai, rồi mở đường dẫn ở mục Pages.

Ví dụ, nếu tạo repository `linh-dau` trong tài khoản `thpthothibi`, đường dẫn dự kiến là:

`https://thpthothibi.github.io/linh-dau/`

Đây là ví dụ theo tên tài khoản/kho, không phải thông báo rằng bộ mã đã được tải lên tài khoản GitHub đó.

Nếu đặt game vào kho website đã có, hãy đặt toàn bộ bộ game trong một thư mục riêng như `linh-dau/`, không ghi đè `index.html` đang dùng cho trang chính. Khi đó mở đường dẫn thư mục tương ứng của website hiện tại.

Tài liệu chính thức:
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## 4. Hosting thông thường / cPanel

Tạo thư mục `public_html/linh-dau/` (hoặc thư mục website do hosting cung cấp), rồi tải **nội dung đã giải nén** vào đó. `index.html` phải ở trực tiếp trong thư mục game và `assets` nằm cùng cấp. Mở đường dẫn thư mục game trên tên miền của bạn. Không cần PHP hoặc MySQL.

## 5. Chạy thử tại máy tính

Nên chạy qua máy chủ HTTP cục bộ để trình duyệt cho phép đọc dữ liệu ảnh vào canvas. Không mở game chỉ bằng cách nhấp đúp `index.html` qua địa chỉ `file://`.

Nếu máy đã có Python 3, mở Terminal tại thư mục chứa `index.html` và chạy:

```bash
python -m http.server 8080 --bind 127.0.0.1
```

Trên Windows dùng Python Launcher có thể chạy:

```powershell
py -3 -m http.server 8080 --bind 127.0.0.1
```

Sau đó mở `http://127.0.0.1:8080/`. Nhấn Ctrl+C trong Terminal để dừng.

Nếu máy chưa có Python, có thể dùng Live Server trong VS Code hoặc tải thẳng lên hosting theo mục 2/3 để thử.

## 6. Cách chơi

Điện thoại:
- Kéo cần trái/phải để tiến, lùi. Thả tay để dừng.
- Nhảy có nút riêng; giữ một lần chỉ nhảy một lần.
- Giữ **ĐÁNH** để nối chuỗi đấm–đấm–đá khi áp sát.
- **ĐÁ MẠNH** là đòn đánh mạnh riêng.
- Chạm **ĐỠ** để bật/tắt; khi di chuyển hoặc ra đòn sẽ thoát đỡ.
- Tuyệt chiêu sáng khi đủ 100% năng lượng.
- Menu tạm dừng cho chỉnh cỡ nút, tay thuận, âm thanh và rung trên thiết bị hỗ trợ.

Máy tính:
- Người 1: A/D di chuyển, W nhảy, J combo, K đá, L đỡ, U tuyệt chiêu.
- Người 2 trong chế độ 2 người: mũi tên trái/phải/lên; 1/2/3/0 tương ứng đánh/đá/đỡ/tuyệt chiêu.
- Esc để tạm dừng/tiếp tục.

Chế độ:
- **Đấu nhanh**: đấu AI theo 3 mức khó, thắng 2 hiệp để thắng trận.
- **Luyện tập**: đối thủ đứng tập, tự hồi máu sau khi bị hạ, không giới hạn thời gian.
- **2 người**: cùng bàn phím trên một máy tính.

## 7. Sáu nhân vật

| Võ sĩ | Đặc điểm | Tuyệt chiêu |
|---|---|---|
| Thanh Lam | Ra đòn nhanh, cân bằng | Thanh Long Chưởng, 27 sát thương |
| Hỏa Phong | Chậm hơn, sát thương cao | Hỏa Quyền, 32 sát thương |
| Bạch Hổ | Quyền cước mạnh, di chuyển chậm | Hổ Gầm, chưởng lớn/chậm, 35 sát thương |
| Huyền Ảnh | Di chuyển nhanh nhất | Song Ảnh, hai luồng chưởng, 14 sát thương mỗi luồng |
| Lôi Vũ | Tốc chiến | Lôi Kích, chưởng bay nhanh, 26 sát thương |
| Ngọc Liên | Cân bằng, có hồi phục | Liên Hoa, 23 sát thương và hồi tối đa 8 máu khi xuất chiêu |

Sát thương ghi trong bảng là khi trúng trực tiếp; đỡ đòn làm giảm sát thương. Bạn chọn được đối thủ cụ thể hoặc chọn ngẫu nhiên.

## 8. Chỉnh sửa mã

Mở thư mục bằng VS Code. Có thể dùng **Format Document** để định dạng lại tệp trước khi sửa.

- Đổi màu sắc, kích thước nút, bố cục: sửa `style.css`.
- Đổi tiêu đề, chữ hiển thị, menu: sửa `index.html`.
- Chỉnh tên, tốc độ, sát thương, hồi chiêu và tuyệt chiêu: xem mảng `characters` đầu `game.js`.
- Ảnh võ đài: `assets/arena.png`.
- Hình võ sĩ: `blue.png`, `red.png`, `tiger.png`, `shadow.png`, `thunder.png`, `lotus.png`.
- Hai võ sĩ đầu có thêm `blue-motion.png`, `red-motion.png`; bốn võ sĩ mới dùng ảnh 12 tư thế trong một tệp.

Nếu thay ảnh sprite, phải giữ đúng bố cục chia ô mà mã đọc ảnh đang dùng. Đổi số hàng/cột cần sửa cấu hình đọc ảnh tương ứng.

Khi cập nhật CSS/JS, tăng phiên bản trong hai đường dẫn `style.css?v=5.0` và `game.js?v=5.0` ở `index.html` để trình duyệt tải bản mới.

## 9. Phạm vi và dữ liệu

- Đây là game web 2D chạy tại trình duyệt. Hiện chưa có đấu online giữa hai máy.
- Thành tích, võ sĩ đã chọn và cài đặt lưu bằng localStorage của trình duyệt. Không đồng bộ giữa điện thoại/máy tính hoặc các tên miền; xóa dữ liệu trang sẽ xóa các thiết lập/thành tích này.
- Không có tài khoản người chơi, bảng xếp hạng máy chủ hay kết nối cơ sở dữ liệu trong bộ này.
- Hình ảnh đều nằm trong `assets`; không cần tải ảnh từ website khác.
- Lần đầu có thể cần vài giây tải ảnh. Võ sĩ chưa tải xong sẽ hiển thị trạng thái chờ; nếu lỗi có thể chạm lại để thử tải.

## 10. Kiểm tra và xử lý lỗi

Nếu máy đã có Node.js, chạy kiểm tra logic:

```bash
node tests/verify.cjs
```

Bài kiểm tra bao gồm sáu bộ chỉ số, tuyệt chiêu riêng, chọn đối thủ, combo, đỡ đòn, nhảy, chuyển hiệp, kết quả, luyện tập, AI, tạm dừng và cần di chuyển.

Lỗi thường gặp:
- **404 trang chính**: kiểm tra `index.html` ở đúng gốc thư mục được xuất bản.
- **Không có hình/võ sĩ tải mãi**: kiểm tra tải đủ `assets` và giữ nguyên tên tệp/chữ hoa chữ thường.
- **Mở bằng file nhưng không chạy**: dùng HTTP cục bộ hoặc hosting; xem mục 5.
- **Vẫn thấy giao diện cũ**: tải lại không dùng cache (Ctrl+F5 trên máy tính) hoặc tăng tham số phiên bản CSS/JS khi cập nhật.
- **Không có âm thanh**: kiểm tra cài đặt âm thanh, chạm vào màn hình để trình duyệt cho phép phát, kiểm tra âm lượng thiết bị.
