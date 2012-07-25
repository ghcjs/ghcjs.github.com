
            window.onload = function(){
                goog.debug.Console.autoInstall();
                $hs_loadPath = "./";

                // Must be called first
                $hs_init();

                var input = document.getElementById("fayIn");
                var autoRun = document.getElementById("autoRun");
                var compile = document.getElementById("compile");
                var output = document.getElementById("fayOut");
                compile.onclick = function() {
                    $hs_runIO([
                        $$$Main_compileFromTo,
                        $hs_mkBool(autoRun.checked),
                        $hs_toString(input.value)
                        ],
                        function(str) {
                            $hs_fromString([str],
                                function(result) {
                                    output.value = result;});});
                }
            }
        