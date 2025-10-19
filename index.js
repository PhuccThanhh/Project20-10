const nut = document.getElementById('nut');
const nap = document.getElementById('nap');
const text = document.getElementById('text');
const box = document.getElementById('box');
const h2 = document.getElementById('h2');
const h3 = document.getElementById('h3');
const h4 = document.getElementById('h4');
function createHearts(count = 10) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";

    // vị trí xuất phát ngẫu nhiên trên màn hình
    const left = Math.random() * window.innerWidth;
    const top = Math.random() * window.innerHeight;

    heart.style.left = left + "px";
    heart.style.top = top + "px";

    // kích thước và thời gian ngẫu nhiên cho tự nhiên hơn
    heart.style.fontSize = 12 + Math.random() * 24 + "px";
    heart.style.animationDuration = 2 + Math.random() * 2 + "s";
    heart.style.opacity = 0.7 + Math.random() * 0.3;

    document.body.appendChild(heart);

    // xóa tim sau khi bay xong
  }
}let heartInterval = null; // để lưu interval

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤";

  // vị trí ngẫu nhiên
  const left = Math.random() * window.innerWidth;
  const top = Math.random() * window.innerHeight;

  heart.style.left = `${left}px`;
  heart.style.top = `${top}px`;

  // ngẫu nhiên kích cỡ, màu, tốc độ
  const colors = [ "#ff0000"];
  heart.style.color = colors[Math.floor(Math.random() * colors.length)];
  heart.style.fontSize = 12 + Math.random() * 20 + "px";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";

  document.body.appendChild(heart);

  // xoá tim sau 5s
  setTimeout(() => heart.remove(), 5000);
}

// bật hiệu ứng tim liên tục
function startHearts() {
  if (heartInterval) return; // tránh tạo trùng interval
  heartInterval = setInterval(() => {
    createHeart();
  }, 100); // mỗi 200ms tạo 1 tim
}

// tắt hiệu ứng tim
function stopHearts() {
  clearInterval(heartInterval);
  heartInterval = null;
}

window.onload = () => {
  h2.classList.add('dau');
  h2.addEventListener('animationend',(e)=>{
    if (e.animationName === "load") {
      h2.classList.remove('dau');
      h3.classList.add('dau');
    }
  });
  h3.addEventListener('animationend',(e)=>{
    if (e.animationName === "load") {
      h3.classList.remove('dau');
      h4.classList.add('dau');
    }
  });
  h4.addEventListener('animationend',(e)=>{
    if (e.animationName === "load") {
      h4.classList.remove('dau');
      setTimeout(() => {
        h2.style.display = 'none';
        h3.style.display = 'none';
        h4.style.display = 'none';
      }, 500);
    }
  });
  box.classList.add("hien");
  nap.classList.add('hien')
  nut.classList.add('hiennut');
  box.addEventListener('animationend',(e)=>{
  if (e.animationName === "d") {
    box.classList.remove("hien");
    nap.classList.remove('hien')
    nut.classList.remove('hiennut');
  }
})
};

nut.addEventListener('click', ()=>{
  nap.classList.add('m');
})
nap.addEventListener('animationend', (e)=>{
  if (e.animationName === "a") {
    text.classList.add('truotlen');
  }
})
text.addEventListener('animationend', (e)=>{
  if (e.animationName === "b") {
    nap.classList.remove('m')
    box.classList.add('bienmat');
    nap.classList.add('bienmat');
    text.classList.remove('bienmat');
    nut.classList.add('annut');
  }
})
box.addEventListener('animationend', (e)=>{
  if (e.animationName === "c") {
    box.style.display = 'none';
    nut.style.display = 'none';
    nap.style.display = 'none';
    text.classList.remove('truotlen');
    text.classList.add('truotxuong');
    startHearts();
  }
})
