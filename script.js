    document.getElementById('submitBtn').addEventListener('click', function() {
    // ดึงค่าคำตอบจากช่อง input มาเป็นตัวพิมพ์เล็กทั้งหมด
    let answer = document.getElementById('answerInput').value.toLowerCase();
    let resultDiv = document.getElementById('result');

    // กำหนดคำตอบที่ถูกต้อง
    let correctAnswer = 'วันครบรอบ';

    // ตรวจสอบคำตอบ
    if (answer.includes(correctAnswer)) {
        // ถ้าคำตอบถูกต้อง
        resultDiv.style.color = '#4CAF50';
        resultDiv.innerHTML = 'ถูกต้องนะค้าบ! วันนี้คือ **วันครบรอบ** ของเราไงล่ะ!';
         // สั่งให้เปลี่ยนหน้าไปที่ letter.html หลังจากตอบถูก
        // การใช้ setTimeout จะทำให้มีดีเลย์เล็กน้อย ก่อนจะเปลี่ยนหน้า
        setTimeout(function() {
            window.location.href = 'letter.html';
        }, 1500); // 1500 มิลลิวินาที = 1.5 วินาที

    } else {
        // ถ้าคำตอบผิด
        resultDiv.style.color = '#f44336';
        resultDiv.innerHTML = 'ยังไม่ถูกน้าา ลองตอบอีกทีซิ!';
    }
});