<nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <a class="navbar-brand" href="../">Paul's Projects</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link {% if page.pagetype=='home' %}active{% endif %}" href="../">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link {% if page.pagetype=='facial' %}active{% endif %}" href="../facial_detector/info.html">Facial Detector App</a>
      <a class="nav-item nav-link {% if page.pagetype=='credit' %}active{% endif %}" href="../bank_credit_card/info.html">Credit Card App</a>
      <!--<a class="nav-item nav-link {% if page.pagetype=='popup' %}active{% endif %}" href="../popup_use_case/info.html">Popup Use Case</a>-->
    </div>
  </div>
</nav>