         function filterCategory(category, btnElement) {
            // 1. 處理頁籤按鈕的高亮狀態 (active)
            const buttons = document.querySelectorAll('.tab-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            btnElement.classList.add('active');

            // 2. 處理卡片的顯示與隱藏
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.classList.remove('hide'); // 顯示
                } else {
                    card.classList.add('hide');   // 隱藏
                }
            });
        }
                // ================= 年齡驗證邏輯 =================
        document.addEventListener("DOMContentLoaded", function () {
            const ageModal = document.getElementById("age-modal");
            const btnAccept = document.getElementById("btn-accept");
            const btnDecline = document.getElementById("btn-decline");

            // 檢查瀏覽器紀錄：如果之前已經驗證過了，直接把 Pop-up 藏起來
            if (localStorage.getItem("ageVerified") === "true") {
                ageModal.style.display = "none";
            }

            // 點擊「我已滿 18 歲」
            btnAccept.addEventListener("click", function () {
                localStorage.setItem("ageVerified", "true"); // 記錄狀態
                
                // 淡出動畫效果
                ageModal.style.opacity = "0";
                setTimeout(() => {
                    ageModal.style.display = "none";
                }, 400);
            });

            // 點擊「未滿 18 歲」直接拒絕存取
            btnDecline.addEventListener("click", function () {
                alert("非常抱歉，依據相關法規，未滿 18 歲請勿瀏覽本網站。");
                // 可以直接將畫面導向其他安全網址，或留在原地鎖死
                window.location.href = "https://www.google.com"; 
            });
        });
        document.addEventListener("DOMContentLoaded", function () {
            const lightbox = document.getElementById("image-lightbox");
            const lightboxImg = document.getElementById("lightbox-img");
            const closeBtn = document.querySelector(".lightbox-close");

            // 抓取產品網格內的所有圖片（請確認你的卡片圖片 class 或 tag）
            const productImages = document.querySelectorAll(".product-grid img");

            productImages.forEach(img => {
                img.addEventListener("click", function () {
                    lightbox.style.display = "flex";
                    lightboxImg.src = this.src;
                });
            });

            // 點擊關閉按鈕
            closeBtn.addEventListener("click", function () {
                lightbox.style.display = "none";
            });

            // 點擊背景區域也能關閉
            lightbox.addEventListener("click", function (e) {
                if (e.target !== lightboxImg) {
                    lightbox.style.display = "none";
                }
            });
        });

        // 1. 禁止滑鼠右鍵選單
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

        // 2. 禁止選取文字（Select Start）
        document.addEventListener('selectstart', function(e) {
            e.preventDefault();
        });

        // 3. 禁止複製（Copy）與剪切（Cut）
        document.addEventListener('copy', function(e) {
            e.preventDefault();
        });
        document.addEventListener('cut', function(e) {
            e.preventDefault();
        });

        // 4. 禁止貼上（Paste）
        document.addEventListener('paste', function(e) {
            e.preventDefault();
        });

        // 5. 禁止快捷鍵（Ctrl+C, Ctrl+V, Ctrl+U 查看原始碼, F12 開發者工具）
        document.addEventListener('keydown', function(e) {
            // 檢查是否按下 Ctrl (Windows) 或 Cmd (Mac)
            const isCmdOrCtrl = e.ctrlKey || e.metaKey;

            if (
                (isCmdOrCtrl && e.key.toLowerCase() === 'c') || // Ctrl+C 複製
                (isCmdOrCtrl && e.key.toLowerCase() === 'v') || // Ctrl+V 貼上
                (isCmdOrCtrl && e.key.toLowerCase() === 'x') || // Ctrl+X 剪切
                (isCmdOrCtrl && e.key.toLowerCase() === 'u') || // Ctrl+U 查看原始碼
                (isCmdOrCtrl && e.key.toLowerCase() === 's') || // Ctrl+S 儲存網頁
                e.key === 'F12'                                 // F12 開發者工具
            ) {
                e.preventDefault();
            }
        });
        // 若輸入框焦點在 input 或 textarea 時不防護
        document.addEventListener('copy', function(e) {
            const target = e.target.tagName.toLowerCase();
            if (target !== 'input' && target !== 'textarea') {
                e.preventDefault();
            }
        });