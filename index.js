const element = document.getElementById("aside");
const backdrob = document.getElementById("backdrob");
const openSidebar = () => {
  backdrob.classList.add("backdrobOpen");
  element.classList.add("openAside");
};

const closeSidebar = () => {
  backdrob.classList.remove("backdrobOpen");
  element.classList.remove("openAside");
};
