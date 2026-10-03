const input=document.getElementById("fileInput");
const info=document.getElementById("fileInfo");
const start=document.getElementById("startBtn");
const status=document.getElementById("status");
const drop=document.getElementById("dropzone");

input.addEventListener("change",()=>handleFile(input.files[0]));
function handleFile(file){
  if(!file)return;
  info.classList.remove("hidden");
  info.innerHTML=`<strong>Selected:</strong> ${escapeHtml(file.name)}<br><small>${(file.size/1024/1024).toFixed(1)} MB • ${file.type||"video"}</small>`;
  start.disabled=false;
}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
["dragenter","dragover"].forEach(e=>drop.addEventListener(e,x=>{x.preventDefault();drop.style.borderColor="#8b5cf6"}));
["dragleave","drop"].forEach(e=>drop.addEventListener(e,x=>{x.preventDefault();drop.style.borderColor=""}));
drop.addEventListener("drop",e=>handleFile(e.dataTransfer.files[0]));

start.addEventListener("click",()=>{
  status.classList.remove("hidden");
  status.innerHTML="⏳ <strong>Demo processing started…</strong><br><small>Analyzing structure and preparing an original-content workflow.</small>";
  start.disabled=true;
  setTimeout(()=>{status.innerHTML="✅ <strong>Plan ready.</strong><br><small>For a real final MP4, connect this frontend to a video-rendering backend/API. This demo intentionally does not claim to remove copyright from third-party material.</small>";start.disabled=false},1800);
});