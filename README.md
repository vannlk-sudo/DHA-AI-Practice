# DHA-AI-Practice

## Page Object Model (POM)

Các test đăng nhập được tách theo ba phần chính:

- `page/`: Page Object, chứa các thao tác và locator của từng trang.
- `fixture/`: Fixture khởi tạo và cung cấp Page Object cho test.
- `test/`: Các test sử dụng fixture và kiểm tra kết quả.

Ví dụ luồng đăng nhập:

1. `LoginPage` trong `page/LoginPage.ts` điều khiển trang đăng nhập.
2. `fixture/test.fixture.ts` tạo `LoginPage` từ `page` của Playwright.
3. `test/login.spec.ts` gọi các thao tác của Page Object và xác nhận kết quả.

Chạy riêng các test POM:

```bash
npx playwright test test/login.spec.ts
```