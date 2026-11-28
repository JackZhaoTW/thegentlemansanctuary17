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