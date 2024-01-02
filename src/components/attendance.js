import down from "../icons/downV2.svg";
import up from "../icons/upV2.svg";
import "../styles/attendance.css";

function Attendance(name,status) {
  const div = document.createElement("div");
  div.className = "sub";
  div.innerHTML = `
                <div class="sub-name">${name}</div>
                <div class="selector-wrapper">
                    <div class="selector">
                     <div class="value">${status}</div>           
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
     e.target.src == up ? close(div) : open(div);
  });


  return div;
}

function close(div) {
  const optionsWrapper = div.querySelector(".selector-options-wrapper");
  optionsWrapper.classList = "selector-options-wrapper";
  div.querySelector(".selector>img").src = down;
}

function open(div) {
  const optionsWrapper = div.querySelector(".selector-options-wrapper");
  optionsWrapper.classList = "selector-options-wrapper selector-dropdown";
  const img = div.querySelector(".selector>img");
  img.src = up;

    const selector = div.querySelector(".selector");
    selector.style.zIndex = img.src == up ? 3 : 1;
}


export default Attendance;
