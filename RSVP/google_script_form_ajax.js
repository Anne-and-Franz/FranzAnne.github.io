var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbxRAGTKMh5JkPZYSEoQ0T4E3unzxx9BvcgkpuTXL9_ktGJfo1zU/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
<head>
  <script src="jquery.min.js"></script>
  <script src="jquery.serialize-object.min.js"></script>
</head>
