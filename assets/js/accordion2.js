// document.addEventListener("DOMContentLoaded", function () {
//     const buttons = document.querySelectorAll(".accordion-button");
//     const panels = document.querySelectorAll(".panel-info");
  
//     panels.forEach(panel => {
//       panel.style.display = "none"; 
//     });
  

//     const initialPanel = document.querySelector(".panel-info.active");
//     if (initialPanel) {
//       initialPanel.style.display = "block";
//     }
  
//     buttons.forEach((button, index) => {
//       if (index === 0) {
//         button.classList.add("active"); 
//       }
  
//       button.addEventListener("click", () => {
//         const target = button.getAttribute("data-target");
//         const panel = document.querySelector(`[data-panel="${target}"]`);
  
//         if (panel) {
//           panels.forEach(p => {
//             if (p !== panel) {
//               p.style.display = "none"; 
//             }
//           });
  
//           panel.style.display = panel.style.display === "none" ? "block" : "none";
  
         
//           buttons.forEach(btn => {
//             btn.classList.remove("active");
//           });
//           button.classList.toggle("active");
//         }
//       });
//     });
//   });
  
  