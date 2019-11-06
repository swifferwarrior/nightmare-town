        <script type="text/javascript">
            var reader = new FileReader();
                
            function readText(that){
                if(that.files && that.files[0]){
                  var reader = new FileReader();
                  reader.onload = function (e) {
                      var output='../pages/stories/story-0.txt';
                      document.getElementById('text').innerHTML= output;
                    };//end onload()
                    reader.readAsText(that.files[0]);
                }
            } 
        </script>




<script type='text/javascript'>
  var stories = [];
    stories.push('../pages/stories/story-0.txt'); <!--0-->
    stories.push('../pages/stories/story-2.txt'); <!--1-->

  var random = Math.floor(stories.length * Math.random());

  document.getElementById('story').innerHTML = (stories[random-1]);
</script>