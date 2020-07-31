const options = {
    root: null,
    rootMargin: "-200px -100px",
    threshold: 0,
};


const func = (entries, observer) => {
    entries.forEach(entry => {
        console.log(entry.isIntersecting); 

        if(entry.isIntersecting){
            entry.target.classList.add("active");
            console.log(entry.target);
        }
        else{
            entry.target.classList.remove("active");
        }
    });
}

let observer = new IntersectionObserver(func, options);

document.querySelectorAll("h1").forEach(h1 => {
    observer.observe(h1);
});