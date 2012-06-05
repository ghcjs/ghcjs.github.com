
            var link = function(f, inputId, outputId) {
                var input = document.getElementById(inputId);
                var setup = function() {
                    var run = function() {
                        $hs_fromLazyText([f, $hs_toLazyText(input.value)],
                            function(result) {
                                document.getElementById(outputId).innerHTML = result;});
                    }
                    input.onkeydown = run;
                    input.onkeyup = run;
                    input.onchange = run;
                    run();
                }
                input.onkeydown = setup;
                input.onkeyup = setup;
                input.onchange = setup;
            };
            var linkIO = function(f, inputId, outputId) {
                var input = document.getElementById(inputId);
                var setup = function() {
                    var run = function() {
                        $hs_runIO([f, input.value], function(str) {
                            $hs_fromLazyText([str],
                                function(result) {
                                    document.getElementById(outputId).innerHTML = result;});});
                              }
                    input.onkeydown = run;
                    input.onkeyup = run;
                    input.onchange = run;
                    run();
                }
                input.onkeydown = setup;
                input.onkeyup = setup;
                input.onchange = setup;
            };
            window.onload = function(){
                goog.debug.Console.autoInstall();
                $hs_loadPath = "./";

                // Must be called first
                $hs_init();

                link  ($$$Main_hello,         "name",     "hello");
                link  ($$$Main_validatePrime, "num",      "prime");
                linkIO($$$Main_tryHamlet,     "hamletIn", "hamletOut");
            }
        