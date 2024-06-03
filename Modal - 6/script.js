document.addEventListener('DOMContentLoaded', function() {
    
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('modal');
    const cancelBtn = document.getElementById('cancelBtn');
  
    // Open modal
    openModalBtn.addEventListener('click', function() {
        modal.classList.add("toggle_class");
    });
  
    // Close modal
    function closeModal() {
        modal.classList.remove("toggle_class");
    }

    cancelBtn.addEventListener('click', closeModal);

  });
