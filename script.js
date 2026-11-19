const railStatus = document.querySelector(".rail-status");

if (railStatus) {
  const dot = railStatus.querySelector(".status-dot");
  dot?.setAttribute("aria-hidden", "true");
}
