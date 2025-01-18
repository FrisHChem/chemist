document.addEventListener("DOMContentLoaded", function () {
    const experimentSelect = document.getElementById("experiment-select");
    const startExperimentButton = document.getElementById("start-experiment");
    const experimentArea = document.getElementById("experiment-area");

    startExperimentButton.addEventListener("click", () => {
        const selectedExperiment = experimentSelect.value;
        experimentArea.innerHTML = "";

        if (selectedExperiment === "acid-base") {
            experimentArea.innerHTML = `
                <h3>Phản ứng axit - bazơ</h3>
                <p>Thêm HCl vào NaOH và quan sát sự thay đổi màu sắc do chỉ thị.</p>
                <p><strong>Phương trình:</strong> HCl + NaOH → NaCl + H<sub>2</sub>O</p>
            `;
        } else if (selectedExperiment === "precipitation") {
            experimentArea.innerHTML = `
                <h3>Phản ứng tạo kết tủa</h3>
                <p>Trộn dung dịch BaCl<sub>2</sub> và H<sub>2</sub>SO<sub>4</sub>, kết tủa trắng xuất hiện.</p>
                <p><strong>Phương trình:</strong> BaCl<sub>2</sub> + H<sub>2</sub>SO<sub>4</sub> → BaSO<sub>4</sub> + 2HCl</p>
            `;
        } else if (selectedExperiment === "combustion") {
            experimentArea.innerHTML = `
                <h3>Phản ứng cháy</h3>
                <p>Đốt cháy CH<sub>4</sub> (methane) với oxy để tạo CO<sub>2</sub> và H<sub>2</sub>O.</p>
                <p><strong>Phương trình:</strong> CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O</p>
            `;
        } else {
            experimentArea.innerHTML = `<p>Vui lòng chọn một thí nghiệm từ danh sách.</p>`;
        }
    });
});
