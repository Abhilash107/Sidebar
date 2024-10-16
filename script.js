document.addEventListener('DOMContentLoaded', function() {
    var spinner = document.querySelector('#mySpinner');
    if (spinner) {
      spinner.addEventListener('mdl-componentupgraded', function() {
        this.MaterialSpinner.setSpinner(44);
      });
    }
  });
  

  