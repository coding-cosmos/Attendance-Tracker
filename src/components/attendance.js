import down from "../icons/downV2.svg";
import up from "../icons/upV2.svg";
import "../styles/attendance.css";

function Attendance(name) {
  const div = document.createElement("div");
  div.className = "sub";
  div.innerHTML = `
                <div class="sub-name">${name}</div>
                <div class="selector-wrapper">
                    <div class="selector">
                     <div class="value">Select</div>           
                      <img src="${down}" alt="" srcset="" >
                    </div>
                    <div class="selector-options-wrapper ">
                        <div
                        class="selector-options ">
                        <div class="selector-option" id="attend">Attended</div>
                        <div class="selector-option" id="bunk">Bunk</div>
                        <div class="selector-option" id="holiday">Holiday</div>
                        </div>
                    </div>
                </div>
              `;
  div.querySelector(".selector>img").addEventListener("click", (e) => {
    e.target.src = e.target.src == up ? down : up;
    const options = div.querySelector(".selector-options-wrapper");

    options.classList =
      e.target.src == up
        ? "selector-options-wrapper selector-dropdown"
        : "selector-options-wrapper";

    const selector = div.querySelector(".selector");
    selector.style.zIndex = e.target.src == up ? 3 : 1;
  });

  return div;
}

export default Attendance;
