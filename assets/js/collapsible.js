document.addEventListener("DOMContentLoaded", function() {
  var coll = document.getElementsByClassName("collapsible");
  for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      // Find the next .content element anywhere after this button
      var content = this.nextElementSibling;
      while (content && !content.classList.contains("content")) {
        content = content.nextElementSibling;
      }
      // If still not found, search the parent's children
      if (!content) {
        var parent = this.parentElement;
        var candidates = parent.getElementsByClassName("content");
        if (candidates.length > 0) content = candidates[0];
      }
      if (!content) return;  // nothing to toggle
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
});
