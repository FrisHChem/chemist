document.getElementById("findMaterial").addEventListener("click", function() {
    var subject = document.getElementById("subject").value;
    var grade = document.getElementById("grade").value;
    var materialsContainer = document.getElementById("materials");

    // Xóa kết quả cũ
    materialsContainer.innerHTML = "";

    // Tạo danh sách tài liệu theo môn và lớp
    var materials = [];
    if (subject === "Hoá học" && grade === "10") {
        materials = [
            { name: "Bài Tập Hóa 10 Chương 3", url: "https://drive.google.com/file/d/1ssOuSCcqPYKatyqPY35sW24Hpb4kBpxH/view?usp=drive_link" },
        ];
    } else if (subject === "Hoá học" && grade === "HSGQG") {
        materials = [
            { name: "HSGQG 2025", url: "https://drive.google.com/file/d/1D3EPSAPtJPcdCJC2zjwB1m-rkUlzLBF8/view?usp=sharing" }
        ];
    }

    // Nếu không có tài liệu
    if (materials.length === 0) {
        var noMaterialsMessage = document.createElement("p");
        noMaterialsMessage.classList.add("text-danger");
        noMaterialsMessage.innerText = "Không có tài liệu cho môn học và lớp đã chọn.";
        materialsContainer.appendChild(noMaterialsMessage);
    } else {
        // Hiển thị tài liệu
        materials.forEach(function(material) {
            var materialElement = document.createElement("div");
            materialElement.classList.add("exercise", "mb-4", "p-4", "bg-light", "rounded", "shadow-sm");

            var title = document.createElement("h2");
            title.classList.add("text-primary");
            title.innerHTML = material.name;
            
            var link = document.createElement("a");
            link.classList.add("btn", "btn-warning");
            link.href = material.url;
            link.target = "_blank";
            link.innerHTML = "Truy cập File";

            materialElement.appendChild(title);
            materialElement.appendChild(link);
            materialsContainer.appendChild(materialElement);
        });
    }
});
