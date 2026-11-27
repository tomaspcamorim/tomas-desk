const workspace = document.querySelector('.app');
const panelButtons = document.querySelectorAll('[data-show-panel]');
for (const button of panelButtons) {
  button.addEventListener('click', () => {
    workspace.dataset.panel = button.dataset.showPanel;
    for (const tab of panelButtons) tab.setAttribute('aria-pressed', String(tab === button));
  });
}

const picker = document.querySelector('.tool-picker');
document.addEventListener('pointerdown', event => {
  if (!picker.contains(event.target)) picker.open = false;
});
picker.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    picker.open = false;
    picker.querySelector('summary').focus();
  }
});

function workbenchColor(token) {
  return getComputedStyle(document.documentElement).getPropertyValue(token).trim();
}

function bindCameraTools(camera, controls, fitView) {
  function zoom(factor) {
    const offset = camera.position.clone().sub(controls.target);
    const distance = Math.max(controls.minDistance || 5, Math.min(controls.maxDistance, offset.length() * factor));
    camera.position.copy(controls.target).add(offset.setLength(distance));
    controls.update();
  }
  document.getElementById('zoomIn').onclick = () => zoom(0.8);
  document.getElementById('zoomOut').onclick = () => zoom(1.25);
  document.getElementById('fitView').onclick = fitView;
}
