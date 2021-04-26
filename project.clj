(defproject buddylistcljs "0.1.0-SNAPSHOT"
  :description "BuddyList"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.10.191" :exclusions [org.apache.ant/ant]]
                 [org.clojure/core.async "0.2.395"]
                 [reagent "0.6.0"]
                 [ring/ring-core "1.5.1"]
                 [figwheel "0.5.9"]
                 [cljs-http "0.1.46"]
                 [nilenso/wscljs "0.2.0"]
                 [cljs-ajax "0.7.5"]
                 [javax.xml.bind/jaxb-api "2.4.0-b180830.0359"]]
  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-externs "0.1.6"]
            [lein-shell "0.5.0"]
            [lein-figwheel "0.5.9" :exclusions [org.clojure/core.cache]]]
  :source-paths ["src_tools"]
  :aliases {"descjop-help" ["new" "descjop" "help"]
            "descjop-version" ["new" "descjop" "version"]
            "descjop-init" ["do"
                            ["shell" "npm" "install"]
                            ["shell" "grunt" "download-electron"]]
            "descjop-init-win" ["do"
                            ["shell" "cmd.exe" "/c" "npm" "install"]
                            ["shell" "cmd.exe" "/c" "grunt" "download-electron"]]
            "descjop-externs" ["do"
                               ["externs" "dev-main" "app/dev/js/externs.js"]
                               ["externs" "dev-front-initial" "app/dev/js/externs_front.js"]
                               ["externs" "dev-front-authentication" "app/dev/js/externs_front.js"]
                               ["externs" "prod-main" "app/prod/js/externs.js"]
                               ["externs" "prod-front-initial" "app/prod/js/externs_front.js"]
                               ["externs" "prod-front-authentication" "app/prod/js/externs_front.js"]]
            "descjop-externs-dev" ["do"
                                   ["externs" "dev-main" "app/dev/js/externs.js"]
                                   ["externs" "dev-front-initial" "app/dev/js/externs_front.js"]
                                   ["externs" "dev-front-authentication" "app/dev/js/externs_front.js"]]
            "descjop-externs-prod" ["do"
                                    ["externs" "prod-main" "app/prod/js/externs.js"]
                                    ["externs" "prod-front-initial" "app/prod/js/externs_front.js"]]
            "descjop-figwheel" ["trampoline" "figwheel" "dev-front-initial" "dev-front-authentication"]
            "descjop-once" ["do"
                            ["cljsbuild" "once" "dev-main"]
                            ["cljsbuild" "once" "dev-front-initial"]
                            ["cljsbuild" "once" "dev-front-authentication"]
                            ["cljsbuild" "once" "prod-main"]
                            ["cljsbuild" "once" "prod-front-initial"]
                            ["cljsbuild" "once" "prod-front-authentication"]]
            "descjop-once-dev" ["do"
                                ["cljsbuild" "once" "dev-main"]
                                ["cljsbuild" "once" "dev-front-initial"]
                                ["cljsbuild" "once" "dev-front-authentication"]]
            "descjop-once-prod" ["do"
                                 ["cljsbuild" "once" "prod-main"]
                                 ["cljsbuild" "once" "prod-front-initial"]
                                 ["cljsbuild" "once" "prod-front-authentication"]]
            ;; electron packager for production
            "descjop-uberapp-osx" ["shell" "electron-packager" "./app/prod" "buddylistcljs" "--platform=darwin" "--arch=x64" "--electron-version=1.6.6"]
            "descjop-uberapp-app-store" ["shell" "electron-packager" "./app/prod" "buddylistcljs" "--platform=mas" "--arch=x64" "--electron-version=1.6.6"]
            "descjop-uberapp-linux" ["shell" "electron-packager" "./app/prod" "buddylistcljs" "--platform=linux" "--arch=x64" "--electron-version=1.6.6"]
            "descjop-uberapp-win64" ["shell" "cmd.exe" "/c" "electron-packager" "./app/prod" "buddylistcljs" "--platform=win32" "--arch=x64" "--electron-version=1.6.6"]
            "descjop-uberapp-win32" ["shell" "cmd.exe" "/c" "electron-packager" "./app/prod" "buddylistcljs" "--platform=win32" "--arch=ia32" "--electron-version=1.6.6"]
            }
  :hooks [leiningen.cljsbuild]
  :cljsbuild {:builds {:dev-main {:source-paths ["src"]
                                  :incremental true
                                  :jar true
                                  :assert true
                                  :compiler {:output-to "app/dev/js/cljsbuild-main.js"
                                             :externs ["app/dev/js/externs.js"
                                                       "node_modules/closurecompiler-externs/path.js"
                                                       "node_modules/closurecompiler-externs/process.js"]
                                             :warnings true
                                             :elide-asserts true
                                             :target :nodejs

                                             ;; no optimize compile (dev)
                                             ;; :optimizations :none
                                             :output-dir "app/dev/js/out_main"

                                             ;; simple compile (dev)
                                             :optimizations :simple

                                             ;; advanced compile (prod)
                                             ;;:optimizations :advanced

                                             ;;:source-map "app/dev/js/test.js.map"
                                             :pretty-print true
                                             :output-wrapper true}}
                       :dev-front-initial {:source-paths ["src_front/buddylistcljs_front_initial/dev"]
                                   :incremental true
                                   :jar true
                                   :assert true
                                   :compiler {:output-to "app/dev/js/front_initial.js"
                                              :externs ["app/dev/js/externs_front.js"]
                                              :warnings true
                                              :elide-asserts true
                                              ;; :target :nodejs

                                              ;; no optimize compile (dev)
                                              :optimizations :none
                                              :output-dir "app/dev/js/out_front/buddylistcljs_front_initial"

                                              ;; simple compile (dev)
                                              ;;:optimizations :simple

                                              ;; advanced compile (prod)
                                              ;;:optimizations :advanced

                                              ;;:source-map "app/dev/js/test.js.map"
                                              :pretty-print true
                                              :output-wrapper true}}
                       :dev-front-authentication {:source-paths ["src_front/buddylistcljs_front_authentication/dev"]
                                           :incremental true
                                           :jar true
                                           :assert true
                                           :compiler {:output-to "app/dev/js/front_authentication.js"
                                                      :externs ["app/dev/js/externs_front.js"]
                                                      :warnings true
                                                      :elide-asserts true
                                              ;; :target :nodejs

                                              ;; no optimize compile (dev)
                                                      :optimizations :none
                                                      :output-dir "app/dev/js/out_front/buddylistcljs_front_authentication"

                                              ;; simple compile (dev)
                                              ;;:optimizations :simple

                                              ;; advanced compile (prod)
                                              ;;:optimizations :advanced

                                              ;;:source-map "app/dev/js/test.js.map"
                                                      :pretty-print true
                                                      :output-wrapper true}}
                       :prod-main {:source-paths ["src"]
                                   :incremental true
                                   :jar true
                                   :assert true
                                   :compiler {:output-to "app/prod/js/cljsbuild-main.js"
                                              :externs ["app/prod/js/externs.js"
                                                        "node_modules/closurecompiler-externs/path.js"
                                                        "node_modules/closurecompiler-externs/process.js"]
                                              :warnings true
                                              :elide-asserts true
                                              :target :nodejs

                                              ;; no optimize compile (dev)
                                              ;;:optimizations :none
                                              :output-dir "app/prod/js/out_main"

                                              ;; simple compile (dev)
                                              :optimizations :simple

                                              ;; advanced compile (prod)
                                              ;;:optimizations :advanced

                                              ;;:source-map "app/prod/js/test.js.map"
                                              :pretty-print true
                                              :output-wrapper true}}
                       :prod-front-initial {:source-paths ["src_front/buddylistcljs_front_initial/prod"]
                                    :incremental true
                                    :jar true
                                    :assert true
                                    :compiler {:output-to "app/prod/js/front_initial.js"
                                               :externs ["app/prod/js/externs_front.js"]
                                               :warnings true
                                               :elide-asserts true
                                               ;; :target :nodejs

                                               ;; no optimize compile (dev)
                                               ;;:optimizations :none
                                               :output-dir "app/prod/js/out_front/buddylistcljs_front_initial"

                                               ;; simple compile (dev)
                                               :optimizations :simple

                                               ;; advanced compile (prod)
                                               ;;:optimizations :advanced

                                               ;;:source-map "app/prod/js/test.js.map"
                                               :pretty-print true
                                               :output-wrapper true}}
                       :prod-front-authentication {:source-paths ["src_front/buddylistcljs_front_authentication/prod"]
                                            :incremental true
                                            :jar true
                                            :assert true
                                            :compiler {:output-to "app/prod/js/front_authentication.js"
                                                       :externs ["app/prod/js/externs_front.js"]
                                                       :warnings true
                                                       :elide-asserts true
                                               ;; :target :nodejs

                                               ;; no optimize compile (dev)
                                               ;;:optimizations :none
                                                       :output-dir "app/prod/js/out_front/buddylistcljs_front_authentication"

                                               ;; simple compile (dev)
                                                       :optimizations :simple

                                               ;; advanced compile (prod)
                                               ;;:optimizations :advanced

                                               ;;:source-map "app/prod/js/test.js.map"
                                                       :pretty-print true
                                                       :output-wrapper true}}}}
  :figwheel {:http-server-root "public"
             :ring-handler figwheel-middleware/app
             :server-port 3449})
