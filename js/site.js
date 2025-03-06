
document.getElementById('dropdownButton').addEventListener('click', function() {
    const dropdownContent = document.getElementById('customDropdown');
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }
  });