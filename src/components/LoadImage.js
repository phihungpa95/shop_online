export default function LoadImage() {
    document.querySelectorAll(' [data-setbg]').forEach((e) => {
        let bg = e.getAttribute('data-setbg');
        // console.log(e.getAttribute('data-setbg'));
        e.style.backgroundImage = `url(${bg})`;
    })
}