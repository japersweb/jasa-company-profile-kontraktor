const formulir = document.querySelector('.formulir');
const loader = document.querySelector('.loader');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
const content = document.querySelector('.popup .content');

function showPopup(isSuccess, message) {
  loader.classList.add("tampil");
  setTimeout( () => {
    loader.classList.remove("tampil");
    popup.classList.add("show");
    content.classList.add(isSuccess ? "success" : "fail");
    document.querySelector('.content > h3').innerHTML = isSuccess ? 'Sukses' : 'Gagal';
    document.querySelector('.content > i').classList.add(isSuccess ? "fa-check" : "fa-times");
    document.querySelector('.content > p').innerHTML = message;
    formulir.reset();
  }, 500);
}

formulir.addEventListener('submit', function(event) {
  event.preventDefault();
  const serviceID = 'default_service';
  const templateID = 'template_bn0lojy';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      showPopup(true, 'Selamat, pesan telah terkirim. Tunggu balasan email dari kami.');
    })
    .catch(() => {
      showPopup(false, 'Terdapat kesalahan teknis. Tunggu beberapa saat lagi.');
    });
});

close.addEventListener("click", () => {
  popup.classList.remove("show");
  content.classList.remove("success", "fail");
  document.querySelector('.content > i').classList.remove("fa-check", "fa-times");
});