<img src="https://github.com/bochen2014/jo-math-class/blob/master/screen-shots/0%20splash-screen.png?raw=true" width="200"/>
<img src="https://github.com/bochen2014/jo-math-class/blob/master/screen-shots/1%20new-quiz.png?raw=true" width="200" />

## react-native
1. build apk
 * place `bo-chen.keystore` under `android\app\bo-chen.keystore`
 * touch ~/.gradle/gradle.properties
 * edit with 
   ```
    MYAPP_RELEASE_STORE_FILE=bo-chen.keystore
    MYAPP_RELEASE_KEY_ALIAS=bo-keystore
    MYAPP_RELEASE_STORE_PASSWORD=123456
    MYAPP_RELEASE_KEY_PASSWORD=123456
   ```
 * `$ cd android && ./gradlew assembleRelease`

The generated APK can be found under  `android/app/build/outputs/apk/app-release.apk`, and is ready to be distributed.
2. start gradlew
```
$ react-native run-android
```
for gradle task. to force a clean build , delete everything from `D:\SampleApp\android\app\build`

3. start bundle server

```
$ react-native start --help
Scanning 630 folders for symlinks in D:\SampleApp\node_modules (23ms)

  react-native start [options]
  starts the webserver

  Options:
    --reset-cache, --resetCache                                   Removes cached files

    --port [number]
    --host [string]
    --root [list]                                                 add another root(s) to be used by the packager in this project
    --projectRoots [list]                                         override the root(s) to be used by the packager
    --assetExts [list]                                            Specify any additional asset extensions to be used by the packager
    --sourceExts [list]                                           Specify any additional source extensions to be used by the packager
    --platforms [list]                                            Specify any additional platforms to be used by the packager
    --providesModuleNodeModules [list]                            Specify any npm packages that import dependencies with providesModule
    --max-workers [number]                                        Specifies the maximum number of workers the worker-pool will spawn for transforming files. This defaults to the numb
er of the cores available on your machine.
    --skipflow                                                    Disable flow checks
    --nonPersistent                                               Disable file watcher
    --transformer [string]                                        Specify a custom transformer to be used
    
    --custom-log-reporter-path, --customLogReporterPath [string]  Path to a JavaScript file that exports a log reporter as a replacement for TerminalReporter
    --verbose                                                     Enables logging
    --https                                                       Enables https connections to the server
    --key [path]                                                  Path to custom SSL key
    --cert [path]                                                 Path to custom SSL cert
    --config [string]                                             Path to the CLI configuration file
    -h, --help                                                    output usage information
```