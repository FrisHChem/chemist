function showTests() {
    var subject = document.getElementById("subject").value;
    var testsContainer = document.getElementById("tests");

    // Xóa danh sách bài kiểm tra hiện tại
    testsContainer.innerHTML = "";

    // Kiểm tra nếu người dùng chưa chọn môn học
    if (!subject) {
        testsContainer.innerHTML = "<p style='color: red;'>Vui lòng chọn môn học để hiển thị bài kiểm tra.</p>";
        return;
    }

    // Danh sách bài kiểm tra
    var tests = [];
    if (subject === "Sinh học") {
        tests = [
            { name: "Ôn Tập Sinh Học HKI Sinh 10", url: "https://azota.vn/de-thi/smvose" }
        ];
    } else if (subject === "Vật lý") {
        tests = [
            { name: "ÔN TẬP VẬT LÍ 10 HKI", url: "https://azota.vn/de-thi/rkdf8n" }
        ];
    } else if (subject === "Toán học") {
        tests = [
            { name: "Ôn Tập Toán Học HKI Toán 10", url: "https://azota.vn/de-thi/example1" }
        ];
    }

    // Tạo nút bài kiểm tra
    tests.forEach(function(test) {
        var button = document.createElement("button");
        button.innerHTML = test.name;
        button.onclick = function() {
            window.open(test.url, "_blank");
        };
        testsContainer.appendChild(button);
    });
}
